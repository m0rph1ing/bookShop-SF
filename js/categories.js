import { loadBooksByCategory } from './loadBooks.js';

const categories = document.querySelectorAll('.books_categories__list-items');
let currentCategory = categories[0];
currentCategory.classList.add('active');
await loadBooksByCategory(currentCategory.dataset.category);

categories.forEach(category => {
    category.addEventListener('click', async () => {
        if (!category.classList.contains('active')) { // Проверяем, что выбрана не текущая активная категория
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            currentCategory = category; // Обновляем выбранную категорию
            await loadBooksByCategory(category.dataset.category);
        }
    });
});

export {categories};