/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { doc } from "prettier";

window.onload = function() {
  //write your code here

  function symbolGenerator() {
    const symbols = ["♦", "♥", "♠", "♣"];
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function numberKingQueenJackAce() {
    const azar = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
    return azar[Math.floor(Math.random() * azar.length)];
  }

  function colorGenerator(figure) {
    if (figure === "♦" || figure === "♥") {
      return "red";
    }
    if (figure === "♠" || figure === "♣") {
      return "black";
    }
  }

  function LetterGenerator() {
    let pintStick = symbolGenerator();
    let color = colorGenerator(pintStick);
    let azar = numberKingQueenJackAce();

    // Pint and Stick

    let figureHeader = document.querySelector("#symbolsH");
    figureHeader.style.color = color;
    figureHeader.innerHTML = pintStick;

    let figureFooter = document.querySelector("#symbolsF");
    figureFooter.style.color = color;
    figureFooter.innerHTML = pintStick;

    // NUMBER RANDOM

    let numberRandom = document.querySelector("#number");
    numberRandom.style.color = color;
    numberRandom.innerHTML = azar;

    let numberTop = document.querySelector("#numberTop");
    numberTop.style.color = color;
    numberTop.innerHTML = azar;

    let numberBot = document.querySelector("#numberBot");
    numberBot.style.color = color;
    numberBot.innerHTML = azar;
  }

  LetterGenerator();

  // NEW CARD EVERY 10 SECONDS
  setInterval(() => {
    LetterGenerator();
  }, "10000");

  // BUTTON RANDOM LETTER

  let newLetter = document.querySelector("#newLetter");
  newLetter.innerHTML = "Carta Aleatoria";
  newLetter.addEventListener("click", () => {
    LetterGenerator();
  });

  // BUTTON DIMENSIONS

  let dimensionsElement = document.querySelector("#dimensions");
  dimensionsElement.innerHTML = "Tamaño de la carta";
  dimensionsElement.addEventListener("click", () => {
    alert("Aun las dimensiones generadas por el usuario estan en proceso.");
  });
};
