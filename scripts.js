document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ["kys", "termed X13+", "ourtoolz on top"];
    let i = 0, j = 0;
    const speed = 100;
    const target = document.getElementById("typewriter");
    const dynamicText = document.getElementById("dynamic-text");
    const knifeIcon = document.getElementById("knife-icon");
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    const audio = document.getElementById("background-music");

    knifeIcon.addEventListener('click', () => {
        audio.play();
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, 1000); // Match this duration with the CSS transition duration
    });

    function typeWriter(element, text, callback) {
        let k = 0;
        function type() {
            if (k < text.length) {
                element.innerHTML += text.charAt(k);
                k++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    deleteWriter(element, text, callback);
                }, 2000);
            }
        }
        type();
    }

    function deleteWriter(element, text, callback) {
        let l = text.length;
        function del() {
            if (l > 0) {
                element.innerHTML = text.substring(0, l - 1);
                l--;
                setTimeout(del, speed);
            } else {
                setTimeout(callback, 500);
            }
        }
        del();
    }

    function updateText() {
        typeWriter(target, texts[i], () => {
            i = (i + 1) % texts.length;
            updateText();
        });
    }

    function updateDynamicText() {
        typeWriter(dynamicText, subText[j], () => {
            j = (j + 1) % subText.length;
            updateDynamicText();
        });
    }

    function updateTitle() {
        const titleElement = document.querySelector('title');
        typeWriter(titleElement, texts[0], () => {
            updateTitle();
        });
    }

    updateText();
    updateDynamicText();
    updateTitle();
});
