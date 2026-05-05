const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('close-menu')
const mobileHeader = document.querySelector('.js-mobile-menu');

hamburger.addEventListener('click', () =>{
  mobileHeader.classList.add("active");
});

closeBtn.addEventListener('click', () =>{
  mobileHeader.classList.remove("active");
});



const header = document.querySelector("header");

function updateHeader() {
  if (window.scrollY === 0) {
    header.classList.remove("glass");
  } else {
    header.classList.add("glass");
  }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);
