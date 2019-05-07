// console.log("Hello from src/index.js!");
const results = document.querySelector("#results");

const searchMovies = (keyword) => {
  const apiURL = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(apiURL)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li>
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};

const searchForm = document.querySelector('#search-movies');

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = '';
  const keyword = document.querySelector("#keyword").value;
  searchMovies(keyword);
});

searchMovies("blade runner");
