const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let reveal of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  }
});

