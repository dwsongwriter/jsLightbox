// Define the media query
const mediaQuery = window.matchMedia('(max-width: 600px)');
const imageElement = document.getElementById('responsiveImage');

// Function to load the appropriate image based on screen size
function loadResponsiveImage(event) {
  if (event.matches) {
    // Screen width is 600px or less - load small image
    imageElement.src = 'small-image.jpg';
    imageElement.alt = 'Small resolution image';
  } else {
    // Screen width is greater than 600px - load large image
    imageElement.src = 'large-image.jpg';
    imageElement.alt = 'Large resolution image';
  }
}

// Initial load based on current screen size
loadResponsiveImage(mediaQuery);

// Listen for changes in screen width
mediaQuery.addListener(loadResponsiveImage);