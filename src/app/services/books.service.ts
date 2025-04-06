import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BookResponseInterface } from '../interfaces/book-response.interface';
import { Observable } from 'rxjs';
import { BookRequestInterface } from '../interfaces/book-request.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private httpClient: HttpClient = inject(HttpClient);

  public getBooks(): Observable<BookResponseInterface[]> {
    return this.httpClient.get<BookResponseInterface[]>("http://localhost:8080/books");
  }

  public addBook(book: BookRequestInterface): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/books", book);
  }
}
