import { MovieApi } from "./movieApi.js";

const api = new MovieApi();

const movieList = await api.getPopularMovies();
console.log(movieList);

const randomNumber = String(Math.floor(Math.random() * 20));

const chosenMovie = movieList.data.results[randomNumber];

console.log("chosenMovie", chosenMovie);



//answer
const quizAnswer = document.querySelector(".quiz__answer");
quizAnswer.textContent =`${chosenMovie.title}`;

console.log("title", chosenMovie.title);


//Synopsis
const synopsis = document.querySelector(".synopsis-gen");
synopsis.textContent = `"${chosenMovie.overview}"`;

console.log("overview", chosenMovie.overview);


//backdrop image
const moviePoster = api.getMoviePoster(chosenMovie.backdrop_path);

const image = document.querySelector(".hint__background-image");

image.src = moviePoster;
// console.log(moviePoster);

// // ----------- genre ----------- //

const movieGenre = chosenMovie.genre_ids;

const genreList = await api.getMovieGenres();

const actualMovieGenre = api.parseGenre(genreList, movieGenre[0]);

console.log("actualMovieGenre", actualMovieGenre);

const realMovieGenre = document.querySelector(".hint__genre");
realMovieGenre.textContent = `${actualMovieGenre}`;


// // ------------year----------------- //

const movieReleaseDate = chosenMovie.release_date;

console.log("movieReleaseDate", movieReleaseDate);

const yearHint = document.querySelector(".hint__year");

yearHint.textContent =`${movieReleaseDate}`;
