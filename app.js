const container = document.querySelector('#container')

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--gird-cols', cols);
    for(i = o; i < (rows * cols); i++){
        let cell = document.createElement('div')
        cell.innerText = (c + 1);
        container.append(cell).className = 'grid-item';
    }
}

makeGrid(16, 16);