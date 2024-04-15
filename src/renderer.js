const game = document.getElementById('game');

// Toggle dark mode
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleDark();
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

// Window control buttons
document.getElementById('minimizebtn').addEventListener('click', () => {
    window.api.minimize();
})

document.getElementById('maximizebtn').addEventListener('click', () => {
    window.api.maximize();
})

document.getElementById('exitbtn').addEventListener('click', () => {
    window.api.close();
})

// If window is clicked with add game settings form open, close the form
window.onclick = function(event) {
    var modal = document.getElementById('add-game-form');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Logic for adding a game specified by the user in the add game form. Accepts URL and Name to create a new button at the bottom of the dropdown list in the navbar
function addGame() {
    document.getElementById('add-game-form').style.display = "none";

    const url = document.getElementById('url-to-add').value;
    const gameName = document.getElementById('name-to-add').value;

    // Iterate through the elements in the dropdown list, and remove bottommost-button class from them (only last item will have it)
    const currBottom = document.getElementsByClassName("bottommost-button");
    for (let i = 0; i < currBottom.length; i++) {
        currBottom[i].classList.remove("bottommost-button");
    }

    // Create new button for new game
    const newButton = document.createElement("button");
    newButton.textContent = gameName;

    // Add styling to new button to round corners for bottom-most element of dropdown
    newButton.classList.add("bottommost-button");

    // Add onclick attribute to the new button to call the changeGame function
    newButton.setAttribute("onclick", `changeGame('${url}')`);

    // Add new button to dropdown list
    document.getElementById('more-games').appendChild(newButton);
    
    var data = url.concat(",", gameName);
    window.api.saveGame(data);

}

function changeGame(url) {
    game.src = url;
}

// Listeners and game changers for built-in DLEs. Faster and more responsive than onclick method used for user-added games.
document.getElementById('redactle').addEventListener('click', () => {
    game.src = 'https://redactle.net/';
})

document.getElementById('semantle').addEventListener('click', () => {
    game.src = 'https://semantle.com/';
})

document.getElementById('minicross').addEventListener('click', () => {
    game.src = 'https://www.nytimes.com/crosswords/game/mini';
})

document.getElementById('worldle').addEventListener('click', () => {
    game.src = 'https://worldle.teuteuf.fr/';
})

document.getElementById('framed').addEventListener('click', () => {
    game.src = 'https://framed.wtf/';
})

document.getElementById('timeguessr').addEventListener('click', () => {
    game.src = 'https://timeguessr.com/roundonedaily';
})

document.getElementById('wordle').addEventListener('click', () => {
    game.src = 'https://www.nytimes.com/games/wordle/index.html';
})

document.getElementById('connections').addEventListener('click', () => {
    game.src = 'https://www.nytimes.com/games/connections';
})

document.getElementById('gamedle').addEventListener('click', () => {
    game.src = 'https://www.gamedle.wtf/classic?lang=en';
})

document.getElementById('listed').addEventListener('click', () => {
    game.src = 'https://listed.fun/';
})

document.getElementById('tradle').addEventListener('click', () => {
    game.src = 'https://games.oec.world/en/tradle/';
})

document.getElementById('rottentom').addEventListener('click', () => {
    game.src = 'https://www.rottentomatoes.com/movie-trivia/';
})

document.getElementById('globle').addEventListener('click', () => {
    game.src = 'https://globle-game.com/game';
})

document.getElementById('costcodle').addEventListener('click', () => {
    game.src = 'https://costcodle.com/';
})

document.getElementById('movie2movie').addEventListener('click', () => {
    game.src = 'https://movietomovie.com/';
})

document.getElementById('chronophoto').addEventListener('click', () => {
    game.src = 'https://www.chronophoto.app/daily.html';
})

document.getElementById('spellcheck').addEventListener('click', () => {
    game.src = 'https://spellcheckgame.com/';
})

document.getElementById('foodguessr').addEventListener('click', () => {
    game.src = 'https://www.foodguessr.com/';
})

document.getElementById('bandle').addEventListener('click', () => {
    game.src = 'https://bandle.app/';
})