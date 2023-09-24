const toggler = document.querySelector('.switch-theme-checkbox');
const rootElement = document.querySelector('body');

function changeTheme() {
  if (toggler.checked) {
    rootElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    rootElement.classList.remove('dark-theme');
    localStorage.removeItem('theme');
  }
}

function localTheme() {
  const localStorageTheme = localStorage.getItem('theme');

  if (localStorageTheme === null) {
    toggler.checked = false;
    return;
  }
  toggler.checked = true;
  rootElement.classList.add('dark-theme');
}

toggler.addEventListener('change', changeTheme);

window.addEventListener('load', localTheme);
