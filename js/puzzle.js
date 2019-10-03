/* Global Variables */
// let gridPos = [
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];
let xPos = 0;
let yPos = 0;
let blank = 1;


/* Tile Constructor */
function Tile(idx, tileId, x, y, isBlank, currentPos) {
    this.idx = idx;
    this.tileId = tileId;
    this.x = x;
    this.y = y;
    this.isBlank = isBlank;
    this.currentPos = y * 4 + x;
    let text = document.createElement("div");
    text.innerHTML = idx;
    this.content = text;
}

Tile.prototype.populate = function (col) {
    col.appendChild(this.content);
}

/* Create Tiles Array */
let tiles = [];
for (i = 0; tiles.length < 16; i++) {
    let tile = new Tile(
        i,
        i,
        xPos,
        yPos,
        blank
    );
    if (xPos < 3) {
        xPos++;
    } else if (xPos == 3) {
        xPos = 0;
        yPos++;
    }
    if (blank == 1) {
        blank--;
    }
    tiles.push(tile);
}

function movement(e) {
    xTemp = null;
    yTemp = null;
    console.log(e);
    console.log(this);
    
}