console.log('1. Смена изображений в секции portfolio +25. 2. Перевод страницы на два языка +25. 3. Переключение светлой и тёмной темы +25. 4. --. 5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5. Итого 80 баллов из 75')

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Эл. почта',
    'phone': 'Телефон',
    'message': 'Сообщение'
  }
}

let themeCheck = 'dark';
let langCheck = 'en';
const dataI18 = document.querySelectorAll('[data-i18]');
const themeChngBtn = document.querySelectorAll('.theme_btn');
const themeIcon = document.querySelectorAll('.theme_btn use')
const portfolioBtn = document.querySelectorAll('.portfolio__button');
const titleAfter = document.querySelectorAll('.title::after');
const langBtn = document.querySelectorAll('.menu__button');
const themeArr = [
  '.body', 
  '.title__text_content',
  '.skills__description',
  '.skills__title',
  '.price__title',
  '.price__item_cost',
  '.price__item_benefits',
  '.price__li',
  '.portfolio__button'
];

const getTranslate = (x) => {
  dataI18.forEach((node) => {
    if (node.placeholder) {
      node.placeholder = i18Obj[x][node.dataset.i18]
      node.textContent = ''
    } else {
      node.textContent = i18Obj[x][node.dataset.i18]
    }
  })
}

langBtn.forEach((langbtn) => {
  langbtn.addEventListener('click', (event) => {
    const eTrgt = event.target.textContent;
    activeLangChng(eTrgt);
    langCheck = eTrgt;
    getTranslate(eTrgt)
  })
});

const activeLangChng = (x) => {
  langBtn.forEach((y) => {
    const langTxtCntnt = y.textContent
    if (x == langTxtCntnt) {
      y.classList.add('menu__button-active')
    } else {
      y.classList.remove('menu__button-active')
    }
  })
}

themeChngBtn.forEach((x) => {
  x.addEventListener('click', () => {
    themeChng(themeArr);
    themeIcon.forEach((y) => {
      if (themeCheck == 'dark') {
        y.setAttribute("href", "./assets/svg/sprite_theme.svg#light");
      } else {
        y.setAttribute("href", "./assets/svg/sprite_theme.svg#dark");
      }
    }); 
    themeCheck == 'dark' ? themeCheck = 'light' : themeCheck = 'dark'
  });
});

const themeChng = (x) => {
  x.forEach((themeClass) => {
    document.querySelectorAll(`${themeClass}`).forEach((subClass) => {
      subClass.classList.toggle('light_theme');
    });
  });
}


const portImages = document.querySelectorAll('.portfolio__img');

portfolioBtn.forEach((x) => {
  x.addEventListener('click', (e) => {
    const eTarget = e.target.textContent.replace(/\s/g, '')
    activeBtnChng(eTarget)
    imgSrcChng(x.dataset.season)
  })
});

const activeBtnChng = (x) => {
  portfolioBtn.forEach((y) => {
    const btnTxtCntnt = y.textContent.replace(/\s/g, '')
    if (x == btnTxtCntnt) {
      y.classList.add('portfolio__button_active')
    } else {
      y.classList.remove('portfolio__button_active')
    }
  })
}

const imgSrcChng = (folderName) => {
  portImages.forEach((x, i) => {
    x.src = `./assets/images/portfolio/${folderName.toLowerCase()}/${i + 1}.jpg`
  })
}


let hamburgerBtn = document.querySelector('.hamburger');
let adaptMenu = document.querySelector('.menu__adaptive_cont');
let adaptMenuLink = document.querySelectorAll('.menu__adaptive .menu__list_item a');
let videoImg = document.querySelector('.video__video_player_img');


hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('is-active');
  if (hamburgerBtn.classList.contains('is-active')) {
    hamburgerBtn.style.position = 'fixed';

  } else {
    hamburgerBtn.style.position = 'static';
  }
})
hamburgerBtn.addEventListener('click', () => {
  adaptMenu.classList.toggle('menu__open');
})

adaptMenuLink.forEach(x => {
  x.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    adaptMenu.classList.toggle('menu__open');
    if (hamburgerBtn.classList.contains('is-active')) {
      hamburgerBtn.style.position = 'fixed';

    } else {
      hamburgerBtn.style.position = 'static';
    }
  });
})

let picChanger = setInterval(() => {
  if (+window.innerWidth <= 768) {
    videoImg.src = './assets/images/video/video_img_768.jpg'
  } else {
    videoImg.src = './assets/images/video/video_img.jpg'
  }
  console.log(+window.innerWidth);
}, 425);