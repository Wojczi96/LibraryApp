import { Component, input } from '@angular/core';
import { Book } from '../models/book.model';
import { BookComponent } from "./book/book.component";
import { Type } from '../models/typeEnum.enum';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books = [
    {
      title: "The Lord of the Rings: Fellowship of Ring",
      author: "J.R.R Tolkien",
      year: 2001,
      image: 'fellowship.jpeg',
      rate: 5,
      type: Type.Book
    },
    {
      title: "Harry potter and Filosopher Stone",
      author: "J.K Rowling",
      year: 2001,
      image: 'stone.jpeg',
      rate: 3,
      type: Type.Book
    }
  ]
}
