const initBackgroundAnimation = () => {
  // Background animation initialization
};

// Read More Toggle functionality
const initReadMoreToggle = () => {
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  
  readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrapper = btn.parentElement;
      const expandableText = wrapper.querySelector('.about-wrapper__info-text--expandable');
      
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        expandableText.classList.remove('expanded');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Read More';
      } else {
        expandableText.classList.add('expanded');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Read Less';
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', initReadMoreToggle);

export default initBackgroundAnimation;
