const headerMain = document.querySelector('.main-header');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const logo = document.querySelector('.main-header__link-logo');
const mainBlock = document.querySelector('.main-block__wrap');
const anchor = document.querySelector('.main-nav__list');
const testwrap = document.querySelector('.main-header__wrap');

headerMain.classList.remove('main-header--nojs');
navMain.classList.remove('main-nav--nojs');

const burger = () => {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      logo.classList.add('main-header__link-logo--opened-mobile');
      mainBlock.classList.add('main-block__wrap--opened-mobile');
      document.body.style.overflow = 'hidden';
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      logo.classList.remove('main-header__link-logo--opened-mobile');
      mainBlock.classList.remove('main-block__wrap--opened-mobile');
      document.body.style.overflow = '';
    }
  });
};

// Скрывает в mobile меню при нажатии на ссылку
const hidesMenu = () => {
  anchor.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      logo.classList.remove('main-header__link-logo--opened-mobile');
      mainBlock.classList.remove('main-block__wrap--opened-mobile');
      document.body.style.overflow = '';
    }
  });
};

// Скрывает в mobile меню при нажатии на overlay
const hidesMenuOverlay = () => {
  testwrap.addEventListener('click', (evt) => {
    let target = evt.target;
    if (navMain.classList.contains('main-nav--opened') && !target.classList.contains('main-nav__wrapper') && !target.classList.contains('main-nav__toggle')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      logo.classList.remove('main-header__link-logo--opened-mobile');
      mainBlock.classList.remove('main-block__wrap--opened-mobile');
      document.body.style.overflow = '';
    }
  });
};

export {burger, hidesMenu, hidesMenuOverlay};
