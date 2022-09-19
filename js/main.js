class Game {
  constructor() {
    this.ground = null; // will store the bottom of the board
    this.lander = null; // will store the moving lander
  }
  start() {
    this.ground = new Ground();
    this.lander = new Lander();

    //move lander
    setInterval(() => {
        this.lander.moveDown();
      }, 60);

    }
}

class Lander {
  constructor() {
    this.width = 2;
    this.height = 2;
    this.positionX = 50 + this.width / 2;
    this.positionY = 98;
    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id and css
    this.domElement.id = "lander";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    // append to the dom
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement);
  }

  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log(this.positionY--)
  }
}

class Ground {
  constructor() {
    this.width = 100;
    this.height = 3;
    this.positionX = 0;
    this.positionY = 0;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id and css
    this.domElement.id = "bottom";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    // append to the dom
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement);
  }
}

const game = new Game();
game.start();
