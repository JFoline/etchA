let x =  document.getElementById("boardSize");
let container = document.querySelector('#container');
let clearCell =document.querySelector('#clear');


let output = document.getElementById("demo");
output.innerHTML = x.value;
x.oninput = function() {
  output.innerHTML = this.value;
  x = this.value
}

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

  growHost(x.value);
};
growHost(x = 16);
