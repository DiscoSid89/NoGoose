import { MovieApi } from "./movieApi.js";

const testing = document.getElementById("testing");

const test = new MovieApi();

const something = await test.discoverMovies();
console.log(something);
