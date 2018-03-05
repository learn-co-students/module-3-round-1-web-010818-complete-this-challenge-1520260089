const theatreId = 12;
// const theatreURL = `https://evening-plateau-54365.herokuapp.com/theatres/`${theatreId}``


document.addEventListener("DOMContentLoaded", () {
	console.log("DOM Loaded")
	// let app = new App();
	// allPotentialEventTriggers();

)};

fetch(`https://evening-plateau-54365.herokuapp.com/theatres/12`)
.then(res => res.json()).then(json => callback(json))

function constructor() {
  this.showings = document.getElementsByClassName("ui cards showings")
  this.renderTotalTickets = this.renderTotalTickets.bind(this)
  this.updateTicketTotal = this.updateTicketTotal.bind(this)
  this.movies = []
  this.userId = 12
}


document.;pad


// iterate through showings, on each line access tickets sold and capacity.

//
// The number of tickets remaining for a showing can be determined by subtracting the current
// tickets_sold from the total capacity of the showing.
//
// iterate through json.
// let ticketsRemaining = capacity - tickets_sold
// let ticketsSold = x.tickets_sold
    // let capacity = x.capacity

let showings = document.getElementsByClassName("ui cards showings");

     function addNewTicket(){
    	let counter = capacity - tickets_sold
    	clickCount.tickets = counter;

    	let body = {showing_id: showingId, ticketsRemaing: tickets_sold} //maybe clicks: counter
    	let options = {
    		method: "POST",
    		headers: {
    			"Content-Type": "application/json",
    			"Accept": "application/json"
    		},
    		body: JSON.stringify(body)
    	}
    	counter--;
    	fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, options)
    	//.then(res => res.json()).then(json => addrudnessEventListener(json))
    }

    function renderTicketItems(json){
      for(let movie of json) {
        let x = json[movie].tickets_sold;
        let y = json[movie].capacity
        let totalTickets = y - x;
        this.addNewTicket(movie, totalTickets)//meant to iterate per page and add tickets total
        counter--;
      }
    }

    function rendermovies() {
      let ul = document.createElement('ul');
      let li = document.createElement('li');
      let button = document.createElement('button');
      button.innerHTML = "Buy Ticket";

      li.appendChild(ticketSector)

      ul.append(li);

      // let placeToGo = document.getElementById('')
    }

//     addTicketEventListener(){
// 	    ticketForm.addEventListener("submit", event => addNewTicket(event))
// }
//     function allEventListeners() {
//       addTicketEventListener();
//     }

function updateTicketEvent(button, showingId) {
  button.addEventListener("click", () => {
    this.buyTicket(showingId, this.userId, alert('You have purchased a remaining ticket'))
  })
}

function createTicketEvent(li) {
  li.addEventListener("click", () => {
    this.showings.innerHTML = ""
    this.renderMovieInfo(li.dataset.showingId)
  })
}

function renderMovie(movie) {
  let li = document.createElement("li")
  li.innerText = movie.film;
  li.setAttribute("data-movie-id", movie.id)
  this.movieList.append(li)
  this.updateTicketEvent(li)
}


  function renderMovieInfo(movieId) {
    // this.showing.innerHTML = ""
    // let foundMovie = this.movies.find((movie) => showings.id === movieId)
    // let descriptor = document.createElement('li');
    // descriptor.innerText = <p `${foundMovie.title}<br> ${foundMovie.runtime} minutes <br> ${foundMovie.ticketsRemaining} <br> <button type="button"> "Buy Ticket">`
    // this.showing.append(descriptor)


    let ul = document.createElement("ul")
    ul.id = "user-list"
    let movies = foundMovie.film.title;
    for (let movie of movies) {
      let li = document.createElement("li")
      li.innerText =    = <p `${foundMovie.title}<br> ${foundMovie.runtime} minutes <br> ${foundMovie.ticketsRemaining} <br> <button type="button"> "Buy Ticket">`
      li.setAttribute("data-movie-title", movie.title)
      ul.append(li)
    }
    this.showing.append(ul)
    this.updateTicketEvent(button, foundMovie.id)
    this.showPanel.append(button)
}

  createTicketEvent(li) {
    li.addEventListener("click", () => {
      this.showings.innerHTML = ""
      this.renderMovieInfo(callbackArg) //not finished
    })
  }
