const min = 1;
        const max = 10;
        const maxAttempts =  3;
        let randomNumber, attemptsLeft;

        const guessInput = document.getElementById('guessInput');
        const guessBtn = document.getElementById('guessBtn');
        const message = document.getElementById('message');
        const attempts = document.getElementById('attempts');
        const restartBtn = document.getElementById('restartBtn');
        document.getElementById('min').textContent = min;
        document.getElementById('max').textContent = max;

        function startGame() {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            attemptsLeft = maxAttempts;
            message.textContent = '';
            attempts.textContent = `Attempts left: ${attemptsLeft}`;
            guessInput.value = '';
            guessInput.disabled = false;
            guessBtn.disabled = false;
            restartBtn.style.display = 'none';
        }

        guessBtn.addEventListener('click', function() {
            const guess = Number(guessInput.value);
            if (!guess || guess < min || guess > max) {
                message.textContent = `Please enter a number between ${min} and ${max}.`;
                return;
            }
            attemptsLeft--;
            if (guess === randomNumber) {
                message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
                endGame();
            } else if (attemptsLeft === 0) {
                message.textContent = `❌ Game Over! The number was ${randomNumber}.`;
                endGame();
            } else if (guess < randomNumber) {
                message.textContent = 'Too low! Try again.';
            } else {
                message.textContent = 'Too high! Try again.';
            }
            attempts.textContent = `Attempts left: ${attemptsLeft}`;
            guessInput.value = '';
        });

        function endGame() {
            guessInput.disabled = true;
            guessBtn.disabled = true;
            restartBtn.style.display = 'inline-block';
        }

        restartBtn.addEventListener('click', startGame);

        // Start the game on page load
        startGame();