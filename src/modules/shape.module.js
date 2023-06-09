import { Module } from "../core/module";
import { random } from "../utils";
import { creationFigure } from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.height = random(30, 500);
    this.width = random(30, 500);
    this.BCGColor = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(
      0,
      256
    )}`;
    this.borderRadius = `${random(40, 60)}%`;
    this.figure;
  }
  trigger() {
    this.figure = creationFigure(
      this.height,
      this.width,
      this.BCGColor,
      this.borderRadius
    );
    this.figure.style.left = `${random(
      0,
      document.documentElement.clientWidth - this.width
    )}px`;
    this.figure.style.top = `${random(
      0,
      document.documentElement.clientHeight - this.height
    )}px`;
    document.body.append(this.figure);
    setTimeout(() => {
      this.figure.remove();
    }, 5000);
  }
}
