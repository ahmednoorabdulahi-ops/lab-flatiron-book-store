const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!


// Bookstore information
const bookStore = {
    name: "Flatbooks Bookstore",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg"
        },
        {
            title: "1984",
            author: "George Orwell",
            image: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg"
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            image: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg"
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            image: "https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg"
        }
    ]
};

// 1. Update the bookstore title
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// 2. Select the book list
// 1. Select the header and update the bookstore name
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// 2. Select the book list
const bookList = document.getElementById("book-list");

// 3. Loop through every book in the bookstore
bookStore.books.forEach((book) => {

    // Create the book container
    const bookContainer = document.createElement("li");

    // Create and update the book title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    // Create and update the book author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    // Create and update the book image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // Append title, author, and image to the container
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // Append the container to the book list
    bookList.append(bookContainer);
});

// 4. Bonus challenge: Remove the example book
const exampleBook = document.getElementById("delete-this");

if (exampleBook) {
    exampleBook.remove();
}

