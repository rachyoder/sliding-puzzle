let app = document.getElementById("app");

// Board Setup
function init() {
    app.setAttribute("class", "container");
    for (i = 0; i < 3; i++) {
        let row = document.createElement("div");
        let col = document.createElement("col");
        row.setAttribute("class", "row m-3");

        if (i === 0) {
            col.setAttribute("class", "col-12");
            let head = document.createElement("h1");
            head.setAttribute("class", "display-5 text-center");
            head.innerHTML = "Sliding Puzzle";

            let sub = document.createElement("h6");
            sub.setAttribute("class", "text-center text-muted");
            sub.setAttribute("id", "win");
            sub.innerHTML = "Click the tiles to solve the puzzle";

            col.appendChild(head);
            col.appendChild(sub);
            row.appendChild(col);

        } else if (i === 1) {
            // Setup all Boxes
            for (let j = 0; j < 16; j++) {
                let tileSpace = document.createElement("div");
                tileSpace.setAttribute("class", "col-3 p-0 border text-center");
                tileSpace.setAttribute("id", j);
                tiles[j].populate(tileSpace);
                tileSpace.addEventListener("click", movement);
                row.appendChild(tileSpace);
            }

        } else if (i === 2) {
            let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let randomBtn = document.createElement("button");
            let uploadBtn = document.createElement("INPUT");
            let uploadIco = document.createElement("i");

            randomBtn.setAttribute("class", "btn btn-primary");
            randomBtn.setAttribute("id", "random");
            randomBtn.innerHTML = "RANDOMIZE";
            randomBtn.addEventListener("click", randomizeBoard);

            uploadBtn.setAttribute("class", "btn btn-primary rounded-pill");
            uploadBtn.setAttribute("type", "file");
            uploadBtn.setAttribute("id", "upload");
            uploadIco.setAttribute("class", "fas fa-upload");

            col1.setAttribute("class", "col-6");
            col2.setAttribute("class", "col-6");
            uploadBtn.appendChild(uploadIco);
            col1.appendChild(uploadBtn);
            col2.appendChild(randomBtn);
            row.appendChild(col1);
            row.appendChild(col2);
        }
        app.appendChild(row);
    }
}

init();