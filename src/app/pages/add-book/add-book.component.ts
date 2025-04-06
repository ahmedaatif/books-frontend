import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {


  private bookService = inject(BooksService);

  isLoading: boolean = false;

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    author: new FormControl<string>('', [Validators.required]),
    genre: new FormControl<string>('', [Validators.required]),
    publicationYear: new FormControl<number>(new Date().getFullYear(), [Validators.required]),
  });

  submitForm(): void {
    console.log(this.form.getRawValue());

    if (this.form.invalid) return;

    console.log(this.form.getRawValue());

    this.bookService.addBook({
      title: this.form.get('title')?.value as string,
      author: this.form.get('author')?.value as string,
      genre: this.form.get('genre')?.value as string,
      publicationYear: this.form.get('publicationYear')?.value as number,
    }).subscribe();

  }



}
