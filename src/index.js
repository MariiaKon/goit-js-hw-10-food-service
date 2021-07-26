import menu from "./menu.json";
import menuTemplate from "./templates/menu.hbs";
import './storage'
import './sass/main.scss';


const menuList = document.querySelector('.js-menu');
menuList.innerHTML = menuTemplate({ menuItems: menu });