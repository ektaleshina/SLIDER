const slides = document.querySelectorAll('.s-image');
   const navItems = document.querySelectorAll('.slider__main-nav-item');
   const dotsContainer = document.getElementById('dots');
   const sliderBox = document.getElementById('slider-con-box');
   let currentIndex = 0;


   slides.forEach((slide, index) => {
       const dot = document.createElement('div');
       dot.classList.add('dot');
       dot.addEventListener('click', () => goToSlide(index));
       dotsContainer.appendChild(dot);
   });

   const dots = document.querySelectorAll('.dot');

   function updateSlider() {
       sliderBox.style.transform = `translateX(-${currentIndex * 100}%)`;
       dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
       navItems.forEach((item, index) => item.classList.toggle('active', index === currentIndex));
   }

   function goToSlide(index) {
       currentIndex = index;
       updateSlider();
   }

   function changeSlide(direction) {
       currentIndex += direction;

       if (currentIndex < 0) {
           currentIndex = slides.length - 1;
       } else if (currentIndex >= slides.length) {
           currentIndex = 0;
       }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const slideIndex = item.getAttribute('data-slide');
            sliderBox.style.transform = `translateX(-${slideIndex * 680}px)`;

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });  

       updateSlider();
   }

   updateSlider();

