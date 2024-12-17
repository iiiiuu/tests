function openImage(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = imageSrc; // Встановлює джерело зображення
    modal.style.display = 'flex'; // Показує модальне вікно

    // Затримка для анімації збільшення
    setTimeout(() => {
        modalImage.style.transform = 'scale(1)'; // Збільшує зображення
    }, 10);
}

function closeImage() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    modalImage.style.transform = 'scale(0)'; // Зменшує зображення
    modal.style.display = 'none'; // Сховує модальне вікно
}


const navButtons = document.querySelectorAll('.nav-button');

window.addEventListener('scroll', () => {
    let currentSection = '';

    navButtons.forEach((button, index) => {
        const section = document.querySelector(button.getAttribute('href'));
        if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top; // Відстань від верху вікна до секції
            const sectionHeight = rect.height; // Висота секції

            // Перевіряємо, чи секція видима у вікні
            if (sectionTop >= -100 && sectionTop < window.innerHeight + 100) {
                // Перевіряємо, чи попередня секція не видима
                if (index === 0 || navButtons[index - 1].getAttribute('href') !== currentSection) {
                    const prevSection = document.querySelector(navButtons[index - 1].getAttribute('href'));
                    if (prevSection) {
                        const prevRect = prevSection.getBoundingClientRect();
                        const prevSectionTop = prevRect.top;
                        if (prevSectionTop < 0) {
                            currentSection = button.getAttribute('href');
                        }
                    } else {
                        currentSection = button.getAttribute('href'); // Якщо попередня секція не знайдена
                    }
                }
            }
        }
    });
    navButtons.forEach(button => {
        if (button.getAttribute('href') === currentSection) {
            button.classList.add('activeB');
            button.classList.remove('inactive');
        } else {
            button.classList.remove('activeB');
            button.classList.add('inactive');
        }
    });
});



const toggleButton = document.getElementById('toggleButton');
const navArea = document.getElementById('navArea');
const header = document.getElementById('fix');
const mobielHeader = document.getElementById('mobielHeader');
toggleButton.addEventListener('click', () => {
    if (navArea.style.display === 'none' || navArea.style.display === '') {
        header.style.height = "215vw";
        mobielHeader.style.height= "8%"
        navArea.style.display = 'flex'; // Відкрити хедер
        toggleButton.innerHTML = `
              
<svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_41_692)">
<path d="M26.9584 25L37.0834 14.875C37.3109 14.6093 37.4298 14.2676 37.4163 13.918C37.4028 13.5685 37.2579 13.2369 37.0106 12.9895C36.7632 12.7422 36.4316 12.5973 36.0821 12.5838C35.7325 12.5703 35.3908 12.6892 35.1251 12.9167L25.0001 23.0417L14.8751 12.9028C14.6094 12.6753 14.2676 12.5564 13.918 12.5699C13.5685 12.5834 13.2369 12.7283 12.9896 12.9756C12.7422 13.223 12.5973 13.5546 12.5838 13.9041C12.5703 14.2537 12.6892 14.5955 12.9167 14.8611L23.0417 25L12.9028 35.125C12.7574 35.2495 12.6394 35.4028 12.556 35.5751C12.4726 35.7474 12.4258 35.9351 12.4184 36.1264C12.411 36.3176 12.4432 36.5084 12.5131 36.6866C12.5829 36.8648 12.6888 37.0267 12.8242 37.1621C12.9595 37.2974 13.1214 37.4033 13.2996 37.4731C13.4778 37.543 13.6686 37.5752 13.8599 37.5678C14.0511 37.5604 14.2388 37.5136 14.4111 37.4302C14.5834 37.3468 14.7367 37.2288 14.8612 37.0834L25.0001 26.9584L35.1251 37.0834C35.3908 37.3109 35.7325 37.4298 36.0821 37.4163C36.4316 37.4028 36.7632 37.2579 37.0106 37.0105C37.2579 36.7632 37.4028 36.4316 37.4163 36.0821C37.4298 35.7325 37.3109 35.3907 37.0834 35.125L26.9584 25Z" fill="#CDFC18"/>
</g>
<defs>
<clipPath id="clip0_41_692">
<rect fill="white" height="50" width="50"/>
</clipPath>
</defs>
</svg>

            `; // Змінити SVG на "X" (можна вставити свій SVG для закриття)
    } else {
        header.style.height = "15vw";
        mobielHeader.style.height= "100%"
        navArea.style.display = 'none'; // Сховати хедер
        toggleButton.innerHTML = `
               <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 25H43.75" stroke="#F4F4F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 12.5H31.25M18.75 37.5H43.75" stroke="#CDFC18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            `; // Повернути SVG до початкового стану
    }
});



// Отримуємо всі кнопки
const scrollButtons = document.querySelectorAll(".scrollButton");

scrollButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Отримуємо цільовий ID з data-атрибута
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId); // Знаходимо цільовий елемент

        if (target) {
            console.log('Стандартна поведінка скасована:', event.defaultPrevented); // false
            event.preventDefault();
            console.log('Стандартна поведінка скасована:', event.defaultPrevented);
            target.scrollIntoView({ behavior: 'smooth' }); // Плавний перехід до секції
        }
    });
});