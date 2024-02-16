import { fetchBooks } from './fetchBooks.js';
import { bookList } from './bookList.js';
import { loadMoreBtn } from './loadMoreBtn.js';
import { buyButtons } from './buyBtn.js';

let startIndex = 0;
let maxResults = 6;
let currentCategory = "";

const renderBooks = async (category) => {
    const books = await fetchBooks(category, startIndex, maxResults);
      if(books){
        books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.classList.add('book-card');
          let description = 'No description available';
          if (book.volumeInfo.description) {
            if (book.volumeInfo.description.length > 100) {
              description = book.volumeInfo.description.substring(0, 100) + '...';
            } else {
              description = book.volumeInfo.description;
            }
          }
          let authors = 'Unknown author';
          if (book.volumeInfo.authors) {
            authors = book.volumeInfo.authors.join(', ');
          }
          let ratingStars = '';
          if (book.volumeInfo.averageRating) {
            const rating = book.volumeInfo.averageRating;
            const ratingsCount = book.volumeInfo.ratingsCount || 0;
            for (let i = 0; i < 5; i++) {
              if (i < rating) {
                ratingStars += '<img src="../assets/stars/full-star.svg" alt="filled star">'; // Звездочка для заполненной звезды
              } else {
                ratingStars += '<img src="../assets/stars/empty-star.svg" alt="empty star">'; // Пустая звезда для незаполненной звезды
              }
            }
            ratingStars +=  (`${ratingsCount} review`); // Добавляем количество голосов после звездочек
          } else {
            for (let i = 1; i <= 5; i++) {
              ratingStars += '<img src="../assets/stars/empty-star.svg" alt="empty star">'; // Пустая звезда
            }
            ratingStars += ' 0 reviews';
          }
          let price = 'Not available';
          if (book.saleInfo.retailPrice) {
            price = book.saleInfo.retailPrice.amount + ' ' + book.saleInfo.retailPrice.currencyCode;
          }
          bookCard.innerHTML = 
            `<div class="book_card-style">
            <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'placeholder.jpg'}" class="ff" alt="Book Cover">
            <div class="book_card-components">
            <p class="book-authors">${authors}</p>
            <p class="book-title">${book.volumeInfo.title}</p>
            <p class="book-rating">${ratingStars}</p>
            <p class="book-description">${description}</p>
            <p class="book-price">${price}</p>
            <button class="book-buynow" data-id="1">Buy now</button> 
            </div>
            </div>
            `
          bookList.appendChild(bookCard);

          let buyButton = bookCard.querySelector('.book-buynow'); // Объявляем buyButton здесь
            buyButton.addEventListener('click', function() {
                const bookId = this.getAttribute('data-id');
                const bookCard = this.closest('.book_card-style');
                
                if (localStorage.getItem(`book_${bookId}`)) {
                    localStorage.removeItem(`book_${bookId}`);
                    this.innerText = 'Buy now';
                    bookCard.classList.remove('in-cart');
                } else {
                    localStorage.setItem(`book_${bookId}`, JSON.stringify({ title: bookCard.querySelector('.book-title').innerText }))
                    this.innerText = 'In the cart';
                    bookCard.classList.add('in-cart');
                }
            });
        });
      }  
  };
 
  window.addEventListener('load', () => {
    const allBooks = document.querySelectorAll('.book_card-style');
    allBooks.forEach(bookCard => {
        const buyButton = bookCard.querySelector('.book-buynow');
        if (localStorage.getItem(`book_${buyButton.getAttribute('data-id')}`)) {
            buyButton.innerText = 'In the cart';
            bookCard.classList.add('in-cart');
        }
    });
});

  loadMoreBtn.addEventListener('click', async () => {
    startIndex += maxResults;
    await renderBooks(currentCategory);
  });
export {renderBooks};