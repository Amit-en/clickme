const button = document.getElementById('clickButton');
const clickSound = document.getElementById('clickSound');

button.addEventListener('click', () => {
    clickSound.currentTime = 0; // Rewind to the start
    clickSound.play();
});
