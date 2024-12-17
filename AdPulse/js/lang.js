document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language2-selector');

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;

        // Сховати всі елементи з класом language2
        const allTextElements = document.querySelectorAll('.language2');
        allTextElements.forEach(el => {
            el.classList.add('noActive'); // Видаляємо клас active
        });

        // Показати лише елементи з вибраною мовою
        const activeElements = document.querySelectorAll(`[data-language="${selectedLanguage}"]`);
        activeElements.forEach(el => {
            el.classList.remove('noActive');
            el.classList.add('active'); // Додаємо клас active
        });

    });
    // Імітація зміни мови на українську через програмний виклик
    const event = new Event('change'); // Створюємо нову подію
    languageSelector.value = 'en'; // Встановлюємо нове значення
    languageSelector.dispatchEvent(event); // Імітуємо подію change
});





