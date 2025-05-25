import { Component, input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  book = input.required<Book>();

  get imageBook(){
    return 'assets/books/' + this.book().image;
  }
}
