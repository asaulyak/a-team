const toggler = document.querySelector('.switch-theme-checkbox')
const rootElement = document.querySelector('body')

function changeTheme() {
    if (toggler.checked) {       
        rootElement.classList.add('dark-theme')
    } else
    {
    rootElement.classList.remove('dark-theme')}

}

toggler.addEventListener('change',changeTheme)