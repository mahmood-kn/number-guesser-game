let min = 1,
  max = 10,
  winningNum = randomNum(),
  guessLeft = 3;

const guessInput = document.querySelector("#number"),
  submit = document.querySelector("#submit"),
  message = document.querySelector("#message"),
  gameWrapper = document.querySelector("#game");

document.querySelector("#min-num").textContent = min;
document.querySelector("#max-num").textContent = max;

submit.addEventListener("click", makeGuess);
gameWrapper.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
    message.style.display = "none";
  }
});

function makeGuess(e) {
  if (isNaN(guessInput.value) || guessInput.value > max || guessInput.value < min) {
    setMessage(`Your input is out of range`, "red");
  } else {
    if (parseInt(guessInput.value) === winningNum) {
      gameOver(true, `${winningNum} is correct , YOU WIN!`);
    } else {
      guessLeft -= 1;
      setMessage(`${guessInput.value} is incorrect ${guessLeft} guess left`, "red");

      if (guessLeft === 0) {
        gameOver(false);
      }
    }
  }

  e.preventDefault();
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won, msg) {
  if (won) {
    setMessage(msg, "green");
    guessInput.disabled = true;
  } else {
    setMessage(`${winningNum} is correct , you lose`, "red");
    guessInput.disabled = true;
  }

  submit.value = "play again";
  submit.className += "play-again";
}

function randomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
