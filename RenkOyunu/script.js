let score = 0;
let lives = 3;
let difficulty = 60;
let highScore = localStorage.getItem("renkOyunuRekor26") || 0;

const container = document.getElementById("container");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");
const livesDisplay = document.getElementById("lives");
const messageDisplay = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
const hintBtn = document.getElementById("hintBtn");
const themeDots = document.querySelectorAll(".theme-dot");

const correctSound = new Audio("dogru.mp3");
const wrongSound = new Audio("yanlis.mp3");

highScoreDisplay.textContent = highScore;

// --- TEMA YÖNETİM SİSTEMİ ---
// Kaydedilmiş temayı al, yoksa "black" yap
let savedTheme = localStorage.getItem("oyunTemasi") || "black";
document.body.setAttribute("data-theme", savedTheme);

themeDots.forEach(dot => {
    dot.addEventListener("click", function () {
        let pickedTheme = this.getAttribute("data-color");
        // Body etiketinin temasını değiştir
        document.body.setAttribute("data-theme", pickedTheme);
        // Seçimi tarayıcıya kaydet
        localStorage.setItem("oyunTemasi", pickedTheme);
    });
});

// Oyunu Başlat
init();

function init() {
    resetBtn.addEventListener("click", resetGame);

    hintBtn.addEventListener("click", function () {
        if (score >= 2 && lives > 0) {
            score -= 2;
            updateUI();
            let currentSquares = document.querySelectorAll(".square");
            currentSquares.forEach(sq => {
                if (sq.dataset.isOdd === "false") {
                    sq.classList.add("dim");
                    setTimeout(() => sq.classList.remove("dim"), 1000);
                }
            });
        } else if (score < 2) {
            messageDisplay.textContent = "Bunun için 2 puan lazım!";
        }
    });

    generateBoard();
}

// --- DİNAMİK KUTU ÜRETİMİ ---
function generateBoard() {
    container.innerHTML = "";

    // Skora Göre Boyut Katlanması
    let gridSize = 2; // 2x2
    if (score >= 5) gridSize = 3;  // 3x3
    if (score >= 10) gridSize = 4; // 4x4
    if (score >= 15) gridSize = 5; // 5x5

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    let totalSquares = gridSize * gridSize;

    // Rastgele Renk Üretimi
    let r = Math.floor(Math.random() * (255 - difficulty));
    let g = Math.floor(Math.random() * (255 - difficulty));
    let b = Math.floor(Math.random() * (255 - difficulty));

    let baseColor = `rgb(${r}, ${g}, ${b})`;
    let oddColor = `rgb(${r + difficulty}, ${g + difficulty}, ${b + difficulty})`;

    let oddIndex = Math.floor(Math.random() * totalSquares);

    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");

        if (i === oddIndex) {
            square.style.backgroundColor = oddColor;
            square.dataset.isOdd = "true";
        } else {
            square.style.backgroundColor = baseColor;
            square.dataset.isOdd = "false";
        }

        square.addEventListener("click", handleSquareClick);
        container.appendChild(square);
    }
}

// --- TIKLAMA MANTIĞI ---
function handleSquareClick() {
    if (lives <= 0) return;

    if (this.dataset.isOdd === "true") {
        correctSound.currentTime = 0;
        correctSound.play();

        score++;
        if (difficulty > 3) difficulty -= 3; // Fark azalıyor, zorluk artıyor

        this.classList.add("pop-effect");
        messageDisplay.textContent = "Tam İsabet!";

        setTimeout(() => {
            updateUI();
            generateBoard();
        }, 300);

    } else {
        wrongSound.currentTime = 0;
        wrongSound.play();

        lives--;
        updateUI();

        container.classList.add("shake-effect");
        setTimeout(() => {
            container.classList.remove("shake-effect");
        }, 400);

        if (lives <= 0) {
            endGame();
        } else {
            messageDisplay.textContent = "Dikkatli Ol!";
        }
    }
}

function updateUI() {
    scoreDisplay.textContent = score;
    // Kalpleri emojiden ibaret basit ve modern tutuyoruz
    livesDisplay.textContent = "❤️".repeat(lives) + "🤍".repeat(3 - lives);
}

function resetGame() {
    score = 0;
    lives = 3;
    difficulty = 60;
    messageDisplay.textContent = "Gözlerine Güveniyor musun?";
    updateUI();
    generateBoard();
}

function endGame() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("renkOyunuRekor26", highScore);
        highScoreDisplay.textContent = highScore;
        messageDisplay.textContent = `YENİ REKOR: ${score} 🎉`;
    } else {
        messageDisplay.textContent = "OYUN BİTTİ!";
    }

    let currentSquares = document.querySelectorAll(".square");
    currentSquares.forEach(sq => sq.classList.add("dim"));
}