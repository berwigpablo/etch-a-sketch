const container = document.querySelector('.container');

for (i = 1; i < 256; i++){
    let div = document.createElement('div');
    container.appendChild(div);

    console.log(div);
    console.log(container);
}