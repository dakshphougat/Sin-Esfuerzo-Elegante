const videoContainer = document.querySelector('.video-container');
const newSection = document.querySelector('.next-section'); // Make sure you're targeting the right section

const maxWidth = window.innerWidth * 0.9;  // 90% of screen width
const maxHeight = window.innerHeight * 0.9;  // 90% of screen height
const minWidth = 200;  // Starting width
const minHeight = 150;  // Starting height

// Function to update video position and size based on scroll
function updateVideoSize() {
  const scrollPos = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  
  // Define a threshold to control when the video should stop resizing and start moving up
  const resizeThreshold = maxScroll / 4; // Adjust this to control when resizing should stop
  
  // Calculate the scroll percentage based on the resizing phase
  const scrollPercentage = Math.min(scrollPos / resizeThreshold, 1); // Limit to 1 for resizing phase

  const newWidth = minWidth + (maxWidth - minWidth) * scrollPercentage;
  const newHeight = minHeight + (maxHeight - minHeight) * scrollPercentage;

  videoContainer.style.width = `${newWidth}px`;
  videoContainer.style.height = `${newHeight}px`;

  // After resizing is done, move the video upwards with further scrolling
  if (scrollPos > resizeThreshold) {
    const translateY = scrollPos - resizeThreshold;
    videoContainer.style.transform = `translateY(-${translateY}px)`;
    newSection.style.opacity = 1;  // Reveal the new section as video moves up
  } else {
    videoContainer.style.transform = 'translateY(0)'; // Reset position when resizing
    newSection.style.opacity = 0;  // Keep next section hidden during video enlargement
  }
}

// Add event listener for scroll events
window.addEventListener('scroll', updateVideoSize);
updateVideoSize();  // Initialize on page load








const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const factTextElement = document.querySelector(".fact-text");
const factNumberElement = document.querySelector(".fact-number");

let currentFact = 0;
const facts = [
  { number: "25+", text: "Nominations and Awards celebrating our passion" },
  { number: "50+", text: "Projects Completed" },
  { number: "10+", text: "Years of Expertise" }
];

// Function to update the fact display
function updateFact() {
  factTextElement.innerHTML = `<span class="big-number">${facts[currentFact].number}</span><br>${facts[currentFact].text}`;
  factNumberElement.textContent = `${(currentFact + 1).toString().padStart(2, '0')} / ${facts.length.toString().padStart(2, '0')}`;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
  currentFact = (currentFact - 1 + facts.length) % facts.length;
  updateFact();
});

nextButton.addEventListener('click', () => {
  currentFact = (currentFact + 1) % facts.length;
  updateFact();
});

// Initialize with the first fact
updateFact();



const sectionsToStack = document.querySelectorAll('#brand-strategy, #website-section, #product-section');
window.addEventListener('scroll', () => {
  sectionsToStack.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('stacked');
    } else {
      section.classList.remove('stacked');
    }
  });
});


// Select the text element
const sinEsfuerzoText = document.querySelector('.sin-esfuerzo-text');

// Function to add the "shrink" class on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { // Change 100 to the scroll point where you want the effect
    document.body.classList.add('shrink');
  } else {
    document.body.classList.remove('shrink');
  }
});







// Define the array of images
const images = [
  '1.jpg',  // Image 1
  '2.jpg',  // Image 2
  '3.jpg',  // Image 3
  '4.jpg',  // Image 4
  '5.jpg',  // Image 5
  '6.jpg',  // Image 6
  '7.jpg',  // Image 7
  '8.jpg',  // Image 8
  '9.jpg',  // Image 9
  '10.jpg',  // Image 10
  '11.jpg',  // Image 11
  '12.jpg',  // Image 12
  '13.jpg',  // Image 13
  '14.jpg',  // Image 14
  '15.jpg',  // Image 15
];

// Store all the currently active image elements
let activeImages = [];
let lastTimestamp = 0; // Timestamp to control image interval
const imageInterval = 500; // Delay between image creation (500ms = 0.5 seconds)

function createImage(e) {
  const currentTime = Date.now();

  // Only allow image creation if the last image was created at least 500ms ago
  if (currentTime - lastTimestamp < imageInterval) return;

  // Update the timestamp
  lastTimestamp = currentTime;

  // Create a new div element to hold the image
  const newImage = document.createElement('div');
  newImage.classList.add('cursor-image');
  
  // Set a random image from the array
  const randomImage = images[Math.floor(Math.random() * images.length)];
  newImage.style.backgroundImage = `url(${randomImage})`;

  // Set the position of the new image to the cursor's current position
  newImage.style.left = `${e.clientX}px`;
  newImage.style.top = `${e.clientY}px`;

  // Append the new image to the body
  document.body.appendChild(newImage);

  // Add the new image to the activeImages array
  activeImages.push(newImage);

  // After 5 images, make sure the oldest image stays in its original position
  if (activeImages.length > 10) {
      const oldestImage = activeImages.shift(); // Get the oldest image
      oldestImage.style.animation = 'fadeOut 10s ease forwards'; // Keep it in its place and fade out
  }
}

// Event listener to track mouse movement
document.addEventListener('mousemove', createImage);