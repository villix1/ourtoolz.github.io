document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Villixx";
    let i = 0;
    const speed = 150;
    const target = document.getElementById("typewriter");

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                i = 0;
                target.innerHTML = '';
                typeWriter();
            }, 2000);
        }
    }
    typeWriter();
});


document.addEventListener('DOMContentLoaded', function() {
    const clickableText = document.getElementById('clickableText');
    const backgroundVideo = document.getElementById('backgroundVideo');

    clickableText.addEventListener('click', function() {
        this.innerText = '[ O U R  T O O L Z ]';
        this.style.fontSize = '3rem';

        setTimeout(() => {
            this.style.display = 'none';
            backgroundVideo.style.display = 'block';
            backgroundVideo.play();
        }, 1500); // Adjust the timeout to sync with the text expansion animation
    });

    backgroundVideo.addEventListener('ended', function() {
        window.location.href = 'main.html'; // Replace with your next HTML file
    });
});
