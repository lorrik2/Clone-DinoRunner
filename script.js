const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const start = document.querySelector('.start');
let counter = 0;
console.log(counter);

start.addEventListener('click', () => {
  const go = document.getElementById('goGo');
  go.className = 'invisible';

  cactus.style.animation = 'cactusMow 2s infinite linear';

  document.addEventListener('keydown', (e) => {
    jump();
    counter++;
  });

  function jump() {
    if (dino.classList != 'jump') {
      dino.classList.add('jump');
    }
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 300);
  }
  let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 43 && cactusLeft > 0 && dinoTop >= 140) {
      alert(`Игра закончилась 
Всего прыжков	 ${counter}`);
      location.reload();
    }
  }, 10);
});
