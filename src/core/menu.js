export class Menu {
  constructor(selector) {
    this.screen = document.querySelector("body");
    this.el = this.screen.querySelector(selector);

    this.screen.addEventListener("click", (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });
  }

  open() {
    this.el.classList.add("open");
    return 0;
    throw new Error(`"open" method should be implemented in Menu"`);
  }

  close() {
    this.el.classList.remove("open");
    return 0;
    throw new Error(`"close" method should be implemented in Menu"`);
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`);
  }
}
