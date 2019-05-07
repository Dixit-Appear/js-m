// console.log("Hello from src/index.js!");
import { fetchMovies, addMovieList } from './movie';

const searchForm = document.querySelector('#search-movies');

searchForm.addEventListener("submit", addMovieList);

fetchMovies("blade runner");
