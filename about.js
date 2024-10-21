// Define the array of images
const images = [
    '1.jpeg',  // Image 1
    '2.jpeg',  // Image 2
    '3.jpeg',  // Image 3
    '4.jpeg',  // Image 4
    '5.jpeg',  // Image 5
    '1.jpeg',  // Image 1
    '2.jpeg',  // Image 2
    '3.jpeg',  // Image 3
    '4.jpeg',  // Image 4
    '5.jpeg',  // Image 5
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



//cursor dot
document.addEventListener('mousemove', (event) => {
    const dot = document.querySelector('.cursor-dot');
    const x = event.clientX;
    const y = event.clientY;

    // Set the position of the dot to the mouse coordinates
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
});