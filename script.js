
// SLIDER(S)


const createInfinitySlider = ({
  sliderSelector,
  leftBtnSelector,
  rightBtnSelector,
  slideClass,
  animationTime = 0.5
}) => {
  const slider = document.querySelector(sliderSelector);
  const leftBtn = document.querySelector(leftBtnSelector);
  const rightBtn = document.querySelector(rightBtnSelector);
  const slides = [...slider.querySelectorAll(`.${slideClass}`)];
  let currentIndex = 0;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstElementChild);

  const getSlideWidth = () => slider.firstElementChild.offsetWidth;

  const setTranslate = (index, transition = true) => {
    slider.style.transition = transition ? `translate ${animationTime}s ease-in-out` : 'none';
    slider.style.translate = `-${getSlideWidth() * (index + 1)}px`;
  };

  const goToNextSlide = () => {
    currentIndex++;
    setTranslate(currentIndex);

    slider.addEventListener('transitionend', () => {
      if (currentIndex >= slides.length) {
        currentIndex = 0;
        setTranslate(currentIndex, false);
      }
    }, { once: true });
  };

  const goToPrevSlide = () => {
    currentIndex--;
    setTranslate(currentIndex);

    slider.addEventListener('transitionend', () => {
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
        setTranslate(currentIndex, false);
      }
    }, { once: true });
  };

  rightBtn.addEventListener('click', goToNextSlide);
  leftBtn.addEventListener('click', goToPrevSlide);

  const initSlider = () => setTranslate(currentIndex, false);
  initSlider();
  window.addEventListener('resize', initSlider);

};

createInfinitySlider({
  sliderSelector: '#slider',
  leftBtnSelector: '#side-left',
  rightBtnSelector: '#side-right',
  slideClass: 'slider-item'
});

// массив сладера с отзывами

const reviews = [
  {
    text: 'Татьяна Владимировна великолепный специалист! За три месяца до ЕГЭ сын писал пробники по русскому языку на 65, 70 баллов. Пробелов было достаточно, с сочинением было совсем все плохо. Татьяна Владимировна за такой короткий срок сделала невозможное!!! По ЕГЭ сын получил 86 баллов! Сочинение 20 из 21! Я очень благодарна Татьяне Владимировне! Однозначно рекомендую!',
    name: 'Анна',
  },

  {
    text: 'Спасибо за знания в английском языке! Лёне очень нравится. Я вообще в шоке, как он с лёгкостью переводит и строит фразы! На урок бежит с удовольствием! Домашнюю работу выполняет самостоятельно, за помощью ко мне не обращается, что очень радует! Рекомендую Александру Юрьевну как педагога и человека!',
    name: 'Алина',
  },

  {
    text: 'Очень благодарны Татьяне Владимировне за занятия! Получили 98 баллов на ЕГЭ по русскому языку. Дочь училась в школе на 4-5, но таких результатов мы даже не ждали! Очень довольны! Хотелось бы отметить, что Татьяна Владимировна заранее составила четкий план занятий и за один учебный год смогла обучить всему, что было необходимо для экзамена. Максимум информации за минимум времени.',
    name: 'Татьяна',
  },

  {
    text: 'Мы очень довольны занятиями с Даниилом Константиновичем! Виден прогресс, и сам Стёпа с удовольствием занимается. Радуется, когда преподаватель его хвалит. И друг Степана по нашей рекомендации также занимается в вашей школе!',
    name: 'Лариса',
  },

  {
    text: 'Хочу выразить свою искреннюю благодарность Даниилу Константиновичу за вклад в образование моего ребенка! Он не только прививает детям знания по математике, но вдохновляет их на достижение новых высот! Марк сдал тестирование по математике на «отлично»! Вошёл в шестерку лучших учеников! И мы попадаем в математический класс. Спасибо, что Вы, Даниил Константинович, делаете мир математики понятным и доступным! Процветания Вам и профессиональных успехов!',
    name: 'Екатерина',
  },

  {
    text: 'Даниил Валерьевич прекрасный специалист в области спектроскопии. Досконально разобрали все задания. Мне доходчиво и простыми словами объяснял и учил как расшифровывать ямр-спектры, также оперативно отвечал на мои дополнительные вопросы.',
    name: 'Алина',
  },

  {
    text: 'Огромная благодарность и низкий поклон в ноги Александре Юрьевне за её невероятный труд! Изучать языки с таким преподавателем – это постоянное удовольствие! Также отмечу её личностные качества, ее умение мотивировать и терпение. Спасибо Вам за наших детей!',
    name: 'Светлана',
  },

  {
    text: 'Сегодня получили результаты ЕГЭ сына по русскому языку и профильной математике: 97 и 90 баллов соответственно. Особая признательность Татьяне Владимировне, потрясающему учителю русского языка! Даниилу Валерьевичу также огромная благодарность за столь высокий результат!',
    name: 'Надежда',
  }
];

// отрисовка

const renderReviews = (reviewsList, reviewsSelector = '.reviews') => {
  const reviewsBlock = document.querySelector(reviewsSelector);

  if(!reviewsBlock) {
    return;
  };

  reviewsBlock.innerHTML = '';

  reviewsList.forEach(e => {

    const review = document.createElement('div');
    review.className = 'review-item';

    const reviewText = document.createElement('div');
    reviewText.className = 'review-item-text';
    reviewText.textContent = e.text;

    const reviewName = document.createElement('div');
    reviewName.className = 'review-item-name';
    reviewName.textContent = e.name;

    review.append(reviewText, reviewName);
    reviewsBlock.appendChild(review);
  });
};

