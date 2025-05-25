window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.quiz-question button');
  let scores = { mom: 0, silvynn: 0 };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const team = btn.dataset.team;
      scores[team]++;
      btn.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);

      
      if (document.querySelectorAll('.quiz-question button:disabled').length === 6) {
        const resultBox = document.getElementById('quiz-result');
        let message = "";

       
        if (scores.mom > scores.silvynn) {
          message = "💜 You're Team Mom! Cozy, crafty, and totally classic.";
        } else if (scores.silvynn > scores.mom) {
          message = "💚 You're Team Silvynn! Fun, curious, and always ready to play.";
        } else {
          message = "🌈 You're a perfect mix of both! A true mommy & me blend!";
        }

        
        resultBox.innerHTML = `
          <p class="quiz-message">${message}</p>
          <button class="retry-btn">🔁 Try Again</button>
        `;

       
        for (let i = 0; i < 30; i++) {
          const confetti = document.createElement('span');
          confetti.className = 'confetti';
          confetti.innerText = ['💜', '💚', '🎉', '✨', '🌈'][Math.floor(Math.random() * 5)];
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.animationDelay = `${Math.random() * 2}s`;
          document.body.appendChild(confetti);
        }

        
        document.querySelector('.retry-btn').addEventListener('click', () => {
          location.reload();
        });
      }
    });
  });
});

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}