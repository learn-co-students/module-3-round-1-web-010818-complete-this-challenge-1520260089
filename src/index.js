document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded")
  let newApp = new App()
  newApp.fetchMovies()
  //newApp.buyTicketButton()
})
const theatreId = 1;

class App {
  constructor() {

  }

  fetchMovies(){
    fetch('https://evening-plateau-54365.herokuapp.com/theatres/1')
    .then(resp => resp.json())
    .then(movies => this.displayMovies(movies))
  }

  displayMovies(movies){
    // console.log(movies.showings)
      let moviesShowings = movies.showings
      let list = document.getElementById("list")

      for(let i = 0; i < moviesShowings.length; i++){
        let movie = moviesShowings[i]


        let movieDiv = document.createElement("div")
        movieDiv.setAttribute("data-movieid", movie.id)

        movieDiv.innerText = movie.film.title
        list.append(movieDiv)

        let capacity = document.createElement("li")
        capacity.innerText = `Capacity: ${movie.capacity}`
        list.append(capacity)

        let showTime = document.createElement("li")
        showTime.innerText = `Showtime: ${movie.showtime}`
        list.append(showTime)

        let ticketsSold = document.createElement("li")
        ticketsSold.innerText = `Tickets Sold: ${movie.tickets_sold}`
        list.append(ticketsSold)

        let button = document.createElement("BUTTON")
        var text = document.createTextNode("Get Tickets")
        button.setAttribute("data-movieid", movie.id)
        button.appendChild(text)
        list.appendChild(button)

        button.addEventListener("click", () => {
          let ticketsSold = movie.tickets_sold
          let movieCapacity = movie.capacity
          let ticketsRemaining = (movieCapacity - ticketsSold) - 1

         // ticketsRemaining.innerText = parseInt(ticketsRemaining.innerHTML) - 1

          let ticketLi = document.createElement("li")
          ticketLi.setAttribute("id", movie.id)
          // ticketLi.innerText = `Tickets Remaining: ${ticketsRemaining}`
          ticketLi.innerHTML = `Tickets Remaining: ${ticketsRemaining}`
          movieDiv.append(ticketLi)
          this.buyTicketButton(event)
        })
       }
    }

  buyTicketButton(event){
    let movieId = event.target.dataset.movieid
    let ticketLi = document.getElementById(movieId).value
    
     fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
       },
       body: JSON.stringify({showing_id: movieId})
     })
     .then(resp => resp.json())
     .then(json => this.response(json))
  }

  response(json){
    // console.log(json.show)
    // let jsonError = json.error
    if (json.error){
      alert(json.error)
    } else {
      alert("Your purchase was succesful")
    }
  }



}
