import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BookResponseInterface } from '../../interfaces/book-response.interface';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private bookService = inject(BooksService);
  public isLoading: boolean = false;
  public books: BookResponseInterface[] = [];
  public showError: boolean = false;

  constructor() {
    this.getBooks();
  }

  public getBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe((value) => {
      console.log(value);
      this.books = value;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
      this.showError = true;
    })
  }
}
