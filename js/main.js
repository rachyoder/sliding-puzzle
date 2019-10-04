var app = document.getElementById("app");


// Board Setup
function init() {
    app.setAttribute("class", "container");
    var row = document.createElement("div");
    var col = document.createElement("col");
    row.setAttribute("class", "row");
    for (i = 0; i < 3; i++) {
        if (i === 0) {
            col.setAttribute("class", "col-12");
            var head = document.createElement("h1");
            head.setAttribute("class", "display-5");
            head.innerHTML = "Sliding Puzzle";
            col.appendChild(head);
            row.appendChild(col);
        } else if (i === 1) {
            // Setup all Boxes
            for (var j = 0; j < 16; j++) {
                var tileSpace = document.createElement("div");
                tileSpace.setAttribute("class","col-3 p-0 border text-center");
                tileSpace.setAttribute("id", j);
                tiles[j].populate(tileSpace);
                tileSpace.addEventListener("click", movement);
                row.appendChild(tileSpace);
            }
        }
        app.appendChild(row);
    }
}

init();