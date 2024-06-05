const container = document.querySelector('.container');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const grid = document.querySelector('.grid-buttons');
const gridButton = grid.childNodes;
const button = document.querySelectorAll('button');
let opacity = 0.1;

startButton.addEventListener('click', chooseSize);
resetButton.addEventListener('click', resetGrid);
button.forEach(button => button.addEventListener('mousedown', showClick));
button.forEach(button => button.addEventListener('click', showClick));
gridButton.forEach(button => button.addEventListener('click', chooseSize));

function showClick(event){
    let clickedButton = event.target;

    clickedButton.classList.toggle('clicked');
}

function resetGrid(){
    container.replaceChildren();
    return
}

function chooseSize(event){
    let userPrompt = Number(event.target.classList.value);


    if (container.childNodes.length > 0){
        container.replaceChildren();
    }

    if(userPrompt){
        userPrompt = Number(event.target.classList.value);
    } else {
        userPrompt = Number(prompt('Choose grid size:'));
    }

    if(userPrompt > 100){
        alert('Grid size too large! Utilize a maximum of 100.');
    } else if(userPrompt < 0){
        alert('Use positive numbers to choose grid size.');
    } else createGrid(userPrompt);
}

function createGrid(userPrompt){

    let grid = userPrompt * userPrompt

    for(i = 0; i < grid; i++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor)
    }
    gridSize(userPrompt);
}

function gridSize(userPrompt){

    container.childNodes.forEach(div => {

        const height = 100 / userPrompt;
        const width = 100 / userPrompt;

        div.style.height = `${height}%`;
        div.style.width = `${width}%`;

    });
}

function changeColor(event){
    const currentDiv = event.target;

    const red = Math.floor(Math.random() * 256 + 1);
    const green = Math.floor(Math.random() * 256 + 1);
    const blue = Math.floor(Math.random() * 256 + 1);
   
    if(!currentDiv.style.backgroundColor){
        currentDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        currentDiv.style.opacity = `${opacity}`;
    } else if(currentDiv.style.opacity < 1){
        currentDiv.style.opacity = Number(currentDiv.style.opacity) + 0.1;
    }
}