// Инициализация слайдера проектов
const projectSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Инициализация слайдера отзывов
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});

// Функционал переключения темы
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Проверяем сохраненную тему в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

const handleToggleTheme = () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Добавляем обработчики событий для доступности
themeToggle.addEventListener('click', handleToggleTheme);

// Анимация шкал навыков
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Сначала устанавливаем ширину 0 для всех шкал
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });
    
    // Затем анимируем их до нужного значения с небольшой задержкой
    setTimeout(() => {
        skillBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = `${percent}%`;
        });
    }, 300);
    
    // Обработка отправки формы
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Ваше сообщение отправлено.');
            contactForm.reset();
        });
    }
});
