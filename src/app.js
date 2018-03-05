class App {
	constructor() {
		this.theatreId = 2;
		this.theatreUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/' + this.theatreId;
		this.showingsList = document.getElementById('ui cards showings');
		this.buyTicketButtons = document.getElementsByClassName('ui blue button');
		this.fetchMovies();
		this.addEventListeners();
	}

	fetchMovies() {
		fetch(this.theatreUrl)
			.then(res => res.json())
			.then(json => {
				for (let m of json.showings) {
					let movie = new Movie(m);
					let movieRender = movie.render();
					this.showingsList.innerHTML += movieRender;
				}
			})
	}


	addEventListeners() {
		for (let i = 0; i < this.buyTicketButtons.length; i++) {
			buyTicketButtons[i].addEventListener('click', event => {
				let movieId = event.target.dataset.id;

				let toPost = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accepts': 'application/json'
					},
					body: JSON.stringify({
						showing_id: movieId
					})
				}

				fetch('https://evening-plateau-54365.herokuapp.com/tickets', toPost)
					.then(res => res.json())
					.then(json => console.log(json))
					.then(() => {
						this.showingsList.innerHTML = '';
						this.fetchMovies();
					})
			})
		}
	}
}