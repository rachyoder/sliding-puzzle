let app = document.getElementById("app");

// Board Setup
function init() {
    app.innerHTML = "";
    app.setAttribute("class", "container");
    for (i = 0; i < 4; i++) {
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
                tileSpace.setAttribute("style", "height:250px; width:250px; overflow:hidden; background-color:grey;");
                tileSpace.addEventListener("click", movement);
                row.appendChild(tileSpace);
            }

        } else if (i === 2) {
            let col = document.createElement("div");
            let uploadBtn = document.createElement("INPUT");
            // let uploadIco = document.createElement("i");
            col.setAttribute("class", "col-12 p-0");

            uploadBtn.setAttribute("class", "btn btn-primary text-center");
            uploadBtn.setAttribute("type", "file");
            uploadBtn.setAttribute("id", "upload");
            uploadBtn.addEventListener("change", imageUpload);

            
            // uploadIco.setAttribute("class", "fas fa-upload");
            // uploadBtn.appendChild(uploadIco);
            col.appendChild(uploadBtn);
            row.appendChild(col);

        } else if (i === 3) {

            // let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let randomBtn = document.createElement("button");
            // let submitBtn = document.createElement("button");

            randomBtn.setAttribute("class", "btn btn-primary float-right");
            randomBtn.setAttribute("id", "random");
            randomBtn.innerHTML = "SHUFFLE";
            randomBtn.addEventListener("click", randomizeBoard);

            // submitBtn.setAttribute("class", "btn btn-primary float-left");
            // submitBtn.setAttribute("id", "loadPhoto")
            // submitBtn.innerHTML = "SUBMIT";
            // submitBtn.addEventListener("click", parseImage);

            //col1.setAttribute("class", "col-6");
            col2.setAttribute("class", "col-12");
            // col1.appendChild(submitBtn);
            col2.appendChild(randomBtn);
            // row.appendChild(col1);
            row.appendChild(col2);
        }
        app.appendChild(row);
    }
    setState();
}