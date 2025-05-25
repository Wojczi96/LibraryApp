import { Component, output } from '@angular/core';
import { Type } from '../models/typeEnum.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  movieClicker = output<Type>();
  bookClicker = output<Type>();
  typeBookList: Type = Type.Book;
  typeMovieList: Type = Type.Movie;

  movieButton(){
    this.movieClicker.emit(this.typeMovieList);
  }
  bookButton(){
    this.bookClicker.emit(this.typeBookList);
  }
}
