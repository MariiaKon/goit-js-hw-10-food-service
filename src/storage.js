const themeSwitcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



themeSwitcher.addEventListener('change', saveUserTheme);

let userSettings = {};

function saveUserTheme() {
  if (themeSwitcher.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK)
    userSettings = {
      userTheme: Theme.DARK,
      isSwitcherOn: themeSwitcher.checked = true,
    }
   
    localStorage.setItem('userSettings', JSON.stringify(userSettings))
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT)
    userSettings = {
      userTheme: Theme.LIGHT,
      isSwitcherOn: themeSwitcher.checked = false,
    }

    localStorage.setItem('userSettings', JSON.stringify(userSettings))
  }
}

const getLS = () => {
  const isDataLS = localStorage.getItem('userSettings');
  if (isDataLS) {
    return isDataLS;
  }
}
const savedSettings = JSON.parse(getLS())
if (!savedSettings) {
  themeSwitcher.checked = false;
  body.classList.add(Theme.LIGHT);
}
themeSwitcher.checked = savedSettings.isSwitcherOn

const currentClass = body.classList.contains(Theme.LIGHT);
if (currentClass !== savedSettings.userTheme) {
  body.classList.remove(currentClass)
  body.classList.toggle(savedSettings.userTheme)
}
