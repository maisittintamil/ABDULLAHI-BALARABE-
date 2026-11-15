// Toggle Navigation Menu
const menuToggle = document.getElementById('menu-toggle');
const navDrawer = document.getElementById('nav-drawer');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navDrawer.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navDrawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when tapping anywhere outside
document.addEventListener('click', (e) => {
  if (!navDrawer.contains(e.target) && !menuToggle.contains(e.target)) {
    navDrawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Typing Role Animation
const roles = [
  'Frontend Developer',
  'Mathematics Student',
  'BuildLab Contributor',
  'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-role');

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 55 : 95;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1600;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
