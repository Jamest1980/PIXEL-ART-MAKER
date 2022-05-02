// Select color input
let colorChoice = "#000000"
const colorInput = document.getElementById("colorPicker");

// Gotta have a event listener for color input
colorInput.addEventListener("input", function() {
    colorChoice = colorInput.value; 
});

// Select size input
let gRows = 0;
let gCol = 0;
const heightInput = document.getElementById("inputHeight");
const widthInput =  document.getElementById("inputWidth");

// Gotta have a listener for submit button
const size = document.getElementById("sizePicker");
size.addEventListener("submit", makeGrid);

//pixel Canvas needs a listener
const canvas = document.getElementById("pixelCanvas");
canvas.addEventListener("click", colorPick);

// When size is submitted by the user, call makeGrid()

function makeGrid(i) {
    while (canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }
    gRows = heightInput.value;
    gCol = widthInput.value;

    for(let r = 0; r < gRows; r++){
        let newR = document.createElement("tr");
        for(let c = 0; c < gCol; c++){
            let newC = document.createElement("td");
            newR.appendChild(newC);
        }
        canvas.appendChild(newR);
    }
    i.preventDefault();
}
//color the cell by User
function colorPick(n) {
    if(n.target.nodeName === "TD") {
        n.target.style.backgroundColor = colorChoice;
    }
}
