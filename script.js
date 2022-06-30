let container = document.getElementById('container');
let button = document.getElementById('button');
let defaux = document.getElementById('default');
let rainbow = document.getElementById('rainbow');
let normalMode = true;
let rainbowMode = false;

document.addEventListener('DOMContentLoaded', createGrid);
button.addEventListener('click', createGrid);
defaux.addEventListener('click', setNormal);
rainbow.addEventListener('click', setRainbow);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //variable for checking if mouse down at same time as mouse over
document.body.onmouseup = () => mouseDown = false;

function setNormal(){
    normalMode = true;
    rainbowMode = false;


    createGrid();
}

function setRainbow(){
    normalMode = false;
    rainbowMode = true;


    createGrid();
}

function initialize(){
    container.innerHTML = '';

    let grid = prompt('Choose grid size:');
    grid *= grid;

    return grid;
}

function addGrid(e){
    if(e.type === 'mouseover' && !mouseDown) return; //testing if mousedown + mouseover

    this.classList.add('grid');
}

function addRainbow(e){
    if(e.type === 'mouseover' && !mouseDown) return;

    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    console.log(this);

    this.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function createGrid(){
  let grid = initialize();
  if (grid > 10000){
    grid = 10000;
  }
    for (i = 0; i < grid; i++){
        let gridBlock = document.createElement('div');
    
        container.appendChild(gridBlock);

        let gridSize = Math.sqrt(250000 / grid);

        gridBlock.style.height = `${gridSize}px`;
        gridBlock.style.width = `${gridSize}px`;

        if (normalMode === true){
            gridBlock.addEventListener('mousedown', addGrid);
            gridBlock.addEventListener('mouseover', addGrid);
        } else {
            gridBlock.addEventListener('mousedown', addRainbow);
            gridBlock.addEventListener('mouseover', addRainbow);
        }
    }
}






 