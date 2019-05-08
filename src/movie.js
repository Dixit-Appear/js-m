const results = document.querySelector("#results");

const updateResults = (data) => {
  data.Search.forEach((movie) => {
    const newMovie = `<li>
      <img src="${movie.Poster}" alt="" height="120">
    </li>`;
    results.insertAdjacentHTML("beforeend", newMovie);
  });
};

const fetchMovies = (keyword) => {
  const apiURL = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(apiURL)
    .then(response => response.json())
    .then(updateResults);
};

const addMovieList = (event) => {
  event.preventDefault();
  results.innerHTML = '';
  const keyword = document.querySelector("#keyword").value;
  fetchMovies(keyword);
};

export { fetchMovies, addMovieList };
