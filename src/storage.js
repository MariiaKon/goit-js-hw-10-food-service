const themeSwitcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const Key = 'themeValue';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


(() => {
    body.classList.add(Theme.LIGHT)
})()

themeSwitcher.addEventListener('change', changeTheme);

function toggleTheme (savedТheme) {
  savedТheme
    ? body.classList.replace(Theme.LIGHT, Theme.DARK)
    : body.classList.replace(Theme.DARK, Theme.LIGHT);
}

function changeTheme (e) {
  const theme = e.target.checked;
  toggleTheme(theme);
  localStorage.setItem(Key, theme);
}
    
function saveCurrentTheme () {
    const savedТheme = JSON.parse(localStorage.getItem(Key));
    themeSwitcher.checked = savedТheme;
    changeTheme(savedТheme);
}
