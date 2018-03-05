class App {

  constructor(){
    this.fetchMovies()
    this.showingsSection = document.querySelector('.ui.cards.showings')
    this.movies = []
  }

  fetchMovies(){
    fetch(`${baseApi}/${theatreId}`)
      .then(res => res.json())
      .then(json => this.getMovies(json))
  }

  getMovies(moviesJSON){
    let movieResults = moviesJSON.showings
    movieResults.forEach(result => {
      // (id, title, runtime, showTime, capacity, ticketsSold)
      let movie = new Movie (result.id, result.film.title, result.film.runtime, result.showtime, result.capacity, result.tickets_sold )
      this.movies.push(movie)
    })
    this.render()
    this.movies.forEach(movie => {
      this.addEventListenerToBuyTicket(movie)
    })
  }

  renderMovies(){
    return this.movies.map(movie => {return movie.render()})
  }

  render(){
    this.showingsSection.innerHTML= this.renderMovies().join('')
  }


  addEventListenerToBuyTicket(movie){
    debugger
    if (!movie.soldout){
      let buyTicketButton = document.getElementById(`buy-ticket-${movie.id}`)
      buyTicketButton.addEventListener("click", event => {
        this.buyTicket(event)
      })
    }
  }

  buyTicket(event){
    let showingId = event.target.dataset.id
    let data = {showing_id: showingId}
    fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => this.updateTicketsSold(json))
  }

  updateTicketsSold(json){
    this.movies = []
    this.fetchMovies()
  }
}
