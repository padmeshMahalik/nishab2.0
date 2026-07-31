// Elements
const intro = document.getElementById("intro");
const mainPage = document.getElementById("mainPage");
const enterBtn = document.getElementById("enterBtn");
const startBtn = document.getElementById("startBtn");
const hearts = document.getElementById("hearts");
const bgMusic = document.getElementById("bgMusic");
// Open the website
enterBtn.addEventListener("click", () => {
    intro.style.display = "none";
    mainPage.style.display = "block";
bgMusic.play();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Start button (we'll use it later)
startBtn.addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = Math.random();

    heart.style.animation = "floatUp 6s linear forwards";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);//

// Open Love Letter
// ===========================

const letterBtn = document.getElementById("letterBtn");

if (letterBtn) {
    letterBtn.addEventListener("click", () => {

        document.getElementById("final-surprise").style.display = "none";

        const letter = document.getElementById("letter");

        alert("Button clicked!");
letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth"
        });

    });
}