import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { Type } from './models/typeEnum.enum';
import { BooksComponent } from "./books/books.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MoviesComponent, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onMovieListOpen = false;
  onBookListOpen = false;
  isOpen(event: Type){
    console.log(event)
    if(event === Type.Movie){
      this.onMovieListOpen = true;
      this.onBookListOpen = false;
    } else if (event === Type.Book){
      this.onBookListOpen = true;
      this.onMovieListOpen = false;
    }
  }
}
