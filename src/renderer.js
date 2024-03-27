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

document.getElementById('redactle').addEventListener('click', async () => {
    game.src = 'https://redactle.net/'
})

document.getElementById('semantle').addEventListener('click', async () => {
    game.src = 'https://semantle.com/'
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