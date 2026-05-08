const story = document.querySelector('.js-our-story');

story.addEventListener('click', () => {
  const aboutSection = document.querySelector('.about-section');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});


// EXPLORE TREATMENTS BUTTON -> SERVICES SECTION
const exploreBtn = document.querySelector('.explore-treatements-btn');

exploreBtn.addEventListener('click', () => {
  const servicesSection = document.querySelector('.services-section');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});