let container = document.getElementById('container');
let grid = prompt('Choose grid size:');
grid *= grid;
let gridSize = Math.sqrt(640000 / grid);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //variable for checking if mouse down at same time as mouse over
document.body.onmouseup = () => mouseDown = false;

function addGrid(e){
    if(e.type === 'mouseover' && !mouseDown) return; //testing if mousedown + mouseover

    this.classList.add('grid');
}

function removeGrid(){
    this.classList.remove('grid');
}

for (i = 0; i < grid; i++){
    let gridBlock = document.createElement('div');
    
    container.appendChild(gridBlock);

    gridBlock.style.height = `${gridSize}px`;
    gridBlock.style.width = `${gridSize}px`;

    gridBlock.addEventListener('mousedown', addGrid);
    gridBlock.addEventListener('mouseover', addGrid);
}




 