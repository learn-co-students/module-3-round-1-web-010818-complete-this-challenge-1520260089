class App {
  constructor(){
    this.movieList = document.getElementById("movies")
  }

  fetchTheaterData(){
  fetch("https://evening-plateau-54365.herokuapp.com/theatres/4")
  .then(res => res.json())
  .then(json => this.createMovieCard(json.showings))
  }

  createMovieCard(showings){
    this.movieList.innerHTML = "";
    showings.forEach((show) => {
      let remainingTickets = show.capacity-show.tickets_sold
      if (remainingTickets === 0) {
        this.tickets = `Sold Out`
      } else {
        this.tickets = `<div id="${show.id}" class="ui blue button">Buy Ticket</div>`
      }
      let showCard = `
      <div class="card">
        <div class="content">
          <div class="header">
            ${show.film.title}
          </div>
          <div class="meta">
            ${show.film.runtime} minutes
          </div>
          <div class="description">
            <span class="ui label">
              ${show.showtime}
            </span>
            ${remainingTickets} remaining tickets
          </div>
        </div>
          <div class="extra content">` + this.tickets +

          `</div>
      </div>
      `
      this.movieList.innerHTML += showCard;
    })
    
    let allButton = document.getElementsByClassName("button");
    for (let i=0; i < allButton.length; i++){
      allButton[i].addEventListener("click", event => {
        this.buyButton(event.target.id)
      })
    }

  }

  buyButton(show_id){
    let postObj = {showing_id: show_id}
    fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then(res => res.json())
    .then(json => this.fetchTheaterData())
  }
}
