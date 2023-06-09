import { modulesItem } from "./utils";
import { Menu } from "./core/menu";

import { Module } from "./core/module";

import { ClicksModule } from "../src/modules/clicks.module";
import { ShapeModule } from "../src/modules/shape.module";
import { BackgroundModule } from "../src/modules/background.module";
import { Quotes } from "../src/modules/messag.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.item = "";

    this.screen.addEventListener("contextmenu", (event) => {
      if (event.clientX > this.screen.offsetWidth - this.el.offsetWidth) {
        this.el.style.left = `${event.clientX - this.el.offsetWidth}px`;
      } else {
        this.el.style.left = `${event.clientX}px`;
      }
      if (event.clientY > this.screen.offsetHeight - this.el.offsetHeight) {
        this.el.style.top = `${event.clientY - this.el.offsetHeight}px`;
      } else {
        this.el.style.top = `${event.clientY}px`;
      }

      this.open();
      event.preventDefault();
      event = false;
    });
  }

  add() {
    modulesItem.forEach((e) => {
      const module = new Module(e.tipe, e.text);
      this.item = this.item + module.toHTML();
    });
    this.el.innerHTML = this.item;

    this.blockQuotes = document.createElement("div");
    this.blockQuotes.className = "quotes";
    this.blockQuotes.style.fontSize = "36px";
    this.blockQuotes.style.position = "fixed";
    this.blockQuotes.style.bottom = `0px`;
    this.blockQuotes.style.textAlign = "center";
    this.screen.append(this.blockQuotes);
  }

  chengeItem() {
    this.item = this.el.querySelectorAll(".menu-item");
    this.item.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.close();
        if (e.target.dataset.type === "1") {
          const clicksModule = new ClicksModule("this.type", "this.text");
          clicksModule.trigger();
        } else if (e.target.dataset.type === "2") {
          const shapeModule = new ShapeModule("this.type", "this.text");
          shapeModule.trigger();
        } else if (e.target.dataset.type === "3") {
          const BGModule = new BackgroundModule("this.type", "this.text");
          BGModule.trigger();
        } else if (e.target.dataset.type === "4") {
          const triggerMessage = new Quotes("this.type", "this.text");
          triggerMessage.trigger();
        }
      });
    });
  }
}
