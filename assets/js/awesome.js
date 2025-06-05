  // Grab the button
  const backToTopBtn = document.getElementById('backToTop');

  // Show button once user scrolls down a bit:
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // When clicked, scroll smoothly to top:
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
