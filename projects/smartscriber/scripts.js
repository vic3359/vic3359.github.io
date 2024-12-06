if (window.innerWidth <= 767) { // Enable swipe only on mobile
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    const carousel = document.querySelector('.carousel');
    const carouselSlide = document.querySelector('.carousel-slide');

    let startX = 0;
    let endX = 0;

    // Swipe gesture listeners
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Starting touch position
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX; // End touch position

        if (startX > endX + 50) {
            // Swipe left
            currentSlide = (currentSlide + 1) % totalSlides;
        } else if (startX + 50 < endX) {
            // Swipe right
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }

        goToSlide(currentSlide);
    });

    // Unified slide movement & indicator update function
    function goToSlide(slideIndex) {
        const slide = slides[0]; // First slide for reference
        const slideWidth = slide.offsetWidth; // Width of a single slide
        const slideGap = parseFloat(getComputedStyle(slide.parentElement).gap); // Get gap value from parent (.carousel-slide)
    
        const totalWidth = slideWidth + slideGap; // Total width including the gap
    
        const carouselSlide = document.querySelector('.carousel-slide');
        carouselSlide.style.transform = `translateX(-${slideIndex * totalWidth}px)`; // Move to the correct slide
    
        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
    }
    
    

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        const slideGap = parseFloat(getComputedStyle(slides[0]).marginRight);
        const totalWidth = slideWidth + slideGap;
    
        const newTransformValue = -currentIndex * totalWidth; 
        document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}px)`;
    }
    
    

    // Indicator click listeners
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            goToSlide(index);
        });
    });

    // Auto-initialize the first slide
    goToSlide(0);
}


// Function to update the left padding dynamically
function updateCarouselPadding() {
    const carousel = document.querySelector('.carousel');
    const slide = document.querySelector('.carousel-slide img'); // Select a single slide
    const slideWidth = slide.offsetWidth; // Get the width of one slide
    const viewportWidth = window.innerWidth; // Get the current viewport width
    const padding = (viewportWidth - slideWidth) / 2; // Calculate left padding to center the carousel

    // Apply the calculated padding
    carousel.style.paddingLeft = `${padding}px`;
    carousel.style.paddingRight = `${padding}px`; // Ensure both sides have equal padding
}

// Call the function initially to center the carousel
updateCarouselPadding();

// Add an event listener to update the padding whenever the window is resized
window.addEventListener('resize', updateCarouselPadding);


//Moving Banner Scripts





  
  