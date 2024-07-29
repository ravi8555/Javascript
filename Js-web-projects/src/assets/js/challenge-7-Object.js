const books = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    price: 10.99,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    price: 12.5,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    price: 24.95,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    price: 9.99,
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    price: 15.0,
    library : [
        {title : "The Rich Dad",author: 'Gabriel García Márquez',year: 1967,},
        {title : "Rang maza Vegada",author: 'Vapu Kale',year: 1976,},
        {title : "Vapurza",author: 'Vapu Kale',year: 1970,}
    ]
  },
];


// Task -1
// console.log(books);

// Task -2
const booksTitle = books.map((book) => book.title);
// console.log(booksTitle);

const authors = []
for(let i =0; i < books.length; i++){
    authors.push(books[i].author)
}
// console.log(authors);

const filterPriceLessThan10 = books.filter((book) => book.price < 15);
const getbooksIsLeesThan10 = filterPriceLessThan10.map((item) => item.title);

// console.log(getbooksIsLeesThan10);


function bookTitleAuthorName(bookdetails){
    let stroreTitleAuthore = [];
    for(let i =0; i< bookdetails.length; i++){
        const bookname = bookdetails[i].title;
        const authoreName = bookdetails[i].author;

        stroreTitleAuthore.push(`The book Name "${bookname}" is Written by "${authoreName}" `)
    }
    return stroreTitleAuthore
}

// console.log(bookTitleAuthorName(books));

function bookTitleAndAuthorName(booksCollection){
    const mapTtileAndAuthor = booksCollection.map((item) =>{
        const formatedDeatils = `The book Name "${item.title}" is Written by "${item.author}" `;
        return formatedDeatils
    })
    return mapTtileAndAuthor
}
// console.log(bookTitleAndAuthorName(books));

// Task -3

books.forEach((book)=>{
  book.getTitleAndAuthor = function() {
    return `Title ${this.title} and ${this.author}`
  }
})
books.forEach((book)=>{
  // console.log(book.getTitleAndAuthor());
})

const book1 = {
  title: 'RAW',
  author: 'Ajit Dobhal',
  year: 1999,
  price: 10.99,
  updateYear : function(yr){
      this.year = yr
  }
}
book1.getAuthorTitle = function(){
  return this.author + this.title
}
// console.log(book1.getAuthorTitle());

// Task - 4

const book2 = {
    title: 'KAvita',
    author: 'Jane Austen',
    year: 1813,
    price: 10.99,
    updateYear : function(yr){
        this.year = yr
    }
}

book2.updateYear(2024);
// console.log(book2);

books.forEach((book)=>{
  book.updateNewYear = function(newYear){
    return this.year = newYear
  }
})

books.forEach((book)=>{
  book  .updateNewYear(2022)
  // console.log(book);
})

// Task - 5 (1)
const bookwithLibrary = books[4]; // assume index is there
if("library" in bookwithLibrary){
  const librarayBooks = bookwithLibrary.library;
  // console.log(librarayBooks);
}else{
  console.log("This book does not have a library property.");
}

// if we dont know the index
// Task - 5 (2)
let bookWithLibraray1 ;

for(let i =0; i< books.length; i++){
  const book = books[i];
  if("library" in book){
    bookWithLibraray1 = book;
    break;
  }
}

if(bookWithLibraray1){
  const librarybook = bookWithLibraray1.library;
  // console.log(librarybook);
  for(let i = 0; i< librarybook.length;i++){
    const librarayBook1 = librarybook[i]
    // console.log(librarayBook1.title);
  }

}else{
  console.log("This book does not have a library property.");
}


// Task -5 (3)
const library = {
  name :'City Library',
  books: [
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      price: 10.99,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      price: 12.5,
    },]
}
// console.log(library.books);

// Task - 6 (2)
// console.log(library.name );
for(let i =0; i < library.books.length; i++){
  const bookttl = library.books[i];
  // console.log(bookttl.title);
}
// consol e.log(library.books.title);
// Task - 7 
book1.getTitleYear = function(){
  return `${this.title} was published in ${this.year}`
} 
// console.log(book1.getTitleYear());
// Task - 7 (1)
//  Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling thi
books.forEach((book)=>{
  book.getAuthorTitle1 = function(){
    return `${this.title} was published in ${this.year}`
  }
})
books.forEach((getbook) =>{
  // console.log(getbook.getAuthorTitle1());
});

// Task -8 (1)
//  Use a for... in loop to iterate over the properties of the book object and log each property and its value.
  
library.books.forEach((book)=>{
  for(let property in book){
    // console.log(`${property}: ${book[property]}`);
  }
})

// Task -8 (2)

for(let i =0 ; i< books.length; i++){
  const book = books[i]

  for(let property in book ){
    // console.log(`${property}: ${book[property]}`);
  }
}

// Task -9 (1)
// Use Object. keys and Object. values methods to log all the keys and values of the book object.
library.books.forEach((bk) =>{
  console.log(`OBJ KEY ${Object.keys(bk)} : OBJ Value : ${Object.values(bk)}`);
})

// Task -9 (2)
// find values
// for(let i = 0 ; i< books.length; i++){
//   const book = books[i];
//   const booksValue = Object.values(book);

//   console.log("Book"  + (i + 1) + "Values");
//   console.log(booksValue);

// }
// // find keys
// for(let i =0 ; i <books.length;i++){
//   const book = books[i];

//   const booksKey = Object.keys(book);
//   console.log("Book" +(i+1)+ "Keys");
//   console.log(booksKey);
// }

// for(let i =0 ; i <books.length;i++){
//   const book = books[i];

//   const booksKey = Object.keys(book);
//   const booksValue = Object.values(book);
//   console.log("Book"  + (i + 1) );
//   console.log(`Book Key ${booksKey} of Value ${booksValue}`);
// }
