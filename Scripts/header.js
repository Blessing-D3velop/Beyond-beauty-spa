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


const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

/* MAP ALL NAV ITEMS (DESKTOP + MOBILE) */
const navMap = [
  { selector: ".js-home", target: "home-section-id" },
  { selector: ".js-about", target: "about-section-id" },
  { selector: ".js-services", target: "services-section-id" },
  { selector: ".js-gallery", target: "gallery-section-id" },
  { selector: ".js-testimonials", target: "testimonials-section-id" },
  { selector: ".js-contact", target: "contact-section-id" }
];

/* APPLY TO ALL MATCHES (DESKTOP + MOBILE INCLUDED) */
navMap.forEach((item) => {
  const elements = document.querySelectorAll(item.selector);

  elements.forEach((el) => {
    el.addEventListener("click", () => {
      scrollToSection(item.target);
        mobileHeader.classList.remove("active");
    });
  });
});


const bookNowButtons = document.querySelectorAll('.js-book-now-btn');

bookNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // OPTION 1: Scroll to contact section
    const contactSection = document.querySelector('#contact-section-id');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // OPTIONAL: close mobile menu if open
    const mobileMenu = document.querySelector('.js-mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }

  });
});