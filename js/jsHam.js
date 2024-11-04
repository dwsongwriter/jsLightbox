const mediaQuery = window.matchMedia('(max-width: 600px)');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Function to handle visibility of the navbar based on screen width
function toggleNavbar(event) {
  if (event.matches) { // Screen width is 600px or less
    hamburger.style.display = 'block';
    navbar.style.display = 'none';
  } else { // Screen width is greater than 600px
    hamburger.style.display = 'none';
    navbar.style.display = 'flex';
  }
}

// Initial check on page load
toggleNavbar(mediaQuery);

// Listen for changes in screen width
mediaQuery.addListener(toggleNavbar);

// Toggle navbar visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
});