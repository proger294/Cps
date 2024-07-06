const sideBar = document.querySelector(".burger-modal");
const sideBarOpen = document.querySelector(".burger-modal--open");
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const modalClose = document.querySelector(".modal--close");
burger.addEventListener("click", () => {
  sideBar.classList.toggle("burger-modal--open");
 modalClose.classList.toggle("modal--open");

});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("burger-modal--open");
  modalClose.classList.remove("modal--open");

});

// close.addEventListener("click", () => sideBar.classList.remove("side-bar--open"));
