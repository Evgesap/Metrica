const BURGER_OPENED_CLASSNAME = "burger_open";
const BURGER_BTN_OPENED_CLASSNAME = "burger-btn_open";
const BODY_FIXED_BURGER_CLASSNAME = "body_fixed";
const BURGER_LINE_CONTENT_OPEN_CLASSNAME = "burger__line_content_open";

const bodyNodeBurger = document.querySelector("body");
const burgerNode = document.querySelector(".js-burger");
const burgerBtnNode = document.querySelector(".js-burger-btn");
const burgerContentNode = document.querySelector(".js-burger__content");
const burgerLineNode = document.querySelector(".burger__line");

burgerBtnNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNodeBurger.classList.toggle(BODY_FIXED_BURGER_CLASSNAME);
  burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
  burgerLineNode.classList.toggle(BURGER_LINE_CONTENT_OPEN_CLASSNAME);
}
