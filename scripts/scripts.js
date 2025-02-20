import { MovieApi } from "./movieApi.js";

const api = new MovieApi();

const movieList = await api.findMovieByName(`Terminator`, 2);

const chosenMovie = movieList.data.results[0];

const movieGenre = chosenMovie.genre_ids;

const genreList = await api.getMovieGenres();

console.log(genreList);

console.log(movieGenre[0]);

const actualMovieGenre = api.parseGenre(genreList, movieGenre[0]);

console.log(actualMovieGenre);

// const pickedThing = something.data[0];
