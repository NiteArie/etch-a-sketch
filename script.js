
function removeBoard(size) {
    let board = document.querySelector(".board");
    let boardRow = document.querySelectorAll(".board__row");
    let removeCount = 0;

    for (let row of Array.from(boardRow)) {
        row.remove();
    }
}

function initBoard(size, boardWidth) {
    let board = document.querySelector(".board");

    let cellWidth = boardWidth / size; 

    for ( let i = 0; i < size; i++ ) {
    
        let row = document.createElement("div");
        row.classList.add("board__row");
    
        for ( let j = 0; j < size; j++ ) {
            let column = document.createElement("div");
            column.classList.add("board__row__column");

            column.style.width = cellWidth + "px";
            column.style.height = cellWidth - 2 + "px";
    
            column.addEventListener("mouseover", (event) => {
                if ( mode == "black") {
                    column.style.backgroundColor = "black";
                } else {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    column.style.backgroundColor = "#" + randomColor;
                }
            })
    
            row.appendChild(column);
        } 
    
        board.appendChild(row);
    }
}

function clearBoard(event) {
    let cells = document.querySelectorAll(".board__row__column");

    for ( let i = 0; i < cells.length; i++ ) {
        cells[i].style.backgroundColor = "white";
    }

    let inputSize;

    do {
        inputSize = Number(prompt("Create board with size:", "16"));
        if ( inputSize > 100 ) {
            alert("Board size cannot be greater than 100.");
        }
        if ( isNaN(inputSize) ) {
            alert("Invalid board size.");
        }
    } while (isNaN(inputSize) || inputSize > 100);

    removeBoard(size);
    initBoard(inputSize, boardWidth);
    size = inputSize;
}


let clearButton = document.querySelector(".buttons__clear");
let choice = document.querySelector(".buttons__options");
let mode = "black";

clearButton.addEventListener('click', clearBoard)

choice.addEventListener("change", (event) => {
    mode = choice.value;
})


let size = 16;
let boardWidth = 320;

initBoard(size, boardWidth);



