'use strict';

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

const generateRandomInteger = function (start, end) {
    return Math.trunc(Math.random() * end) + start;
}

const setScore = function (score) {
    document.querySelector(".score").textContent = score
}

const setBackgroundColor = function (backgroundColor) {
    document.querySelector("body").style.backgroundColor = backgroundColor;
}

let numberToBeGuessed = generateRandomInteger(1, 20);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) { // 0 is returned when box is empty, falsy value
        displayMessage("No number was entered! ⛔");
        // When game is won
    } else if (guess === numberToBeGuessed) {
        displayMessage("Correct number! 🎉");
        setBackgroundColor("#60b347");
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = numberToBeGuessed;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess !== numberToBeGuessed) {
        if (score > 1) {
            displayMessage(guess > numberToBeGuessed ? "Too high!" : "Too low!");
            score--;
            setScore(score);
        } else {
            displayMessage("You lost the game! 😥");
            setScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    displayMessage("Start guessing...");
    score = 20;
    numberToBeGuessed = generateRandomInteger(1, 20);
    setScore(score);
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    setBackgroundColor("#222");
})