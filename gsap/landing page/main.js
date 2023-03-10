const initialPageAnimation = () => {
  let tl = gsap.timeline();
  tl.fromTo(
    '.info-section h1',
    {
      x: 0,
      y: 100,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    }
  )
    .fromTo(
      '.info-section h4',
      {
        x: 0,
        y: 100,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      }
    )
    .fromTo(
      '.logo',
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      }
    )
    .fromTo(
      '.menu',
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      },
      '> -1.8'
    )
    .fromTo(
      '.girl',
      {
        height: 0,
      },
      {
        height: 600,
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '>-.5'
    )
    .fromTo(
      '.boy',
      {
        width: 0,
      },
      {
        width: 400,
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '>-1'
    )
    .fromTo(
      '.shape1',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '>-1'
    )
    .fromTo(
      '.shape3',
      {
        opacity: 0,
      },
      {
        opacity: 0.6,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      '>-1'
    )
    .fromTo(
      '.shape3',
      {
        y: 300,
      },
      {
        y: 270,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )
    .fromTo(
      '.shape2',
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      '>-2'
    )
    .fromTo(
      '.shape2',
      {
        y: -300,
      },
      {
        y: -335,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );
};

const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    '.loading-bg',
    {
      y: 0,
    },
    { y: '100%', duration: 2 }
  );
};
const loadingLeave = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    '.loading-bg',
    {
      y: '100%',
    },
    {
      y: 0,
    }
  );
};

barba.init({
  sync: true,
  transitions: [
    {
      name: 'page-wipe',
      async leave(data) {
        const done = this.async();
        console.log('leaving animation');
        loadingLeave();
        await delay(2000);
        done();
      },
      async enter(data) {
        loadingEnter();
        initialPageAnimation();

        console.log('entering page animation');
      },
      async once(data) {
        initialPageAnimation();
      },
    },
  ],
});
