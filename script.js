// Автоматический расчет возраста
const birthYear = 2007;
const currentYear = new Date().getFullYear();

function getAge() {
  return currentYear - birthYear;
}

const ageElement = document.getElementById('age');
if (ageElement) {
  ageElement.textContent = getAge();
}

const translations = {
  en: {
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-badge": "Hi, I'm Dima",
    "hero-title": "Frontend Developer building modern web interfaces",
    "hero-desc": "Specializing in layout, interactive user interfaces, and clean code. Ready for challenging and interesting projects.",
    "projects-badge": "1st Month Plan",
    "projects-title": "First Month Projects",
    "projects-sub": "HTML, CSS & JavaScript",
    "projects-text": "Development and training plan created with a mentor. All projects are built with clean code and uploaded to GitHub via Git CLI:",
    "p1-desc": "<strong>Project 1:</strong> Portfolio landing page",
    "p2-desc": "<strong>Project 2:</strong> roadmap.sh clone — Pixel Perfect",
    "p3-desc": "<strong>Project 3:</strong> Pure JS Calculator",
    "about-badge": "About me",
    "about-title": "My Journey",
    "about-desc": `I am <span id="age">${getAge()}</span> years old, originally from Ukraine, Poltava. After school, I moved to Poland and worked at a factory for 2 years. At some point, I decided to change my life and started passionately learning Frontend Development!`,
    "footer-role": "Frontend Developer",
    "footer-text": "Website built with HTML5 & CSS3"
  },
  ru: {
    "nav-about": "О себе",
    "nav-projects": "Проекты",
    "nav-contact": "Контакты",
    "hero-badge": "Привет, я Дима",
    "hero-title": "Frontend Developer, создающий современные веб-интерфейсы",
    "hero-desc": "Специализируюсь на верстке, интерактивных пользовательских интерфейсах и чистом коде. Готов к сложным и интересным проектам.",
    "projects-badge": "План на 1-й месяц",
    "projects-title": "Проекты на первый месяц",
    "projects-sub": "HTML, CSS & JavaScript",
    "projects-text": "План разработки и обучения, составленный совместно с ментором. Все проекты верстаются на чистом коде и загружаются на GitHub через Git CLI:",
    "p1-desc": "<strong>Проект 1:</strong> Лендинг-визитка портфолио",
    "p2-desc": "<strong>Проект 2:</strong> Клон сайта <code>roadmap.sh</code> — точность в пиксель (Pixel Perfect)",
    "p3-desc": "<strong>Проект 3:</strong> Калькулятор на чистом JS (арифметика, скобки и приоритет операций)",
    "about-badge": "О себе",
    "about-title": "Мой путь",
    "about-desc": `Мне <span id="age">${getAge()}</span> лет, родом из Украины, из города Полтава. После школы уехал в Польшу и 2 года работал на заводе. В какой-то момент всё надоело, решил круто изменить жизнь и начал увлеченно изучать Frontend-разработку!`,
    "footer-role": "Frontend Developer",
    "footer-text": "Сайт сверстан на HTML5 & CSS3"
  },
  ua: {
    "nav-about": "Про мене",
    "nav-projects": "Проєкти",
    "nav-contact": "Контакти",
    "hero-badge": "Привіт, я Діма",
    "hero-title": "Frontend Developer, що створює сучасні веб-інтерфейси",
    "hero-desc": "Спеціалізуюсь на верстці, інтерактивних інтерфейсах та чистому коді. Готовий до складних і цікавих проєктів.",
    "projects-badge": "План на 1-й місяць",
    "projects-title": "Проєкти на перший місяць",
    "projects-sub": "HTML, CSS & JavaScript",
    "projects-text": "План розробки та навчання, складений спільно з ментором. Всі проєкти верстаються на чистому коді та завантажуються на GitHub через Git CLI:",
    "p1-desc": "<strong>Проєкт 1:</strong> Лендінг-візитка портфоліо",
    "p2-desc": "<strong>Проєкт 2:</strong> Клон сайту <code>roadmap.sh</code> — точність у піксель (Pixel Perfect)",
    "p3-desc": "<strong>Проєкт 3:</strong> Калькулятор на чистому JS (арифметика, дужки та пріоритет операцій)",
    "about-badge": "Про мене",
    "about-title": "Мій шлях",
    "about-desc": `Мені <span id="age">${getAge()}</span> років, родом з України, з міста Полтава. Після школи виїхав до Польщі і 2 роки працював на заводі. У певний момент вирішив круто змінити життя та почав захоплено вивчати Frontend-розробку!`,
    "footer-role": "Frontend Developer",
    "footer-text": "Сайт створено на HTML5 & CSS3"
  },
  pl: {
    "nav-about": "O mnie",
    "nav-projects": "Projekty",
    "nav-contact": "Kontakt",
    "hero-badge": "Cześć, jestem Dima",
    "hero-title": "Frontend Developer tworzący nowoczesne interfejsy webowe",
    "hero-desc": "Specjalizuję się w kodowaniu, interaktywnych interfejsach użytkownika oraz czystym kodzie. Gotowy na ciekawe projekty.",
    "projects-badge": "Plan na 1. miesiąc",
    "projects-title": "Projekty na pierwszy miesiąc",
    "projects-sub": "HTML, CSS & JavaScript",
    "projects-text": "Plan rozwoju i nauki stworzony z mentorem. Wszystkie projekty są pisane w czystym kodzie i przesyłane do GitHub przez Git CLI:",
    "p1-desc": "<strong>Projekt 1:</strong> Wizytówka portfolio",
    "p2-desc": "<strong>Projekt 2:</strong> Klon strony <code>roadmap.sh</code> — Pixel Perfect",
    "p3-desc": "<strong>Projekt 3:</strong> Kalkulator w czystym JS",
    "about-badge": "O mnie",
    "about-title": "Moja droga",
    "about-desc": `Mam <span id="age">${getAge()}</span> lat, pochodzę z Ukrainy, z Połtawy. Po szkole wyjechałem do Polski i przez 2 lata pracowałem w fabryce. W pewnym momencie postanowiłem zmienić swoje życie i zacząłem z pasją uczyć się Frontend Developmentu!`,
    "footer-role": "Frontend Developer",
    "footer-text": "Strona zbudowana w HTML5 & CSS3"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}