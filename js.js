const container = document.querySelector('.container');
gridSize = 0;

const createGridBtn = document.querySelector('.create_grid');
createGridBtn.addEventListener('click', function(e) {
    do {
        gridSize = prompt('Please introduce the grid size (Between 1-100)!');
    } while ((Number(gridSize)<1) || (Number(gridSize)>100));
    
    createGrid(container,gridSize);  
    function drawing(e) {
        e.target.classList.add('draw');   
    }
    const sketch = Array.from(document.querySelectorAll('.blank'));
    sketch.forEach(square => square.addEventListener('mouseover', drawing));
});

function createGrid(container,gridSize) {
    container.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;

    for (let i=1;i<gridSize*gridSize+1;i++){
        let content = document.createElement('div');
        content.classList.add('blank');
        container.appendChild(content);      
    }
}