document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleDark()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
});