const navIconEl = document.querySelector(".nav__icon");
const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navBgoverlayEl = document.querySelector(".nav__bgoverlay");

const navOpen = () => {
  navList.classList.add('show');
  navBgoverlayEl.classList.add('active');
  document.body.style='visibility:visible ;height:100vh;width:100vw;overflow:hidden;';
}
const navClose = () => {
 navList.classList.remove('show');
  navBgoverlayEl.classList.remove('active');
  document.body.style='visibility:visible;height:initial;width:100%;overflow-x:hidden;';
}
navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);
navBgoverlayEl.addEventListener('click',navClose);
