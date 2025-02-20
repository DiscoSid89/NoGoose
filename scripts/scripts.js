import { MovieApi } from "./movieApi.js";

const api = new MovieApi();
let counter = 0;

const movieList = await api.getPopularMovies();
console.log(movieList);

const randomNumber = String(Math.floor(Math.random() * 20));

const chosenMovie = movieList.data.results[randomNumber];

console.log("chosenMovie", chosenMovie);

//answer
const quizAnswer = document.querySelector(".quiz__answer");
const modalTitle = document.querySelector(".main__win-content-title");
quizAnswer.textContent = `${chosenMovie.title}`;
modalTitle.textContent = `${chosenMovie.title}`;

console.log("title", chosenMovie.title);

//Synopsis
const synopsis = document.querySelector(".synopsis-gen");
synopsis.textContent = `"${chosenMovie.overview}"`;

console.log("overview", chosenMovie.overview);

//backdrop image
const moviePoster = api.getMoviePoster(chosenMovie.backdrop_path);
const RealMoviePoster = api.getMoviePoster(chosenMovie.poster_path);

const image = document.querySelectorAll(".hint__background-image");

image[0].src = RealMoviePoster;
image[1].src = moviePoster;

// console.log(moviePoster);

// // ----------- genre ----------- //

const movieGenre = chosenMovie.genre_ids;

const genreList = await api.getMovieGenres();

const actualMovieGenre = api.parseGenre(genreList, movieGenre[0]);

console.log("actualMovieGenre", actualMovieGenre);

const realMovieGenre = document.querySelectorAll(".hint__genre");

realMovieGenre.forEach((labelElement) => {
	labelElement.textContent = `${actualMovieGenre}`;
});

// // ------------year----------------- //

const movieReleaseDate = chosenMovie.release_date;

console.log("movieReleaseDate", movieReleaseDate);

const yearHint = document.querySelectorAll(".hint__year");

yearHint.forEach((yearElement) => {
	yearElement.textContent = `${movieReleaseDate}`;
});

function showModal(value, result) {
	const modal = document.querySelector(".main__win-alert");
	const modalLabels = document.querySelectorAll(".main__content-image-label");
	const modalBackground = document.querySelector(".main__win-content");

	if (value === true) {
		modal.classList.remove("main__win-alert--hide");

		modalLabels.forEach((label) => {
			label.textContent = result ? "You win at the Oscars!" : "Your goose is cooked!";
		});

		modalBackground.classList.add("main__win-content--win");
	} else {
		modal.classList.add("main__win-alert--hide");
		modalBackground.classList.add("main__win-content--lose");
	}
}

function winGame() {
	realMovieGenre[1].classList.remove("hint__genre--hidden");
	yearHint[1].classList.remove("hint__year--hidden");
	image[1].classList.remove("hint__background-image--hidden");
	quizAnswer.classList.remove("quiz__answer--hidden");
	image[1].src = RealMoviePoster;
	showModal(true, true);
}

document.addEventListener("submit", (e) => {
	e.preventDefault();

	const answer = e.target.inputGuess.value.toLowerCase();

	if (answer === chosenMovie.title.toLowerCase()) {
		winGame();
	} else {
		counter++;

		switch (counter) {
			case 1:
				realMovieGenre[1].classList.remove("hint__genre--hidden");
				break;
			case 2:
				yearHint[1].classList.remove("hint__year--hidden");
				break;
			case 3:
				image[1].classList.remove("hint__background-image--hidden");
				break;
			case 4:
				quizAnswer.classList.remove("quiz__answer--hidden");
				image[1].src = RealMoviePoster;
				showModal(true, false);
			default:
				break;
		}
	}

	e.target.reset();
});

// alert(`hello!`);
