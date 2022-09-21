class Game {
  constructor() {
    this.ground = null; // will store the bottom of the board
    this.lander = null; // will store the moving lander
    this.refreshDelay = 60;
    this.timeOut = null;
    this.gravity = 0.01;
  }
  start() {
    this.ground = new Ground();
    this.lander = new Lander();
    this.attachEventListeners();

    //move lander

    // Timer

    // this.moveLanderDown();
    // this.timeOut = setTimeout(this.moveLanderDown, this.refreshDelay);

    // Function that changes the timer

    // Function to run at irregular intervals

    setInterval(() => {
        this.lander.update(this.gravity);
        this.detectCollision(lander); //detect collision with lander
    }, this.refreshDelay);
  }

//   changeTimer() {
//     this.timer = this.timer * 1.2;
//   }

//   moveLanderDown() {
//     console.log(this.lander);
//     this.lander.moveDown();
//     this.changeTimer();
//   }

  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        this.lander.moveUp();
      }
    });
  }

  detectCollision(lander) {
    if (
      this.ground.positionY < this.lander.positionY + this.lander.height &&
      this.ground.height + this.ground.positionY > this.lander.positionY
    ) {
      console.log("game over....");
      location.href = "gameover.html";
    }
  }
}

class Lander {
  constructor() {
    this.width = 2;
    this.height = 2;
    this.positionX = 50 + this.width / 2;
    this.positionY = 98;
    this.domElement = null;
    this.speed = -0.05;

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

  update(gravity) {
    this.speed -= gravity;
    this.positionY = this.positionY + this.speed;
    this.domElement.style.bottom = this.positionY + "vh";
    // console.log(this.positionY--)
  }

  moveUp() {
    this.positionY += 1;
    this.domElement.style.bottom = this.positionY + "vw";
    console.log(this.positionY++);
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
