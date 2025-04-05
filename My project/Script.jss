// Wait for the page to load and then trigger the surprise
window.onload = function() {
  setTimeout(function() {
    // Reveal the birthday message
    document.getElementById('message').classList.remove('hidden');
    
    // Start the confetti animation
    startConfetti();
    
    // Show the personalized image after the message
    setTimeout(function() {
      document.getElementById('image').classList.remove('hidden');
    }, 2000);
    
  }, 1000); // Delay before starting the surprise (1 second)
};

// Function to start confetti
function startConfetti() {
  let duration = 5 * 1000; // Duration for confetti in milliseconds
  let end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: Math.random() * 90 + 90,
      spread: Math.random() * 10 + 10,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
