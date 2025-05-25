import { Component } from '@angular/core';
import { title } from 'process';
import { Type } from '../models/typeEnum.enum';
import { MovieComponent } from "../movie/movie.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movies = [
    {
    title: "The Lord of the Rings: Fellowship of Ring",
    year: 2001,
    image: 'fellowship.jpeg',
    rate: 5,
    type: Type.Movie
  },
  {
    title: "Harry potter and Filosopher Stone",
    year: 2001,
    image: 'stone.jpeg',
    rate: 3,
    type: Type.Movie
  }
]
}
