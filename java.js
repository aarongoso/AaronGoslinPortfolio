$(document).ready(function () {
  // Header sticky
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass('bgc');
    } else {
      $("header").removeClass('bgc');
    }

    // Scroll down feature
    if ($(window).scrollTop() > 50) {
      $(".scroll-down").css("opacity", "0");
    } else {
      $(".scroll-down").css("opacity", "1");
    }
  });
});

// JavaScript for Carousel Functionality
let currentIndex = 0; // Track the current slide index
const itemsToShow = 3; // Number of items to display at a time
const totalItems = document.querySelectorAll('.carousel-item').length;
const carouselWrapper = document.querySelector('.carousel-wrapper');

// Function to move slides
function moveSlide(direction) {
    // Calculate the new index position based on the direction (-1 for left, 1 for right)
    currentIndex += direction;

    // Ensure index is within bounds
    if (currentIndex < 0) {
        currentIndex = 0; // Stop at the first slide
    } else if (currentIndex > totalItems - itemsToShow) {
        currentIndex = totalItems - itemsToShow; // Stop at the last slide that can show 3 items
    }

    // Calculate the new translateX value to shift the carousel
    const translateXValue = -(currentIndex * (100 / itemsToShow));
    carouselWrapper.style.transform = `translateX(${translateXValue}%)`;
}

// Function to increment and display the view count
function updateAndDisplayViewCount() {
    const namespace = 'aarongoso.github.io'; // Use your GitHub Pages domain
    const key = 'view-counter'; // Use a unique key for this counter

    // Increment the view count using CountAPI
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            // Update the view count on the page
            document.getElementById('viewCount').textContent = data.value;
        })
        .catch(error => {
            console.error('Error updating view count:', error);
        });
}

// Call the function when the page loads
updateAndDisplayViewCount();
