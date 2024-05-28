"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = true;
    }
    getIdBook() {
        return this.id;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = true;
    }
    getId() {
        return this.id;
    }
    borrowBook(id, date) {
        if (this.books.length === 0) {
            let index = Library1.books.findIndex(item => item.getIdBook() === id);
            if (index !== -1) {
                if (Library1.books[index].stock !== 0 || Library1.books[index].status !== false) {
                    Library1.books[index].stock -= 1;
                    let lendedBook0 = new LendedBook(this.id, id, date);
                    this.books.push(lendedBook0);
                }
                else {
                    console.log("Không thể mượn sách.");
                }
            }
            else {
                console.log("Không tìm tháy sách");
            }
        }
        else {
            console.log("Phải trả sách trước thì bạn mới có thể mượn tiếp!");
        }
    }
    returnBook(id) {
        let index = this.books.findIndex(item => item.bookId === id);
        if (index !== -1) {
            Library1.books[index].stock += 1;
            this.books.splice(index, 1);
        }
        else {
            console.log("khách hàng hông mượn cuốn sách này");
        }
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((item) => {
            console.log(item);
        });
    }
    registerMember(id, name, contact, status) {
        let newMember = new Member(id, name, contact, status);
        this.members.push(newMember);
    }
    blockMember(id, status) {
        let index = this.members.findIndex(item => item.getId() === id);
        if (index !== -1) {
            this.members[index].status = status;
        }
        else {
            console.log("Không tìm thấy thành viên");
        }
    }
    showMembers() {
        this.members.forEach((item) => {
            console.log(item);
        });
    }
}
let Library1 = new Library();
let book1 = new Book(1, "Không Gia Đình", "Hector Malot", 2, true);
let book2 = new Book(2, "Ông Già Và Biển Cả", "Ernest Hemingway", 4, true);
let book3 = new Book(3, "Âm Thanh Và Cuồng Nộ", "William Faulkner", 3, true);
let book4 = new Book(4, "Thép Đã Tôi Thế Đấy", "Nikolai Ostrovsky", 5, true);
let book5 = new Book(5, "Nhà Giả Kim", "Paulo Coelho", 1, true);
Library1.addBook(book1);
Library1.addBook(book2);
Library1.addBook(book3);
Library1.addBook(book4);
Library1.addBook(book5);
Library1.showBooks();
Library1.registerMember(1, "Nghĩa", "0345473042", true);
Library1.blockMember(1, false);
Library1.showMembers();
