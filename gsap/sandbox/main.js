let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let tween1;
button1.addEventListener('click', () => {
  tween1 = gsap.fromTo(
    '.box',
    {
      background: 'yellow',
      x: 0,
      y: 0,
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },
    {
      x: 400,
      y: 1000,
      // width: '100px',
      // height: '100px',
      borderRadius: '50%',
      // opacity: '1',
      duration: 1,
      stagger: 0.5,
      ease: 'bounce.out',
      // delay: 2,
      // yoyo: true,
      // rotation: '+=360',
      // repeat: 1,
      // transformOrigin: '50% 50%',
      // paused: true,
      // runBackwards: true,
      onStart: () => {
        console.log('Started');
      },
      onComplete: () => {
        console.log('completed');
      },
      onUpdate: () => {
        console.log('Updated');
      },
    }
  );
});

button2.addEventListener('click', () => {
  tween1.play();
});

button3.addEventListener('click', () => {
  tween1.pause();
});
button4.addEventListener('click', () => {
  tween1.reverse();
});
