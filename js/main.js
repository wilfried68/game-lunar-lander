
class Game {
    constructor(){
        this.ground = null; //will store an instance of the class Player
    }
    start(){
        this.ground = new Ground();
   }

}

class Ground {
    constructor(){
        this.width = 100;
        this.height = 3;
        this.positionX = 0;
        this.positionY = 0;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }

}


const game = new Game();
game.start();


