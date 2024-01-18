let playFriend = document.getElementById("playFriend");
let playComputer = document.getElementById("playComputer");
let backGround = document.getElementById("backGround");

let startPage = document.getElementById("startPage");
let difficultyPage = document.getElementById("difficultyPage");
let gamePage = document.getElementById("gamePage");
let winPage = document.getElementById("winPage");

let backToStart = document.getElementById("backToStart");
let difficultyHeader = document.getElementById("difficultyHeader");
let bestOfOne = document.getElementById("bestOfOne");
let bestOfFive = document.getElementById("bestOfFive");
let bestOfSeven = document.getElementById("bestOfSeven");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let player2 = document.getElementById("player2");
let player2Img = document.getElementById("player2Img");
let play1 = document.getElementById("play1");
let play2 = document.getElementById("play2");
let choice = document.getElementById("choice");
let gameLog = document.getElementById("gameLog");

let playAgain = document.getElementById("playAgain");
let winnerText = document.getElementById("winnerText");
let winnerPhoto = document.getElementById("winnerPhoto");

let isComputer = false;
let isFriend = false;
let isPlayer1 = true;
let isPlayer2 = false;
let maxGuesses = 0;
let player1Score = 0;
let player2Score = 0;
let player1Choice = "";
let player2Choice = "";

playFriend.addEventListener("click", function () {
  backGround.className = "difficultyBg";
  startPage.className = "d-none";
  difficultyPage.className = "";
  difficultyHeader.textContent = "Play a Friend";
  isFriend = true;
  player2.textContent = "Player 2";
  player2Img.src = "./assets/tomandjerryplayer2.png";
});

playComputer.addEventListener("click", function () {
  backGround.className = "difficultyBg";
  startPage.className = "d-none";
  difficultyPage.className = "";
  difficultyHeader.textContent = "Vs. Computer";
  isComputer = true;
  player2.textContent = "Computer";
  player2Img.src = "./assets/tomandjerrycomputer.png";
});

backToStart.addEventListener("click", function () {
  backGround.className = "titleBG";
  difficultyPage.className = "d-none";
  startPage.className = "";
  isComputer = false;
  isFriend = false;
});

bestOfOne.addEventListener("click", function () {
  difficultyPage.className = "d-none";
  gamePage.className = "";
  maxGuesses = 1;
});

bestOfFive.addEventListener("click", function () {
  difficultyPage.className = "d-none";
  gamePage.className = "";
  maxGuesses = 3;
});

bestOfSeven.addEventListener("click", function () {
  difficultyPage.className = "d-none";
  gamePage.className = "";
  maxGuesses = 5;
});

playAgain.addEventListener("click", function () {
  winPage.className = "d-none";
  startPage.className = "";
  backGround.className = "titleBG";
  choice.textContent = "Player 1 Chooses";
  gameLog.textContent = "Log:";
  isComputer = false;
  isFriend = false;
  isPlayer1 = true;
  isPlayer2 = false;
  maxGuesses = 0;
  player1Score = 0;
  player2Score = 0;
  play1.textContent = player1Score;
  play2.textContent = player2Score;
});

rock.addEventListener("click", function () {
  if (isComputer) {
    player1Choice = "Rock";
    ComputerChoice();
  } else if (isFriend) {
    if (isPlayer1) {
      player1Choice = "Rock";
      PlayAFriend();
      choice.textContent = "Player 2 Chooses";
      gameLog.textContent = "Log:";
      isPlayer2 = true;
      isPlayer1 = false;
    } else if (isPlayer2) {
      player2Choice = "Rock";
      PlayAFriend();
      choice.textContent = "Player 1 Chooses";
      isPlayer1 = true;
      isPlayer2 = false;
    }
  }
});

paper.addEventListener("click", function () {
  if (isComputer) {
    player1Choice = "Paper";
    ComputerChoice();
  } else if (isFriend) {
    if (isPlayer1) {
        player1Choice = "Paper";
        PlayAFriend();
        choice.textContent = "Player 2 Chooses";
        gameLog.textContent = "Log:";
        isPlayer2 = true;
        isPlayer1 = false;
      } else if (isPlayer2) {
        player2Choice = "Paper";
        PlayAFriend();
        choice.textContent = "Player 1 Chooses";
        isPlayer1 = true;
        isPlayer2 = false;
      }
  }
});

scissors.addEventListener("click", function () {
  if (isComputer) {
    player1Choice = "Scissors";
    ComputerChoice();
  } else if (isFriend) {
    if (isPlayer1) {
        player1Choice = "Scissors";
        PlayAFriend();
        choice.textContent = "Player 2 Chooses";
        gameLog.textContent = "Log:";
        isPlayer2 = true;
        isPlayer1 = false;
      } else if (isPlayer2) {
        player2Choice = "Scissors";
        PlayAFriend();
        choice.textContent = "Player 1 Chooses";
        isPlayer1 = true;
        isPlayer2 = false;
      }
  }
});

