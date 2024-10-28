import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Book {
  isbn: string;
  name: string;
  author: string;
  publication: string;
  qty: number;
  price: number;
  branch: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksSource = new BehaviorSubject<Book[]>([]);
  currentBooks = this.booksSource.asObservable();

  constructor() {}

  addBook(book: Book) {
    const currentBooks = this.booksSource.value;
    this.booksSource.next([...currentBooks, book]);
  }

  deleteBook(book: Book) {
    const currentBooks = this.booksSource.value;
    this.booksSource.next(currentBooks.filter(b => b !== book));
  }
}
