// Your code here
// Function to move dodger left
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Function to move dodger right
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    const rightEdge = 400; // assuming the game field is 400px wide

    if (left < rightEdge - 40) { // 40 is the width of the dodger
        dodger.style.left = `${left + 1}px`;
    }
}

// Event listener to handle key presses
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});
