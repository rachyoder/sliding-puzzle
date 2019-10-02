/* Global Variables */
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
    this.heightSize = heightSize;
    this.widthSize = widthSize;
    this.position = position;
    this.isFilled = isFilled;
}


/* Sliding Tiles Constructor */
function SlidingTile(idx, tileId, heightSize, widthSize, position, isFilled, color) {
    Tile.call(this,idx, tileId, heightSize, widthSize, position);
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
function EmptyTile(idx, tileId, heightSize, widthSize, position, isFilled) {
    Tile.call(this, idx, tileId, heightSize, widthSize, position);
    this.isFilled = false;

}
EmptyTile.prototype = Object.create(Tile.prototype);
Object.defineProperty(EmptyTile.prototype, 'constructor', {
    Value: EmptyTile,
    enumerable: false,
    writeable: true
});