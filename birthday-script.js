// Function to create confetti
function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1000);
}

// Generate random color for confetti
function getRandomColor() {
    const colors = ['#FF69B4', '#FFD700', '#8A2BE2', '#FF6347', '#00FF7F'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Trigger confetti on hover
const giftBox = document.getElementById('giftBox');
giftBox.addEventListener('mouseover', function(event) {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createConfetti(event.pageX, event.pageY), i * 100);
    }
});

// Kannada Poem Pop-up
const showPoemBtn = document.getElementById('showPoemBtn');
const poemPopup = document.getElementById('poemPopup');
const closeBtn = document.querySelector('.close');

// Show the pop-up when button is clicked
showPoemBtn.addEventListener('click', function() {
    poemPopup.style.display = 'block';
});

// Close the pop-up when 'x' is clicked
closeBtn.addEventListener('click', function() {
    poemPopup.style.display = 'none';
});

// Close the pop-up when clicked outside the content
window.addEventListener('click', function(event) {
    if (event.target === poemPopup) {
        poemPopup.style.display = 'none';
    }
});
