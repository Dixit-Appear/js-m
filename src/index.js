// console.log("Hello from src/index.js!");
import { fetchMovies, addMovieList } from './movie';
import { initSortable } from './plugins/init_sortable';

const searchForm = document.querySelector('#search-movies');

searchForm.addEventListener("submit", addMovieList);

fetchMovies("blade runner");
initSortable();
