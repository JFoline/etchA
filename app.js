let x = 16;
let container = document.querySelector('#container');
let clearCell =document.querySelector('#clear');


function growHost(){
  for (let i = 0; i < x * x; i++) {
    let singleCell = document.createElement('div');
    singleCell.classList.add('emptyCell');
    container.appendChild(singleCell);

    singleCell.onmouseenter = function(){
    singleCell.classList.add('fullCell');
    };
  }
container.style.setProperty('grid-template-columns', `repeat(${x}, 1fr)`);

};

function killColony(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

clearCell.onclick = function(){
killColony();
let y = prompt("Pick a new board side", x);
growHost(x = y);
};
