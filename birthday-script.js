// Get elements
const openPoemBtn = document.getElementById('open-poem-btn');
const poemPopup = document.getElementById('poem-popup');
const closeBtn = document.querySelector('.close');

// Function to open the pop-up
openPoemBtn.addEventListener('click', function() {
    poemPopup.style.display = 'block';
});

// Function to close the pop-up when clicking the close button
closeBtn.addEventListener('click', function() {
    poemPopup.style.display = 'none';
});

// Close the pop-up when clicking outside the content
window.addEventListener('click', function(event) {
    if (event.target === poemPopup) {
        poemPopup.style.display = 'none';
    }
});
