const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', chooseSize);

function chooseSize(){
    if (container.childNodes.length > 0){
        container.replaceChildren();
    }
    const userPrompt = Number(prompt('Choose grid size:'));
 
    createGrid(userPrompt);
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
    currentDiv.style.backgroundColor = 'black';
}