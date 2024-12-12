document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const gameBoxes = document.querySelectorAll(".game-box-html");

    searchBar.addEventListener("input", () => {
        const searchValue = searchBar.value.toLowerCase();
        gameBoxes.forEach((box) => {
            const gameTitle = box.querySelector("p").textContent.toLowerCase();
            box.style.display = gameTitle.includes(searchValue) ? "flex" : "none";
        });
    });
});

let urlforiframe = document.getElementById("gameScreen");
let iframeBox = document.getElementById("gamescreen-box");
let closebtn = document.getElementById("closeIframeBox");
let movingboxes = document.getElementById("movingboxes");
let contentforgames = document.getElementById("content");
let gamesboxhtml = document.getElementById("gamescollectionsite");
let typingtext = document.getElementById("search-bar");
let gameboxid = document.getElementById("gameboxid");

function openGame(url) {
    iframeBox.style.display = "flex";
    urlforiframe.src = url;
    contentforgames.style.display = "none";
}

function closeIframe() {
    iframeBox.style.display = "none";
    urlforiframe.src = "";
    movingboxes.style.display = "flex";
}

document.getElementById("closeIframeBox").addEventListener("click", closeIframe);
