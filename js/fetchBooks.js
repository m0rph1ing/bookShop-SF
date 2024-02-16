const fetchBooks = async (category, startIndex, maxResults) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyDIT0om2d1UN9lnG7GiDuTiRneEU5Tvmv0&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`);
    const data = await response.json();
    return data.items;
  };

export { fetchBooks };
