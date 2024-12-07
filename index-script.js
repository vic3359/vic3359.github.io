// //navbar
// const toggleBtn = document.getElementById('toggle-btn');
// const navbarLinks = document.querySelector('.navbar-links');

// toggleBtn.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const navbarLinks = document.getElementById("navbar-links");
  const links = document.querySelectorAll(".navbar-links a"); // Select all links within the navbar

  // Toggle menu visibility
  toggleBtn.addEventListener("click", function () {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    navbarLinks.classList.toggle("active");
  });

  // Close navbar menu when clicking any of the navbar links
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navbarLinks.classList.remove("active"); // Close the entire menu
      toggleBtn.setAttribute("aria-expanded", "false"); // Reset toggle button
    });
  });
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

//refresh-prevent scrollTo section (only on index.html)
document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is index.html
  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    // Check if the URL contains a hash
    if (window.location.hash) {
      // Remove the hash without causing a page jump
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Scroll to the top
    window.scrollTo(0, 0);
  }
});






  