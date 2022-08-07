import toggleBurger from './toggle-burger.js';
import assignHandlersToTabs from './tabs.js';

document.getElementById('burger_toggle_button').addEventListener('click', () => toggleBurger("button_menu_mobile"))
assignHandlersToTabs();