renderReviews(reviews, '.reviews');

createInfinitySlider({
  sliderSelector: '#reviews',
  leftBtnSelector: '#left-btn',
  rightBtnSelector: '#right-btn',
  slideClass: 'review-item'
});



// МЕНЮ УСЛУГ

document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.main-item-btn');
  const menus = document.querySelectorAll('.main-item-menu');

  const setActive = (index) => {
    btns.forEach(btn => btn.classList.remove('active'));
    menus.forEach(menu => menu.classList.add('hidden'));

    btns[index].classList.add('active');
    menus[index].classList.remove('hidden');
  };

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => setActive(index))
  });

  setActive(0);
});


// ЗАПОЛНЕНИЕ PRICE LIST

// огэ / егэ

const priceListExamens = {
  group: [
    {
      title: 'Абонемент на месяц',
      subject: '1',
      lessons: '8',
      price: '9 600',
    },
    {
      title: 'Абонемент на месяц',
      subject: '2',
      lessons: '16',
      price: '19 200',
    },
    {
      title: 'Абонемент на месяц',
      subject: '3',
      lessons: '24',
      price: '28 800',
    }
  ],

  individual: [
    {
      subject: '1',
      time: '60',
      price: '2 300',
    },
    {
      title: 'Абонемент на месяц',
      subject: '1',
      lessons: '8',
      price: '16 000',
    },
    {
      title: 'Абонемент на месяц',
      subject: '2',
      lessons: '16',
      price: '32 000',
    },
    {
      title: 'Абонемент на месяц',
      subject: '3',
      lessons: '24',
      price: '48 000',
    }
  ]
};

// 1 - 4 класс, 5 - 11 класс

const priceListJuniorMiddle = {
  group: [
    {
      title: 'Абонимент на месяц',
      subject: '1',
      lessons: '8',
      price: '8 000',
    },
    {
      title: 'Абонимент на месяц',
      subject: '2',
      lessons: '16',
      price: '16 000',
    },
    {
      title: 'Абонимент на месяц',
      subject: '3',
      lessons: '24',
      price: '24 000',
    },
  ],

  individual: [
    {
      title: '',
      subject: '1',
      time: '45',
      price: '1 800',
    },
    {
      title: 'Абонимент на месяц',
      subject: '1',
      lessons: '8',
      price: '12 000',
    },
    {
      title: 'Абонимент на месяц',
      subject: '2',
      lessons: '16',
      price: '24 000',
    },
    {
      title: 'Абонимент на месяц',
      subject: '3',
      lessons: '24',
      price: '48 000',
    },
  ]
};

// загрузка данных из массива

const renderPriceList = (data, container) => {
  if (!container) {
    return;
  };

  container.innerHTML = '';

  data.forEach(item => {

    const contentBlock = document.createElement('div');
    contentBlock.className = 'price-list-card-item-content-block-container';

    const innerBlock = document.createElement('div');
    innerBlock.className = 'price-list-card-item-content-block';

    const title = document.createElement('div');
    title.className = 'price-list-card-item-content-block-title';
    if(item.title) {
      title.textContent = `${item.title} - ${item.subject} предмет(а)`
    } else {
      title.textContent = `${item.subject} предмет(а)`
    };

    const subtitle = document.createElement('div');
    subtitle.className = 'price-list-card-item-content-block-subtitle';
    if(item.lessons) {
      subtitle.textContent = `${item.lessons} занятий`
    } else {
      subtitle.textContent = `${item.time} мин`
    };

    const price = document.createElement('div');
    price.className = 'price-list-card-content-item-info';
    price.textContent = item.price;

    innerBlock.append(title, subtitle);
    contentBlock.append(innerBlock, price);

    container.appendChild(contentBlock);
  });
};


// ОБРАБОТКА КНОПОК

// массив кнопок

const priceBtns = [
  {
    btnId: 'price-btn-one',
    menuId: 'price-content-one',
    dataSource: priceListExamens,
    type: 'group'
  },
  {
    btnId: 'price-btn-two',
    menuId: 'price-content-two',
    dataSource: priceListExamens,
    type: 'individual'
  },

  {
    btnId: 'price-btn-three',
    menuId: 'price-content-three',
    dataSource: priceListJuniorMiddle,
    type: 'group'
  },
  {
    btnId: 'price-btn-four',
    menuId: 'price-content-four',
    dataSource: priceListJuniorMiddle,
    type: 'individual'
  },

  {
    btnId: 'price-btn-five',
    menuId: 'price-content-five',
    dataSource: priceListJuniorMiddle,
    type: 'group'
  },
  {
    btnId: 'price-btn-six',
    menuId: 'price-content-six',
    dataSource: priceListJuniorMiddle,
    type: 'individual'
  }
];

// функция обработки кнопока

const setUpPriceBtn = (btnId, menuId, dataSource, type) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);

  if(!btn || !menu) {
    return;
  };

  btn.addEventListener('click', () => {
    const data = dataSource[type];

    if(!data || !Array.isArray(data)) {
      return;
    };

    document.querySelectorAll('.price-list-card-item-content').forEach(el => {
      if (el.id !== menuId) {
        el.classList.add('hidden');
      }
    });

    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      return;
    };

    menu.classList.remove('hidden');
    menu.innerHTML = '';
    renderPriceList(data, menu);

  });
};

// обработка кнопок

priceBtns.forEach(item => {
  setUpPriceBtn(item.btnId, item.menuId, item.dataSource, item.type);
});









