// Theme Toggle with Sliding Button
const toggleInput = document.querySelector('.toggle-input');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const currentTheme = localStorage.getItem('theme');

// Initialize theme
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleInput.checked = true;
  sunIcon.style.opacity = '0.5';
  moonIcon.style.opacity = '1';
} else {
  sunIcon.style.opacity = '1';
  moonIcon.style.opacity = '0.5';
}

// Toggle theme on click
toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.opacity = '0.5';
    moonIcon.style.opacity = '1';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0.5';
  }
});

// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});