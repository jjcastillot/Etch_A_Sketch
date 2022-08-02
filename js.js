const container = document.querySelector('.container');
let gridSize = prompt('Please introduce the grid size!');
container.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
container.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;

for (let i=1;i<gridSize*gridSize+1;i++){
    let content = document.createElement('div');
    content.classList.add('blank');
    container.appendChild(content);      
}

function drawing(e) {
    e.target.classList.add('draw');   
}

const sketch = Array.from(document.querySelectorAll('.blank'));
sketch.forEach(square => square.addEventListener('mouseover', drawing));

