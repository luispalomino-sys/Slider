document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000;
  let slideInterval;

  if (totalSlides === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('opacity-100', 'active');
        slide.classList.remove('opacity-0');
      } else {
        slide.classList.remove('opacity-100', 'active');
        slide.classList.add('opacity-0');
      }
    });

    indicators.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('bg-indigo-500', 'w-10');
        btn.classList.remove('bg-slate-700', 'w-3');
      } else {
        btn.classList.remove('bg-indigo-500', 'w-10');
        btn.classList.add('bg-slate-700', 'w-3');
      }
    });

    currentIndex = index;
  }

  function nextSlide() {
    let next = (currentIndex + 1) % totalSlides;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(prev);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  indicators.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.target.getAttribute('data-slide'));
      showSlide(slideIndex);
      resetTimer();
    });
  });

  slideInterval = setInterval(nextSlide, intervalTime);
});