const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`please there is no ${element} check again`);
};

const links = getElement('.nav-links');
const navBtnDom = getElement('.nav-btn');

navBtnDom.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const date = getElement('#date');
const currenYear = new Date().getFullYear();
date.textContent = currenYear;

gsap.registerPlugin(Flip);

const animationLinks = document.querySelectorAll('.nav-item a');

const activeNav = document.querySelector('.active-nav');

animationLinks.forEach((animationLink) => {
  animationLink.addEventListener('click', (e) => {
    const state = Flip.getState(activeNav);

    animationLink.appendChild(activeNav);

    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: 'elastic.out(1,0.5)',
    });
  });
});
