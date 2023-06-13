const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const entities = [
  {
    img: '../SliderJS/images/image1.jpg',
    dot: document.querySelector('.circle_nav1'),
    line: document.querySelector('.projects_menu1'),
    city_: 'Rostov-on-Don LCD admiral',
    area_: '81 m2',
    time_: '3.5 months'
  },
  {
    img: '../SliderJS/images/image2.jpg',
    dot: document.querySelector('.circle_nav2'),
    line: document.querySelector('.projects_menu2'),
    city_: 'Sochi Thieves',
    area_: '105 m2',
    time_: '4 months'
  },
  {
    img: '../SliderJS/images/image3.jpg',
    dot: document.querySelector('.circle_nav3'),
    line: document.querySelector('.projects_menu3'),
    city_: 'Rostov-on-Don Patriotic',
    area_: '93 m2',
    time_: '3 months'
  }
]
//Обязательный блок
const slider = document.querySelector('.slider_img');


//БЛОК С ФУНКЦИЯМИ
//1.Поменять картинку
const setEntity = (index) => {
  slider.style.backgroundImage = `url(${entities[index].img})`;
}

//2.Неактивные -> активные элементы
const makeActive = (index) => {
  entities[index].dot.style.opacity = 1;
  entities[index].line.classList.add('brown-hypertext');
}

//3.Активные -> неактивные элементы
const makeInactive = (index) => {
  entities[index].dot.style.opacity = 0.3;
  entities[index].line.classList.remove('brown-hypertext');
}

//4.Смена текстового содержимого
const changeTextContent = (index) => {
  document.querySelector('.city_').textContent = entities[index].city_;
  document.querySelector('.area_').textContent = entities[index].area_;
  document.querySelector('.time_').textContent = entities[index].time_;
}

//5.Переключение нажатием на точку/заголовок
const pressOnElement = (index) => {
  makeInactive(currentIndex);
  changeTextContent(index);
  currentIndex = index;
  setEntity(currentIndex);
  makeActive(currentIndex);
}


//ОБРАБОТКА НАЖАТИЙ:
//0.Настройка на нулевой элемент
let currentIndex = 0;

//1.Левая стрелка
arrowLeft.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == 0) {
    currentIndex = entities.length - 1;
  } else {
    currentIndex -= 1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//2.Правая стрелка
arrowRight.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == entities.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//3.Точка и Заголовок
for (let i = 0; i <= entities.length - 1; i++) {
  entities[i].dot.addEventListener('click', () => {
    pressOnElement(i);
  });
  entities[i].line.addEventListener('click', () => {
    pressOnElement(i);
  });
}