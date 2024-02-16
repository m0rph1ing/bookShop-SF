import { bookList } from './bookList.js';
import { renderBooks } from './renderBooks.js';

let startIndex = 0;
const loadBooksByCategory = async (category) => {
    startIndex = 0; 
    bookList.innerHTML = '';
    await renderBooks(category);
};

export { loadBooksByCategory };
