import { Component } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book={
  isbn: "", // Change to number or null for initialization
  name: '',
  author: '',
  publication: '',
  qty: 0,
  price: 0,
  branch: '',
  details: ''
}

  constructor(private bookService: BookService) {}

  onSubmit() {
    this.bookService.addBook(this.book);
    this.book = { isbn: '', name: '', author: '', publication: '', qty: 0, price: 0, branch: '', details: '' }; // Reset form
    }
}
