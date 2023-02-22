let tl = gsap.timeline();
tl.fromTo(
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
  );
