// Function to open the lightbox and display the image
function openImage(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var fullImage = document.getElementById("fullImage");
    
    fullImage.src = imgElement.src; // Set the image source to the clicked image
    lightbox.style.display = "block"; // Show the lightbox
}

// Function to close the lightbox
function closeImage() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}
