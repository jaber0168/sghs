// Toggle the hamburger menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});
