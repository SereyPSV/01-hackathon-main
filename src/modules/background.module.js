import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    clearTimeout();
    this.screen = document.querySelector("body");
    this.screen.style.background = `rgb(${random(0, 256)}, ${random(
      0,
      256
    )}, ${random(0, 256)}`;
    setTimeout(() => {
      this.screen.style.background = "";
    }, 3000);
  }
}
