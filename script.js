// script.js

// Hero Section Background Image Slider
const heroSection = document.querySelector('.hero');
const images = [
  'C:\Users\Kirti\Desktop\folders containing folders\company\ishan related work for website\your-project-folder\PreKonnect Images',
  'PreKonnect%20Images/2bg.jpg',
  'PreKonnect%20Images/3bg.jpg',
  'PreKonnect%20Images/4bg.jpg',
  'PreKonnect%20Images/5bg.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Initialize the background image
changeBackgroundImage();

// Change background image every 10 seconds (10000 milliseconds)
setInterval(changeBackgroundImage, 10000);
