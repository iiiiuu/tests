let reviewCurrentSlide = 0;
let isSwiping = false; // Прапорець для контролю свайпу
let isButtonPressed = false; // Прапорець для контролю натискання кнопки

function reviewMoveSlide(direction) {
    const slides = document.querySelectorAll('.reviewSlide');
    const totalSlides = slides.length;

    reviewCurrentSlide += direction;

    if (reviewCurrentSlide < 0) {
        reviewCurrentSlide = totalSlides - 1; // Циклічний перехід до останнього слайду
    } else if (reviewCurrentSlide >= totalSlides) {
        reviewCurrentSlide = 0; // Циклічний перехід до першого слайду
    }

    const sliderWrapper = document.querySelector('.reviewSlider-wrapper');
    sliderWrapper.style.transform = `translateX(-${reviewCurrentSlide * 100}%)`;
}

let reviewStartX;
let reviewEndX;

function reviewHandleTouchStart(e) {
    isSwiping = !isButtonPressed;
    reviewStartX = e.touches[0].clientX;
}

function reviewHandleTouchMove(e) {
    if(!isButtonPressed) {
        reviewEndX = e.touches[0].clientX;
    }
}

function reviewHandleTouchEnd() {

    if (!isButtonPressed) {
        const moveX = reviewEndX - reviewStartX;
        if (isSwiping) { // Перевірка, чи відбувається свайп
            if (moveX > 50) {
                reviewMoveSlide(-1); // Прокрутка вліво
            } else if (moveX < -50) {
                reviewMoveSlide(1); // Прокрутка вправо
            }
        }
    }
    isSwiping = false; // Завершення свайпу
}


// Додайте обробники подій для кнопок
const prevButton = document.querySelector('.reviewPrev');
const nextButton = document.querySelector('.reviewNext');

prevButton.addEventListener('touchstart', () => {
    isButtonPressed = true; // Натискання кнопки
    console.log("ми на кнопці п ? "+isButtonPressed);
});

nextButton.addEventListener('touchstart', () => {
    isButtonPressed = true; // Натискання кнопки
    console.log("ми на кнопці н ? "+isButtonPressed);

});

prevButton.addEventListener('touchend', () => {
    isButtonPressed = false; // Вивільнення кнопки
    console.log("ми не на кнопці п ? "+isButtonPressed);
});

nextButton.addEventListener('touchend', () => {
    isButtonPressed = false; // Вивільнення кнопки
    console.log("ми не на кнопці н ? "+isButtonPressed);
});

prevButton.addEventListener('click', () => {
    console.log("п кнопка");
    console.log("чи ми на кнопці? "+ isButtonPressed);
    console.log("чи ми свайпаєм? "+ isSwiping);
    if (isButtonPressed) { // Перевірка, чи не відбувається свайп та не натиснута кнопка
        reviewMoveSlide(-1); // Прокрутка вліво
    }
});

nextButton.addEventListener('click', () => {
    console.log("н кнопка");
    console.log("чи ми на кнопці? "+ isButtonPressed);
    console.log("чи ми свайпаєм? "+ isSwiping);
    if (isButtonPressed) { // Перевірка, чи не відбувається свайп та не натиснута кнопка
        reviewMoveSlide(1); // Прокрутка вправо
    }
});

const review = document.querySelector('.reviewSlider');
review.addEventListener('touchstart', reviewHandleTouchStart);
review.addEventListener('touchmove', reviewHandleTouchMove);
review.addEventListener('touchend', reviewHandleTouchEnd);
