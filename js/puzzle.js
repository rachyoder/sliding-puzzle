/* Global Variables */
<<<<<<< HEAD
let gridPos = [
    [1,1,1,0],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
];

/* Movement Functions */
function xMovement () {

}


function Tile(idx, tileId, heightSize, widthSize, position, isFilled) {
    this.idx = idx;
    this.tileId = tileId;
=======
// let gridPos = [1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1];

function Tile(heightSize, widthSize, position, isFilled) {
>>>>>>> 98a1a0fcb43ba3b65084e1ed8474d964b72ca7e5
    this.heightSize = heightSize;
    this.widthSize = widthSize;
    this.position = position;
    this.isFilled = isFilled;
}


/* Sliding Tiles Constructor */
<<<<<<< HEAD
function SlidingTile(idx, tileId, heightSize, widthSize, position, isFilled, color) {
    Tile.call(this,idx, tileId, heightSize, widthSize, position);
=======
function SlidingTile(heightSize, widthSize, position, isFilled, color) {
    Tile.call(this, heightSize, widthSize, position);
>>>>>>> 98a1a0fcb43ba3b65084e1ed8474d964b72ca7e5
    this.isFilled = true;
    this.color = "rgb(102,102,153)";
}
SlidingTile.prototype = Object.create(Tile.prototype);
Object.defineProperty(SlidingTile.prototype, 'constructor', {
    Value: SlidingTile,
    enumerable: false,
    writeable: true
});


/* Empty Tile Constructor */
<<<<<<< HEAD
function EmptyTile(idx, tileId, heightSize, widthSize, position, isFilled) {
    Tile.call(this, idx, tileId, heightSize, widthSize, position);
=======
function EmptyTile(heightSize, widthSize, position, isFilled) {
    Tile.call(this, heightSize, widthSize, position);
>>>>>>> 98a1a0fcb43ba3b65084e1ed8474d964b72ca7e5
    this.isFilled = false;

}
EmptyTile.prototype = Object.create(Tile.prototype);
Object.defineProperty(EmptyTile.prototype, 'constructor', {
    Value: EmptyTile,
    enumerable: false,
    writeable: true
});