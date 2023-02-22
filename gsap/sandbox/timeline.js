let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let tween1;
let boxesT;

button1.addEventListener('click', () => {
  boxesT = gsap.timeline({ repeat: -1, paused: true });
  boxesT
    .to('.box1', {
      x: 50,
      duration: 2,
    })
    .to('.box2', {
      x: 100,
      duration: 0.5,
    })
    .from('.box3', {
      x: 400,
      y: 400,
    })
    .fromTo('.box4', { x: 250, y: 250 }, { x: 0, y: 400 })
    .fromTo('.box5', { x: 300, y: 400 }, { x: 0, y: 0, scale: 5 });
});

button2.addEventListener('click', () => {
  boxesT.play();
});

button3.addEventListener('click', () => {
  boxesT.pause();
});
button4.addEventListener('click', () => {
  boxesT.reverse();
});
