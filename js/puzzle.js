function Tile(x,y,isFilled) {
    this.x = x;
    this.y = y;
    this.isFilled = isFilled;
}


/* Sliding Tiles Constructor */
function SlidingTile(x,y,isFilled) {
    Tile.call(this,x,y)
    this.isFilled = true;

}
SlidingTile.prototype = object.create(Tile.prototype);
Object.defineProperty(SlidingTile.prototype, 'constructor', {
    Value: SlidingTile,
    enumerable: false,
    writeable: true
});
