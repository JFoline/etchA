let x = 4;
let container = document.querySelector('#container');
let clearCell =document.querySelector('#clear');
growHost();

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

clearCell.addEventListener('click', function(){
killColony();
growHost();
});
