const emojis = [
    "🍐",
    "🍐",
    "🍌",
    "🍌",
    "🍓",
    "🍓",
    "🍎",
    "🍎",
    "🥕",
    "🥕",
    "🍉",
    "🍉",
    "🍍",
    "🍍",
    "🍅",
    "🍅"
];

let openCards = [];


let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item"
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}


function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("box-open");
        openCards.push(this);
    }

    if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("box-match");
        openCards[1].classList.add("box-match");
    }else {
        openCards[0].classList.remove("box-open");
        openCards[1].classList.remove("box-open");
    }

    openCards = [];

    if(document.querySelectorAll(".box-match").length === emojis.length) {
        alert("Você venceu!");
    }
}
