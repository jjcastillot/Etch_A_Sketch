const container = document.querySelector('.container');
let gridSize = 16;


for (let i=1;i<gridSize*gridSize+1;i++){
    let content = document.createElement('div');
    content.classList.add(`C${i}`);
    container.appendChild(content);      
}