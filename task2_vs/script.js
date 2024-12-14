function startCountdown() {
    const newYearDate = new Date('Jan 1, 2025 00:00:00').getTime();
    const timer = document.getElementById('timer');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = newYearDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            timer.innerHTML = "00:00:00:00";
            document.getElementById("previewBtn").click(); 
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timer.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

window.onload = startCountdown;

document.getElementById("previewBtn").addEventListener("click", function () {
    const overlay = document.getElementById("preview-overlay");
  
    overlay.style.display = "flex";
  
    const colors = [
        "radial-gradient(circle, red, pink)",
        "radial-gradient(circle, blue, lightblue)",
        "radial-gradient(circle, yellow, gold)",
        "radial-gradient(circle, green, lime)"
    ];
    
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "%"; 
        balloon.style.background = colors[i % colors.length];
        balloon.style.animationDuration = `${Math.random() * 3 + 5}s`; 
        overlay.appendChild(balloon);
    }
  
    setTimeout(() => {
      overlay.style.display = "none";
      overlay.innerHTML = '<div id="wishes">🎉 Happy New Year 2025 🎉 </div>';
    }, 8000);
  });
  