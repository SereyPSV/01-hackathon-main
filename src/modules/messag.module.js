import { Module } from "../core/module";

export class Quotes extends Module {
  constructor(type, text) {
    super(type, text);
    this.quotes;

    this.screen = document.querySelector("body");
    this.blockQuotes = document.querySelector(".quotes");
  }
  trigger() {
    getQuotes().then((result) => {
      this.quotes = result;
      this.blockQuotes.innerHTML = `<h3>Author: ${this.quotes.author}</h3> <h4>Phrase: ${this.quotes.text} </h4>`;
    });
    setTimeout(() => {
      this.blockQuotes.innerHTML = "";
    }, 5000);
  }
}
async function getQuotes() {
  const url = "https://type.fit/api/quotes";
  const quotes = await fetch(url);
  const data = await quotes.json();
  const newQuotes = data[Math.round(Math.random() * 1642 + 1)];
  return newQuotes;
}
