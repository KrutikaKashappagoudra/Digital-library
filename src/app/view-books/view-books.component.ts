import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.currentBooks.subscribe(books => this.books = books);
  }
}
