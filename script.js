let container = document.getElementById('container');
let button = document.getElementById('button');
let defaux = document.getElementById('default');
let rainbow = document.getElementById('rainbow');
let clear = document.getElementById('clear');
let input = document.getElementById('input');
let sliderSize = document.getElementById('slider-size');
let normalMode = true;
let rainbowMode = false;


sliderSize.textContent = `${input.value} x ${input.value}`;

input.addEventListener('mousemove', () => sliderSize.textContent = `${input.value} x ${input.value}`);
input.addEventListener('change', createGrid);

//sliderSize.addEventListener

function sliderValue(e){
    console.log(input.value);
    input.addEventListener('change',() => console.log(input.value));
}

document.addEventListener('DOMContentLoaded', createGrid);
defaux.addEventListener('click', setDefault);
rainbow.addEventListener('click', setRainbow);
clear.addEventListener('click', clearGrid);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //variable for checking if mouse down at same time as mouse over
document.body.onmouseup = () => mouseDown = false;

function initialize(){
    container.innerHTML = '';

    let grid = input.value;
    grid *= grid;

    return grid;
}

function setMode(){
    if(normalMode){
        setDefault();
    } else {
        setRainbow();
    }
}

function setDefault(){

    rainbowMode = false;
    normalMode = true;

    let gridBlocks = container.childNodes;

    gridBlocks.forEach(block => {
        block.removeEventListener('mousedown', addRainbow);
        block.removeEventListener('mouseover', addRainbow);

        block.addEventListener('mousedown', addDefault);
        block.addEventListener('mouseover', addDefault);
    })
}

function setRainbow(){

    rainbowMode = true;
    normalMode = false;

    let gridBlocks = container.childNodes;

    gridBlocks.forEach(block => {
        block.removeEventListener('mousedown', addDefault);
        block.removeEventListener('mouseover', addDefault);

        block.addEventListener('mousedown', addRainbow);
        block.addEventListener('mouseover', addRainbow);
    })
}

function addDefault(e){
    if(e.type === 'mouseover' && !mouseDown) return; //testing if mousedown + mouseover

    this.style.backgroundColor = 'black';
}

function addRainbow(e){
    if(e.type === 'mouseover' && !mouseDown) return; //testing if mousedown + mouseover

    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function createGrid(){
  let grid = initialize();
  if (grid > 10000){ //checking if grid size is over 100x100
    grid = 10000;
  }
    for (i = 0; i < grid; i++){
        let gridBlock = document.createElement('div');
    
        container.appendChild(gridBlock);

        let gridSize = Math.sqrt(250000 / grid); //25000 = 500x500 space for etch-a-sketch

  
        gridBlock.style.height = `${gridSize}px`;
        gridBlock.style.width = `${gridSize}px`;
    }
  setMode();
}

function clearGrid(){
    let gridBlocks = container.childNodes;

    gridBlocks.forEach(block => {
        block.style.backgroundColor = 'white';
    })
}




 