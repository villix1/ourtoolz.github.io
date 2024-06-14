document.addEventListener('DOMContentLoaded', () => {
    const clickableText = document.getElementById('clickableText');
    const backgroundVideo = document.getElementById('backgroundVideo');

    clickableText.addEventListener('click', () => {
        clickableText.textContent = '[O U R  T O O L Z]'; // Change the text
        clickableText.style.display = 'none'; // Hide the text when the video starts
        backgroundVideo.style.display = 'block'; // Show the video
        backgroundVideo.play(); // Play the video
    });

    backgroundVideo.addEventListener('ended', () => {
        window.location.href = 'main.html'; // Redirect to main.html after video ends
    });
});
