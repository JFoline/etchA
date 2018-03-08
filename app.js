const x = 16;
const container = document.querySelector('#container');

container.style.setProperty('grid-template-columns', `repeat(${x}, 1fr)`);

for (let i = 0; i < x * x; i++) {
  const singleCell = document.createElement('div');
  singleCell.setAttribute('style','border-color:grey; border-style:inset;');
  container.appendChild(singleCell);
}
