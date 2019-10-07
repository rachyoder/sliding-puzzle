/* Tile Constructor */
function Tile(idx, tileId, x, y, isBlank, color) {
    this.idx = idx;
    this.tileId = tileId;
    this.x = x;
    this.y = y;
    this.isBlank = isBlank;
    let text = document.createElement("div");
    text.innerHTML = idx;
    this.content = text;
    //this.color = color;
}

/* Fill columns with Tiles */
Tile.prototype.populate = function (col) {
    col.appendChild(this.content);
}

/* Add color to each Tile */
Tile.prototype.fill = function (col) {
    col.setAttribute("style", "background-color: " + this.color);
}

/* Create Tiles Array */
let tiles = [];
let xPos = 0;
let yPos = 0;
let blank = 1;
// let color = "rgb(0,0,0)"

for (i = 0; tiles.length < 16; i++) {
    let tile = new Tile(
        i,
        i,
        xPos,
        yPos,
        blank,
        //color
    );

    if (xPos < 3) {
        xPos++;
    } else if (xPos == 3) {
        xPos = 0;
        yPos++;
    }
    if (blank == 1) {
        blank--;
        // color = "rgb(255,255,255)";
    }
    tiles.push(tile);
}

/* Checks for Valid Tile Change */
function movement() {
    let xTemp = null;
    let yTemp = null;
    let blankId = null;
    let blankVerify = null;
    let clickedId = this.id;
    clickedId = Number(clickedId);

    if (tiles[clickedId - 1] != undefined && clickedId % 4 != 0) {
        if (tiles[clickedId - 1].isBlank == 1) {
            changeTileMovement(clickedId);
        }
    }
    if (tiles[clickedId + 1] != undefined && (clickedId + 1) % 4 != 0) {
        if (tiles[clickedId + 1].isBlank == 1) {
            changeTileMovement(clickedId);
        }
    }
    if (tiles[clickedId - 4] != undefined) {
        if (tiles[clickedId - 4].isBlank == 1) {
            changeTileMovement(clickedId);
        }
    }
    if (tiles[clickedId + 4] != undefined) {
        if (tiles[clickedId + 4].isBlank == 1) {
            changeTileMovement(clickedId);
        }
    }
    checkWin();
}

/* Changes Tile Position */
function changeTileMovement(id) {
    xTemp = tiles[id].x;
    yTemp = tiles[id].y;
    for (let j = 0; j < tiles.length; j++) {
        if (tiles[j].isBlank == 1) {
            blankId = tiles[j].tileId;
            blankVerify = tiles[j].isBlank;

        }
    }
    tiles[id].x = tiles[blankId].x;
    tiles[id].y = tiles[blankId].y;
    tiles[id].isBlank = 1;
    tiles[blankId].x = xTemp;
    tiles[blankId].y = yTemp;
    tiles[blankId].isBlank = 0;

    let tileOne = document.getElementById(id);
    let tileTwo = document.getElementById(blankId);
    tileOne.innerHTML = tiles[tileOne.id].y * 4 + tiles[tileOne.id].x;
    tileTwo.innerHTML = tiles[tileTwo.id].y * 4 + tiles[tileTwo.id].x;
}

function checkWin() {
    let winCount = 0;
    let winDisplay = document.getElementById("win");
    for (let k = 0; k < tiles.length; k++) {
        if(tiles[k].idx == tiles[k].y * 4 + tiles[k].x) {
            winCount ++;
        }
    }
    if (winCount == 16){
        winDisplay.innerHTML = "You Win!";
    } else {
        winDisplay.innerHTML = "Click the tiles to solve the puzzle";
    }
}

/* Random Number 0-15 */
function randomInt() {
    let int = Math.floor(Math.random() * Math.floor(16));
    return int.toString();
}

/* Randomize Board Placement */
function randomizeBoard() {
    let r = 0;
    do {
        document.getElementById(randomInt()).click();
        r++;
    } while(r < 1000);
}