// win color #82d482
let gameboard = (function (doc) {
    let tileValues = doc.querySelectorAll(".board > .tiles > .tile > p");
    let winPopup = doc.querySelector("dialog");
    let players = ["X", "O"];
    let xturn = true;
    function checkWinner() {
        for (i of players) {
            if (tileValues[0].textContent === i && tileValues[1].textContent === i && tileValues[2].textContent === i) {
                return i;
            }
            else if (tileValues[3].textContent === i && tileValues[4].textContent === i && tileValues[5].textContent === i) {
                return i;
            }
            else if (tileValues[6].textContent === i && tileValues[7].textContent === i && tileValues[8].textContent === i) {
                
            }
            else if (tileValues[0].textContent === i && tileValues[3].textContent === i && tileValues[6].textContent === i) {
                return i;
            }
            else if (tileValues[1].textContent === i && tileValues[4].textContent === i && tileValues[7].textContent === i) {
                return i;
            }
            else if (tileValues[2].textContent === i && tileValues[5].textContent === i && tileValues[8].textContent === i) {
                return i;
            }
            else if (tileValues[0].textContent === i && tileValues[4].textContent === i && tileValues[8].textContent === i) {
                return i;
            }
            else if (tileValues[2].textContent === i && tileValues[4].textContent === i && tileValues[6].textContent === i) {
                return i;
            }
        }
        for (let i = 0; i < tileValues.length; i++) {
            if (tileValues[i].textContent === "") {
                return null;
            }
        }
        return "tie"
    }
    function init() {
        for (let i = 0; i < tileValues.length; i++) {
            tileValues[i].parentElement.addEventListener("click", (e) => {
                if (xturn && tileValues[i].textContent === "") {
                    tileValues[i].textContent = players[0];
                    xturn = false;
                } else if (!xturn && tileValues[i].textContent === ""){
                    tileValues[i].textContent = players[1];
                    xturn = true;
                }
                tileValues = doc.querySelectorAll(".board > .tiles > .tile > p");
                
                let winner = checkWinner();
                if (winner === players[0]) {
                    winPopup.querySelector("p").textContent = "Player X win";
                    winPopup.style.display = "flex";
                } else if (winner === players[1]) {
                    winPopup.querySelector("p").textContent = "Player O win";
                    winPopup.style.display = "flex";
                } else if (winner === "tie") {
                    winPopup.querySelector("p").textContent = "It's a tie";
                    winPopup.style.display = "flex";
                }
            });
        }
    }
    return {init}
})(document);
gameboard.init()
