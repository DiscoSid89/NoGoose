// A template for something you are making
export class MovieApi {
	constructor() {
		this.baseUrl = "https://api.themoviedb.org/3";
		this.bearerToken =
			"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTM4NzJhYzY2OWYwODkyZDliMWJkYmQ4YjUyM2RmOCIsIm5iZiI6MTc0MDAwMzY3OS41MDcsInN1YiI6IjY3YjY1OTVmMGRkMjJlYzc5YzNhZWJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oucEnlupCiTF29zDYKb8GugSrnaFZ-X5q6jI0Cq2e6Q";
		this.options = {
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${this.bearerToken}`,
			},
		};
	}

	///testing authentication
	async testAuthentication() {
		try {
			const res = await axios.get(`${this.baseUrl}/authentication`, this.options);
			return res;
		} catch (err) {
			console.error(err);
		}
	}

	//functions
	async discoverMovies() {
		const params = {
			include_adult: "false",
			include_video: "false",
			language: "en-US",
			page: "1",
			sort_by: "popularity.desc",
		};

		try {
			const res = await axios.get(`${this.baseUrl}/discover/movie`, { ...this.options, params });
			return res;
		} catch (err) {
			console.error(err);
		}
	}

	//
	async findMovieByName(name, page = 1) {
		const params = {
			query: name,
			include_adult: "false",
			language: "en-US",
			page,
			sort_by: "popularity.desc",
		};

		try {
			const res = await axios.get(`${this.baseUrl}/search/movie`, { ...this.options, params });
			// console.log(res);
			// testing.textContent = JSON.stringify(res.data.results);
			return res;
		} catch (err) {
			console.error(err);
		}
	}

	getMoviePoster(imgUrl) {
		return `https://image.tmdb.org/t/p/original${imgUrl}`;
	}
}
