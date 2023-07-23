var weapon;
var botWeap;
var playerScore = 0;
var botScore = 0;
function selectRock() {
    weapon = "r";
    document.getElementById("textChat1").innerHTML = "Rock";
}
function selectScissor() {
    weapon = "s";
    document.getElementById("textChat1").innerHTML = "Scissor";
}
function selectPaper() {
    weapon = "p";
    document.getElementById("textChat1").innerHTML = "Paper";
}

function weaponSelected() {
    document.getElementById("selectBtn").style.display = "none";
    document.getElementById("againBtn").style.display = "block";

    var weapArr = ["r", "s", "p"];
    botWeap = weapArr[Math.floor(Math.random() * 3)];
    var longBotWeap;

    if (botWeap == "r") {
        longBotWeap = "Rock";
    }else if (botWeap == "s") {
        longBotWeap = "Scissor";
    }else {
        longBotWeap = "Paper";
    }

    document.getElementById("textChat2").innerHTML = longBotWeap;
    chooseTheWinner();
}

function chooseTheWinner() {
    var score = document.getElementById("score");
    var resultBox = document.getElementById("resultBox");
    var textResult = document.getElementById("textResult");

    if (weapon == "r" && botWeap == "s" || weapon == "s" && botWeap == "p" || weapon == "p" && botWeap == "r") {
        resultBox.style.backgroundColor = "#00EF51";
        textResult.innerHTML = "You Won";
        playerScore++;
    }else if (weapon == "r" && botWeap == "p" || weapon == "s" && botWeap == "r" || weapon == "p" && botWeap == "s") {
        resultBox.style.backgroundColor = "#EF0051";
        textResult.innerHTML = "You Lose";
        botScore++;
    }else if (weapon == "r" && botWeap == "r" || weapon == "s" && botWeap == "s" || weapon == "p" && botWeap == "p") {
        resultBox.style.backgroundColor = "#EFEF51";
        textResult.innerHTML = "Draw";
    }else {
        textResult.innerHTML = "Choose your weapon first!";
        document.getElementById("textChat2").innerHTML= "";
    }

    score.innerHTML = `${playerScore} - ${botScore}`;
}

function playAgain() {
    document.getElementById("againBtn").style.display = "none";
    document.getElementById("selectBtn").style.display = "block";
    document.getElementById("resultBox").style.backgroundColor = "white";
    document.getElementById("textResult").innerHTML = "Select your weapon!";
    document.getElementById("textChat1").innerHTML = "";
    document.getElementById("textChat2").innerHTML = "";
}

function resetScore() {
    playerScore = 0;
    botScore = 0;
    document.getElementById("score").innerHTML = `${playerScore} - ${botScore}`;
}