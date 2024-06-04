const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', createGrid);
container.childNodes.forEach(div => div.addEventListener('mouseover', changeColor));


function createGrid(){
    let userPrompt = Number(prompt('Choose grid size:'))

    let grid = userPrompt * userPrompt

    for(i = 0; i < grid; i++){
        let div = document.createElement('div');
        container.appendChild(div);

    }

    container.childNodes.forEach(gridSize);
}

function gridSize(div){
    const height = container.clientHeight / userPrompt;
    const width = container.clientWidth / userPrompt;

    div.style.height = `${height}`;
    div.style.width = `${width}`;
}

function changeColor(event){
    const currentDiv = event.target;
    currentDiv.style.backgroundColor = 'black';
}


console.log(container.clientHeight);
console.log(container.clientWidth);
