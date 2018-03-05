// I was almost done refactoring code, and had a small bug, so instead I re-pasted the functional smelly code instead below since I ran out fo time


// document.addEventListener('DOMContentLoaded', () => {
// 	console.log("DOM loaded");
// 	let app = new App();
// })
//
//

const theatreId = 2;
const theatreUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/' + theatreId;

const showingsList = document.getElementById('ui cards showings');
const buyTicketButtons = document.getElementsByClassName('ui blue button');

fetch(theatreUrl)
	.then(res => res.json())
	.then(json => {
		for (let m of json.showings) {
			let movieRender = renderMovie(m);
			showingsList.innerHTML += movieRender;
		}
	})
	.then(() => {
		for (let i = 0; i < buyTicketButtons.length; i++) {
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
						showingsList.innerHTML = '';
						fetch(theatreUrl)
							.then(res => res.json())
							.then(json => {
								for (let m of json.showings) {
									let movieRender = renderMovie(m);
									showingsList.innerHTML += movieRender;
								}
							})
					})
			})
		}
	})


function renderMovie(movie) {
	return `
  <div class="card">
  <div class="content">
    <div class="header">
      ${movie.film.title}
    </div>
    <div class="meta">
      ${movie.film.runtime} minutes
    </div>
    <div class="description">
      <span class="ui label">
        ${movie.showtime}
      </span>
      ${movie.capacity - movie.tickets_sold} remaining tickets
    </div>
  </div>
  <div class="extra content">
    <div class="ui blue button" data-id=${movie.id}>Buy Ticket</div>
  </div>
</div>
  `
}