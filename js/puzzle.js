/* Global Variables */
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



/* Changes x and y position in Object */
function movement(e) {
    let xTemp = null;
    let yTemp = null;
    let blankCurrentPos = null;
    let blankVerify = null;
    let clickedId = this.id;
    clickedId = Number(clickedId);
    //console.log({e});
    //console.log({clickedId});
    
    if (tiles[clickedId - 1] != undefined && clickedId % 4 != 0) {
        if (tiles[clickedId - 1].isBlank == 1) {
            checkTileMovement(clickedId);
        }
    }
    if (tiles[clickedId + 1] != undefined && (clickedId + 1) % 4 != 0) {
        if (tiles[clickedId + 1].isBlank == 1) {
            checkTileMovement(clickedId);
        }
    }
    if (tiles[clickedId - 4] != undefined) {
        if (tiles[clickedId - 4].isBlank == 1) {
            checkTileMovement(clickedId);
        }
    }
    if (tiles[clickedId + 4] != undefined) {
        if (tiles[clickedId + 4].isBlank == 1) {
            checkTileMovement(clickedId);
        }
    }
}

function checkTileMovement(id) {
    xTemp = tiles[id].x;
    yTemp = tiles[id].y;
    //console.log({ xTemp, yTemp });
    for (let j = 0; j < tiles.length; j++) {
        if (tiles[j].isBlank == 1) {
            blankCurrentPos = tiles[j].tileId;
            blankVerify = tiles[j].isBlank;

        }
    }
    // Swapping tile postiion between clicked and blank
    tiles[id].x = tiles[blankCurrentPos].x;
    tiles[id].y = tiles[blankCurrentPos].y;
    tiles[id].isBlank = 1;
    tiles[blankCurrentPos].x = xTemp;
    tiles[blankCurrentPos].y = yTemp;
    tiles[blankCurrentPos].isBlank = 0;


    // y * 4 + x
    let tileOne = document.getElementById(id);
    let tileTwo = document.getElementById(blankCurrentPos);
    tileOne.innerHTML = tiles[tileOne.id].y * 4 + tiles[tileOne.id].x;
    tileTwo.innerHTML = tiles[tileTwo.id].y * 4 + tiles[tileTwo.id].x;
}