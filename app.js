const container = document.querySelector('.container')
const resetSizeBtn = document.querySelector('.reset')

function makeGrid(size) {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
      } 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item'
        cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = 'black'
        })
    }
}

makeGrid(16)


resetSizeBtn.addEventListener('click', resetSize)
function resetSize() {
    let gridNum = prompt("what size would you like the grid to be between 1-100:")
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`
    makeGrid(gridNum);
}