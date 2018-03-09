const x = 5;
const container = document.querySelector('#container');
const clear =document.querySelector('#clear');

container.style.setProperty('grid-template-columns', `repeat(${x}, 1fr)`);

for (let i = 0; i < x * x; i++) {
  const singleCell = document.createElement('div');
  singleCell.setAttribute('style','border-style:outset;');
  container.appendChild(singleCell);

  singleCell.onmouseenter = function(){
  singleCell.setAttribute('style','border-style:inset; background-color:black;');
  };

}
