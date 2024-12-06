//navbar
const toggleBtn = document.getElementById('toggle-btn');
const navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

//scroll-fade
const elements = document.querySelectorAll('.scroll-fade'); // Select all elements with class 'scroll-fade'

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'title-fade' class to make the element visible when it enters the viewport
      entry.target.classList.add('title-fade');
      observer.unobserve(entry.target); // Stop observing the element after it has been activated
    }
  });
}, { threshold: 0.1 }); // Optional: Set the threshold to trigger when 50% of the element is in the viewport

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});


  