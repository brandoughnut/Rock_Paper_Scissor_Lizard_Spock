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

let playAgain = document.getElementById("playAgain");

playFriend.addEventListener("click", function() {
    backGround.className = "difficultyBg";
    startPage.className = "d-none";
    difficultyPage.className = "";
    difficultyHeader.textContent = "Play a Friend";
});

backToStart.addEventListener("click", function() {
    backGround.className = "titleBG";
    difficultyPage.className = "d-none";
    startPage.className = "";
});

playComputer.addEventListener("click", function() {
    backGround.className = "difficultyBg";
    startPage.className = "d-none";
    difficultyPage.className = "";
    difficultyHeader.textContent = "Vs. Computer";
});

bestOfOne.addEventListener("click", function() {
    difficultyPage.className = "d-none";
    gamePage.className = "";
});

bestOfFive.addEventListener("click", function() {
    difficultyPage.className = "d-none";
    gamePage.className = "";
});

bestOfSeven.addEventListener("click", function() {
    difficultyPage.className = "d-none";
    gamePage.className = "";
});

playAgain.addEventListener("click", function() {
    winPage.className = "d-none";
    startPage.className = "";
    
});