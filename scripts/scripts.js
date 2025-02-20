import { MovieApi } from "./movieApi.js";

const testing = document.getElementById("testing");

const test = new MovieApi();

const something = await test.findMovieByName(`Terminator`, 2);
console.log(something);