lizard.addEventListener("click", function () {
  if (isComputer) {
    player1Choice = "Lizard";
    ComputerChoice();
  } else if (isFriend) {
    if (isPlayer1) {
        player1Choice = "Lizard";
        PlayAFriend();
        choice.textContent = "Player 2 Chooses";
        gameLog.textContent = "Log:";
        isPlayer2 = true;
        isPlayer1 = false;
      } else if (isPlayer2) {
        player2Choice = "Lizard";
        PlayAFriend();
        choice.textContent = "Player 1 Chooses";
        isPlayer1 = true;
        isPlayer2 = false;
      }
  }
});

spock.addEventListener("click", function () {
  if (isComputer) {
    player1Choice = "Spock";
    ComputerChoice();
  } else if (isFriend) {
    if (isPlayer1) {
        player1Choice = "Spock";
        PlayAFriend();
        choice.textContent = "Player 2 Chooses";
        gameLog.textContent = "Log:";
        isPlayer2 = true;
        isPlayer1 = false;
      } else if (isPlayer2) {
        player2Choice = "Spock";
        PlayAFriend();
        choice.textContent = "Player 1 Chooses";
        isPlayer1 = true;
        isPlayer2 = false;
      }
  }
});

function PlayAFriend() {
  if (player1Choice === "Rock" && player2Choice === "Scissors") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Rock" && player2Choice === "Lizard") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Rock" && player2Choice === "Paper") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Rock" && player2Choice === "Spock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Paper" && player2Choice === "Rock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Paper" && player2Choice === "Spock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Paper" && player2Choice === "Scissors") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Paper" && player2Choice === "Lizard") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Scissors" && player2Choice === "Paper") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Scissors" && player2Choice === "Lizard") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Scissors" && player2Choice === "Rock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Scissors" && player2Choice === "Spock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Lizard" && player2Choice === "Spock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Lizard" && player2Choice === "Paper") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Lizard" && player2Choice === "Scissors") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Lizard" && player2Choice === "Rock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Spock" && player2Choice === "Scissors") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Spock" && player2Choice === "Rock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Spock" && player2Choice === "Paper") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  } else if (player1Choice === "Spock" && player2Choice === "Lizard") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Player 2";
    player1Choice = "";
    player2Choice = "";
  }else if(player1Choice === player2Choice) {
    gameLog.textContent = "Log: It was a tie";
    player1Choice = "";
    player2Choice = "";
  }
  console.log(player1Choice);
  console.log(player2Choice);
  console.log(player1Score);
  console.log(player2Score);
  gameEnd();
}

async function ComputerChoice() {
  const promise = await fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  );
  const data = await promise.text();
  console.log(data);

  if (player1Choice === "Rock" && data === "Scissors") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Rock" && data === "Lizard") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Rock" && data === "Paper") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Rock" && data === "Spock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Paper" && data === "Rock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Paper" && data === "Spock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Paper" && data === "Scissors") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Paper" && data === "Lizard") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Scissors" && data === "Paper") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Scissors" && data === "Lizard") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Scissors" && data === "Rock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Scissors" && data === "Spock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Lizard" && data === "Spock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Lizard" && data === "Paper") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Lizard" && data === "Scissors") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Lizard" && data === "Rock") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Spock" && data === "Scissors") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Spock" && data === "Rock") {
    player1Score++;
    play1.textContent = player1Score;
    gameLog.textContent = "Log: Point goes to Player 1";
  } else if (player1Choice === "Spock" && data === "Paper") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  } else if (player1Choice === "Spock" && data === "Lizard") {
    player2Score++;
    play2.textContent = player2Score;
    gameLog.textContent = "Log: Point goes to Computer";
  }else if(player1Choice === data){
    gameLog.textContent = "Log: It was a tie";
  }
  console.log(player1Score);
  console.log(player2Score);
  gameEnd();
}

function gameEnd() {
  if (isComputer) {
    if (player1Score === maxGuesses) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerryplayer1.png";
      winnerText.textContent = "Player 1 Wins";
    } else if (player2Score === maxGuesses) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerrycomputer.png";
      winnerText.textContent = "Computer Wins LOL";
    }
  } else if (isFriend) {
    if (player1Score === maxGuesses) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerryplayer1.png";
      winnerText.textContent = "Player 1 Wins";
    } else if (player2Score === maxGuesses) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerryplayer2.png";
      winnerText.textContent = "Player 2 Wins";
    }
  }
}
