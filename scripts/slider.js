const slides = document.querySelectorAll('.slide');
        let isDragging = false;
        let startPosX = 0;
        let currentSlide = 0;

        slides.forEach((slide, index) => {
            slide.addEventListener('mousedown', (e) => {
                isDragging = true;
                startPosX = e.clientX;
                currentSlide = index;
            });

            slide.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const distance = e.clientX - startPosX;
                slide.style.transform = `translateX(${distance}px)`;
            });

            slide.addEventListener('mouseup', (e) => {
                if (!isDragging) return;
                const distance = e.clientX - startPosX;
                if (distance > 100) {
                    changeSlide(-1);
                } else if (distance < -100) {
                    changeSlide(1);
                } else {
                    slide.style.transform = 'translateX(0)';
                }
                isDragging = false;
            });

            slide.addEventListener('mouseleave', () => {
                if (!isDragging) return;
                slide.style.transform = 'translateX(0)';
                isDragging = false;
            });
        });

        function changeSlide(n) {
            currentSlide += n;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            slides.forEach((slide, index) => {
                slide.style.transform = index === currentSlide ? 'translateX(0)' : 'translateX(100%)';
            });
        }
