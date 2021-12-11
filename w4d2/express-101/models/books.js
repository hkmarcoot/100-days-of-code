import books from "../books-data.js"

export function findBookByID(id) {
    return books.find(function (book) {
        return book.id === id;
    });
}

export function getBooks() {
    return books;
}