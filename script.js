var grid_set = 0; //gets enabled when the user clicks set
var grid;

function solve() {
    if (!grid_set)
        return;
    var squares = document.getElementsByClassName("num_in");
    

}

function set() {
    grid_set = 1;
    var squares = document.getElementsByClassName("num_in");

    grid = new Grid(3);
    
    var att;
    for (i = 0; i < squares.length; i++) {
        /* Disable text entry */
        att = document.createAttribute("disabled");
        squares[i].setAttributeNode(att);


    }
}

function reset() {
    grid_set = 0;
    var squares = document.getElementsByClassName("num_in");

    for (i = 0; i < squares.length; i++) {
        squares[i].removeAttribute("disabled");
        squares[i].value = "";
        squares[i].parentElement.style.border = "1px solid black";
    }
}

function square_click(row, col) {
    if (!grid_set)
        return;

    var squares = document.getElementsByClassName("num_in");
    var row_class = "row" + row;
    var col_class = "col" + col;
    console.log(row_class);
    for (i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains(row_class) && squares[i].classList.contains(col_class)) {
            squares[i].parentElement.style.border = "2px solid blue";
        }

    }
}
