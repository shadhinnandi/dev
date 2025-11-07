// Get all sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

// Intersection Observer callback
const navCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to corresponding link
      const activeId = entry.target.id;
      const activeLink = document.querySelector(`.nav-menu a[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

// Create the Intersection Observer
const navObserver = new IntersectionObserver(navCallback, {
  threshold: 0.5
});

// Observe all sections
sections.forEach(section => navObserver.observe(section));