// Sell DOM (Document Object Model) Items
// UI structure (ie. html tags, buttons etc)

// constants
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

// can't use querySelector because it will only get first nav item
// use querySelectorAll

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    // if on main webpage, not on rotating menu
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        // loop thru nav items and use show class
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;

    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        // loop thru nav items and use show class
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;

    }
}

