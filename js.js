//Start constants and vars
const container = document.querySelector('.container');
let gridSize = 0;

//Add event listener to button to create grid and start drawing
const createGridBtn = document.querySelector('.create_grid');
createGridBtn.addEventListener('click', function(e) {
    do {
        gridSize = prompt('Please introduce the grid size (Between 1-100)!');
    } while ((Number(gridSize)<1) || (Number(gridSize)>100));
    
    container.innerHTML = ''; //Removes the previous grid
    createGrid(container,gridSize);  
    function drawing(e) {
        //e.target.classList.add('draw');  
        e.target.style['background-color'] = `rgb(${random(255)},${random(255)},
        ${random(255)})`;  
    }
    const sketch = Array.from(document.querySelectorAll('.blank'));
    sketch.forEach(square => square.addEventListener('mouseover', drawing));
});


// Generates the grid according to gridSize
function createGrid(container,gridSize) {
    container.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;

    for (let i=1;i<gridSize*gridSize+1;i++){
        let content = document.createElement('div');
        content.classList.add('blank');
        container.appendChild(content);      
    }
}

//Random function to create the random color
function random(number) {
    return Math.floor(Math.random()*number);
    }