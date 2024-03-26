document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleDark()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
});

document.getElementById('redactle').addEventListener('click', async () => {
    await window.api.changeGame('https://redactle.net/')
})

document.getElementById('semantle').addEventListener('click', async () => {
    await window.api.changeGame('https://semantle.com/')
})

document.getElementById('worldle').addEventListener('click', async () => {
    await window.api.changeGame('https://worldle.teuteuf.fr/')
})

document.getElementById('framed').addEventListener('click', async () => {
    await window.api.changeGame('https://framed.wtf/')
})

document.getElementById('timeguessr').addEventListener('click', async () => {
    await window.api.changeGame('https://timeguessr.com/roundonedaily')
})

document.getElementById('connections').addEventListener('click', async () => {
    await window.api.changeGame('https://www.nytimes.com/games/connections')
})

document.getElementById('gamedle').addEventListener('click', async () => {
    await window.api.changeGame('https://www.gamedle.wtf/classic?lang=en')
})

document.getElementById('listed').addEventListener('click', async () => {
    await window.api.changeGame('https://listed.fun/')
})

document.getElementById('tradle').addEventListener('click', async () => {
    await window.api.changeGame('https://games.oec.world/en/tradle/')
})

document.getElementById('rottentom').addEventListener('click', async () => {
    await window.api.changeGame('https://www.rottentomatoes.com/movie-trivia/')
})

document.getElementById('globle').addEventListener('click', async () => {
    await window.api.changeGame('https://globle-game.com/game')
})

document.getElementById('costcodle').addEventListener('click', async () => {
    await window.api.changeGame('https://costcodle.com/')
})

document.getElementById('movie2movie').addEventListener('click', async () => {
    await window.api.changeGame('https://movietomovie.com/')
})

document.getElementById('chronophoto').addEventListener('click', async () => {
    await window.api.changeGame('https://www.chronophoto.app/daily.html')
})

document.getElementById('spellcheck').addEventListener('click', async () => {
    await window.api.changeGame('https://spellcheckgame.com/')
})

document.getElementById('bandle').addEventListener('click', async () => {
    await window.api.changeGame('https://bandle.app/')
})