import { Component, input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  movie = input.required<Movie>()

  get movieImage(){
    return 'assets/movies/' + this.movie().image;
  }
}
