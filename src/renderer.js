const game = document.getElementById('game');

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleDark()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
});

document.getElementById('minimizebtn').addEventListener('click', async () => {
    window.api.minimize()
})

document.getElementById('maximizebtn').addEventListener('click', async () => {
    window.api.maximize()
})

document.getElementById('exitbtn').addEventListener('click', async () => {
    window.api.close()
})

document.getElementById('addgame').addEventListener('click', async () => {
    var form = document.getElementById('add-game-form');
    if (form.style.display === "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
})

function addGame() {
    const url = document.getElementById('url-to-add').value;
    const gameName = document.getElementById('name-to-add').value;

    const currBottom = document.getElementsByClassName("bottommost-button");
    for (let i = 0; i < currBottom.length; i++) {
        currBottom[i].classList.remove("bottommost-button");
    }

    const newButton = document.createElement("button");
    newButton.textContent = gameName;
    newButton.classList.add("bottommost-button");
    newButton.setAttribute("onclick", `changeGame('${url}')`);


    document.getElementById('more-games').appendChild(newButton);


    document.getElementById('add-game-form').style.display = "none";
}

function changeGame(url) {
    game.src = url
}

// Listeners and game changers for built-in DLEs. Faster and more responsive than onclick method used for user-added games.
document.getElementById('redactle').addEventListener('click', async () => {
    game.src = 'https://redactle.net/'
})

document.getElementById('semantle').addEventListener('click', async () => {
    game.src = 'https://semantle.com/'
})

document.getElementById('minicross').addEventListener('click', async () => {
    game.src = 'https://www.nytimes.com/crosswords/game/mini'
})

document.getElementById('worldle').addEventListener('click', async () => {
    game.src = 'https://worldle.teuteuf.fr/'
})

document.getElementById('framed').addEventListener('click', async () => {
    game.src = 'https://framed.wtf/'
})

document.getElementById('timeguessr').addEventListener('click', async () => {
    game.src = 'https://timeguessr.com/roundonedaily'
})

document.getElementById('wordle').addEventListener('click', async () => {
    game.src = 'https://www.nytimes.com/games/wordle/index.html'
})

document.getElementById('connections').addEventListener('click', async () => {
    game.src = 'https://www.nytimes.com/games/connections'
})

document.getElementById('gamedle').addEventListener('click', async () => {
    game.src = 'https://www.gamedle.wtf/classic?lang=en'
})

document.getElementById('listed').addEventListener('click', async () => {
    game.src = 'https://listed.fun/'
})

document.getElementById('tradle').addEventListener('click', async () => {
    game.src = 'https://games.oec.world/en/tradle/'
})

document.getElementById('rottentom').addEventListener('click', async () => {
    game.src = 'https://www.rottentomatoes.com/movie-trivia/'
})

document.getElementById('globle').addEventListener('click', async () => {
    game.src = 'https://globle-game.com/game'
})

document.getElementById('costcodle').addEventListener('click', async () => {
    game.src = 'https://costcodle.com/'
})

document.getElementById('movie2movie').addEventListener('click', async () => {
    game.src = 'https://movietomovie.com/'
})

document.getElementById('chronophoto').addEventListener('click', async () => {
    game.src = 'https://www.chronophoto.app/daily.html'
})

document.getElementById('spellcheck').addEventListener('click', async () => {
    game.src = 'https://spellcheckgame.com/'
})

document.getElementById('bandle').addEventListener('click', async () => {
    game.src = 'https://bandle.app/'
})