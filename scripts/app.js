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

let playAgain = document.getElementById("playAgain");
let winnerText = document.getElementById("winnerText");
let winnerPhoto = document.getElementById("winnerPhoto");

let isComputer = false;
let isFriend = false;
let bestOne = false;
let bestFive = false;
let bestSeven = false;
let player1Score = 0;
let player2Score = 0;
let computerScore = 0;
let player1Choice = "";

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
  bestOne = true;
});

bestOfFive.addEventListener("click", function () {
  difficultyPage.className = "d-none";
  gamePage.className = "";
  bestFive = true;
});

bestOfSeven.addEventListener("click", function () {
  difficultyPage.className = "d-none";
  gamePage.className = "";
  bestSeven = true;
});

playAgain.addEventListener("click", function () {
  winPage.className = "d-none";
  startPage.className = "";
  backGround.className = "titleBG";
  isComputer = false;
  isFriend = false;
  bestOne = false;
  bestFive = false;
  bestSeven = false;
  player1Score = 0;
  player2Score = 0;
  play1.textContent = player1Score;
  play2.textContent = player2Score;
});

rock.addEventListener("click", function () {
  player1Choice = "Rock";
  if (isComputer) {
    ComputerChoice();
  } else if (isFriend) {
  }
});

paper.addEventListener("click", function () {
    player1Choice = "Paper";
    if (isComputer) {
      ComputerChoice();
    } else if (isFriend) {
    }
  });

  scissors.addEventListener("click", function () {
    player1Choice = "Scissors";
    if (isComputer) {
      ComputerChoice();
    } else if (isFriend) {
    }
  });

  lizard.addEventListener("click", function () {
    player1Choice = "Lizard";
    if (isComputer) {
      ComputerChoice();
    } else if (isFriend) {
    }
  });

  spock.addEventListener("click", function () {
    player1Choice = "Spock";
    if (isComputer) {
      ComputerChoice();
    } else if (isFriend) {
    }
  });

async function ComputerChoice() {
  const promise = await fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  );
  const data = await promise.text();
    console.log(data);
  if (bestOne) {
    if (player1Score === 1) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerryplayer1.png";
      winnerText.textContent = "Player 1 Wins";
    } else if (player2Score === 1) {
      winPage.className = "";
      gamePage.className = "d-none";
      winnerPhoto.src = "./assets/tomandjerrycomputer.png";
      winnerText.textContent = "Computer Wins LOL";
    } else {
      if (player1Choice === "Rock" && data === "Scissors") {
        player1Score++;
        play1.textContent = player1Score;
      } else if (player1Choice === "Rock" && data === "Lizard") {
        player1Score++;
        play1.textContent = player1Score;
      } else if (player1Choice === "Rock" && data === "Paper") {
        player2Score++;
        play2.textContent = player2Score;
      } else if (player1Choice === "Rock" && data === "Spock") {
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Paper" && data === "Rock"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Paper" && data === "Spock"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Paper" && data === "Scissors"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Paper" && data === "Lizard"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Scissors" && data === "Paper"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Scissors" && data === "Lizard"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Scissors" && data === "Rock"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Scissors" && data === "Spock"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Lizard" && data === "Spock"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Lizard" && data === "Paper"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Lizard" && data === "Scissors"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Lizard" && data === "Rock"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Spock" && data === "Scissors"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Spock" && data === "Rock"){
        player1Score++;
        play1.textContent = player1Score;
      }else if(player1Choice === "Spock" && data === "Paper"){
        player2Score++;
        play2.textContent = player2Score;
      }else if(player1Choice === "Spock" && data === "Lizard"){
        player2Score++;
        play2.textContent = player2Score;
      }
    }
  } else if (bestFive) {
    if (player1Score === 3) {
        winPage.className = "";
        gamePage.className = "d-none";
        winnerPhoto.src = "./assets/tomandjerryplayer1.png";
        winnerText.textContent = "Player 1 Wins";
      } else if (player2Score === 3) {
        winPage.className = "";
        gamePage.className = "d-none";
        winnerPhoto.src = "./assets/tomandjerrycomputer.png";
        winnerText.textContent = "Computer Wins LOL";
      } else {
        if (player1Choice === "Rock" && data === "Scissors") {
            player1Score++;
            play1.textContent = player1Score;
          } else if (player1Choice === "Rock" && data === "Lizard") {
            player1Score++;
            play1.textContent = player1Score;
          } else if (player1Choice === "Rock" && data === "Paper") {
            player2Score++;
            play2.textContent = player2Score;
          } else if (player1Choice === "Rock" && data === "Spock") {
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Paper" && data === "Rock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Paper" && data === "Spock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Paper" && data === "Scissors"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Paper" && data === "Lizard"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Scissors" && data === "Paper"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Scissors" && data === "Lizard"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Scissors" && data === "Rock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Scissors" && data === "Spock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Lizard" && data === "Spock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Lizard" && data === "Paper"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Lizard" && data === "Scissors"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Lizard" && data === "Rock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Spock" && data === "Scissors"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Spock" && data === "Rock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Spock" && data === "Paper"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Spock" && data === "Lizard"){
            player2Score++;
            play2.textContent = player2Score;
          }
      }
  } else if (bestSeven) {
    if (player1Score === 5) {
        winPage.className = "";
        gamePage.className = "d-none";
        winnerPhoto.src = "./assets/tomandjerryplayer1.png";
        winnerText.textContent = "Player 1 Wins";
      } else if (player2Score === 5) {
        winPage.className = "";
        gamePage.className = "d-none";
        winnerPhoto.src = "./assets/tomandjerrycomputer.png";
        winnerText.textContent = "Computer Wins LOL";
      } else {
        if (player1Choice === "Rock" && data === "Scissors") {
            player1Score++;
            play1.textContent = player1Score;
          } else if (player1Choice === "Rock" && data === "Lizard") {
            player1Score++;
            play1.textContent = player1Score;
          } else if (player1Choice === "Rock" && data === "Paper") {
            player2Score++;
            play2.textContent = player2Score;
          } else if (player1Choice === "Rock" && data === "Spock") {
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Paper" && data === "Rock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Paper" && data === "Spock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Paper" && data === "Scissors"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Paper" && data === "Lizard"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Scissors" && data === "Paper"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Scissors" && data === "Lizard"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Scissors" && data === "Rock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Scissors" && data === "Spock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Lizard" && data === "Spock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Lizard" && data === "Paper"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Lizard" && data === "Scissors"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Lizard" && data === "Rock"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Spock" && data === "Scissors"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Spock" && data === "Rock"){
            player1Score++;
            play1.textContent = player1Score;
          }else if(player1Choice === "Spock" && data === "Paper"){
            player2Score++;
            play2.textContent = player2Score;
          }else if(player1Choice === "Spock" && data === "Lizard"){
            player2Score++;
            play2.textContent = player2Score;
          }
      }
  }
}
