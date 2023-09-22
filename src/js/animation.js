export const reveal = () => {
  const sections = document.querySelectorAll('.reveal');

  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const elementVisible = windowHeight * 0.35;

    if (elementTop < windowHeight - elementVisible) {
      section.classList.add('active');
    }
  });
};

window.addEventListener('scroll', reveal);
