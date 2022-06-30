let container = document.getElementById('container');
let button = document.getElementById('button');

document.addEventListener('DOMContentLoaded', createGrid());
button.addEventListener('click', createGrid);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //variable for checking if mouse down at same time as mouse over
document.body.onmouseup = () => mouseDown = false;

function initialize(){
    container.innerHTML = '';
    let grid = prompt('Choose grid size:');
    grid *= grid;
    console.log(grid);
    return grid;
}

function addGrid(e){
    if(e.type === 'mouseover' && !mouseDown) return; //testing if mousedown + mouseover

    this.classList.add('grid');
}

function createGrid(){
  let grid = initialize();
    for (i = 0; i < grid; i++){
        let gridBlock = document.createElement('div');
    
        container.appendChild(gridBlock);

        let gridSize = Math.sqrt(250000 / grid);

        gridBlock.style.height = `${gridSize}px`;
        gridBlock.style.width = `${gridSize}px`;

        gridBlock.addEventListener('mousedown', addGrid);
        gridBlock.addEventListener('mouseover', addGrid);
    }
  console.log(grid);
}




 