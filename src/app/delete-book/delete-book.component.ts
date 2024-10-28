import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.currentBooks.subscribe(books => this.books = books);
  }

  onDelete(book: Book) {
    this.bookService.deleteBook(book);
  }
}
