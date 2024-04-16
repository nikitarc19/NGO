const toggleButton = document.getElementById('toggle-menu')   


if(toggleButton){
    toggleButton.addEventListener('click', () => {
        const navBar = document.getElementById('nav')
        navBar.style.display = navBar.style.display === 'none' ? 'block' : 'none'
    })
}