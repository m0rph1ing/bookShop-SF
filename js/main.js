import { categories } from './categories.js';
import { renderBooks } from './renderBooks.js';
import { stopSlider, startSlider } from './slider.js';
import { logo } from './header.js';
import { loadMoreBtn } from './loadMoreBtn.js';


// Ваш код для обработки событий и дополнительных действий
let currentCategory = "architecture";

loadMoreBtn.currentCategory = currentCategory;
 // Вызов функции для отображения книг по выбранной категории
 renderBooks();