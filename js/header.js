
const logo = document.querySelector('.header-logo');
logo.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // добавляем параметр behavior: 'smooth' для плавной прокрутки
  });
});

export {logo};
