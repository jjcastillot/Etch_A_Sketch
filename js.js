const container = document.querySelector('.container');
let gridSize = 16;


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
//sketch.addEventListener('mouseover', drawing);
