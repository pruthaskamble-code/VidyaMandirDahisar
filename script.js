document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (slide && images.length > 0) {
    let counter = 0;
    let autoSlideInterval;

    // Move slides using percentage translation
    const updateSlide = () => {
      slide.style.transform = `translateX(${-100 * counter}%)`;
    };

    const nextSlide = () => {
      counter = (counter >= images.length - 1) ? 0 : counter + 1;
      updateSlide();
    };

    const prevSlide = () => {
      counter = (counter <= 0) ? images.length - 1 : counter - 1;
      updateSlide();
    };

    // Reset auto-slide timer whenever a user clicks next/prev
    const resetTimer = () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 3000);
    };

    // Add safe event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
      });
    }

    // Start automatic sliding every 3 seconds
    resetTimer();
  }
});