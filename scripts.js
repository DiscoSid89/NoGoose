const testing = document.getElementById("testing");

const options = {
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTM4NzJhYzY2OWYwODkyZDliMWJkYmQ4YjUyM2RmOCIsIm5iZiI6MTc0MDAwMzY3OS41MDcsInN1YiI6IjY3YjY1OTVmMGRkMjJlYzc5YzNhZWJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oucEnlupCiTF29zDYKb8GugSrnaFZ-X5q6jI0Cq2e6Q",
	},
};

async function test() {
	try {
		const res = await axios.get("https://api.themoviedb.org/3/authentication", options);
		console.log("res", res);
	} catch (err) {
		console.error(err);
	}
}

async function test2() {
	const params = {
		include_adult: "false",
		include_video: "false",
		language: "en-US",
		page: "1",
		sort_by: "popularity.desc",
	};

	try {
		const res = await axios.get("https://api.themoviedb.org/3/discover/movie", { ...options, params });
		console.log(res);
		testing.textContent = JSON.stringify(res.data.results);
		return res;
	} catch (err) {
		console.error(err);
	}
}

test2();
