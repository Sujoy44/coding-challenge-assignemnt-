const books = [
    { title: "Book 1", author: "john doe", year: 2005 },
    { title: "Book 2", author: "jane smith", year: 2012 },
    { title: "Book 3", author: "mike johnson", year: 2008 },
    { title: "Book 4", author: "emily davis", year: 2015 }
  ];
  
  const filteredBooks = books.filter(book => book.year > 2010).map(book => ({
    ...book,
    author: book.author.toUpperCase()
  }));
  
  console.log(filteredBooks);