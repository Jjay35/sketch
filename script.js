const gridContainer = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


function createRows(rows){
    for ( i = 0; i < rows; i++){
        let row = document.createElement("div");
        gridContainer.appendChild(row).className = "gridRow";
    }
}

function createColumns(columns){
    for(i = 0; i < rows.length; i++){
        for(j = 0; j < columns; j++){
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
        } 
     }
}

function makeGrid(){
    createRows(16);
    createColumns(16);
}

makeGrid();