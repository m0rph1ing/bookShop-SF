const entities = [
    { 
      img: '../assets/bg/banner.png',
      dot: document.querySelector('.dot-one'),
    },
    {
      img: '../assets/bg/banner2.png',
      dot: document.querySelector('.dot-two'),
   },
   {
      img: '../assets/bg/banner3.png',
      dot: document.querySelector('.dot-three'),
    }
]

const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider__btn-dot')

const setPhoto = (index) => {
	slider.style.backgroundImage = `url(${entities[index].img})`;
}
const makeActive = (index) => {
	entities[index].dot.style.opacity = 1;
}
const makeNotActive = (index) => {
	entities[index].dot.style.opacity = 0.3;
}
const pressOnElement = (index) => {
	makeNotActive(currentIndex);
	currentIndex = index;
	setPhoto(currentIndex);
	makeActive(currentIndex);
}
let currentIndex = 0;
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      makeNotActive(currentIndex);
      setPhoto(index);
      makeActive(index);
      currentIndex = index;
    });
  });
for (let i = 0; i <= entities.length - 1; i++) {
	entities[i].dot.addEventListener('click', () => {
		pressOnElement(i);
	});
}
let intervalId = setInterval(() => {
    makeNotActive(currentIndex);
    if (currentIndex === entities.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setPhoto(currentIndex);
    makeActive(currentIndex);
  }, 5000);

 // Функция для остановки и запуска автоматического обновления слайдов
  const stopSlider = () => {
    clearInterval(intervalId); // остановка автоматического обновления
  };
  const startSlider = () => {
    intervalId = setInterval(() => {
      makeNotActive(currentIndex);
      if (currentIndex === entities.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      setPhoto(currentIndex);
      makeActive(currentIndex);
    }, 5000);
  };
  
  // Слушатель события при наведении мыши на слайдер
  slider.addEventListener('mouseover', stopSlider);
  
  // Слушатель события при уходе мыши со слайдера
  slider.addEventListener('mouseout', startSlider);

  export {startSlider, stopSlider};