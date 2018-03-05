class App{
  constructor(){
    this.theatreId = 18
    this.showings = document.getElementById("ui cards showings")
    // this.filmTitleLocale = document.getElementsByClassName("header")[2]
    // this.showTimeLocale = document.getElementsByClassName("ui label")
    // this.minutesLocale = document.getElementsByClassName("meta")
    // this.blueButton = document.getElementsByClassName("ui blue button")
  }

  fetchMovies(){
    fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${this.theatreId}`)
      .then((res)=>res.json())
      .then((json)=>this.listMovies(json))
  }

  listMovies(movieList){
    movieList.showings.forEach(movie => {
      let div = document.createElement('div')
      div.innerText = movie.film.title
      let li = document.createElement('li')
      li.innerText = `showtime: ${movie.showtime}`
      console.log(movie);
      let tixSol = document.createElement('li')
        tixSol.innerText = `tickets sold ${movie.tickets_sold}`
      let blueButton = document.createElement('button')
        blueButton.innerText = "Buy Ticket"
        blueButton.addEventListener('click', event=>{
          this.buttonEventListener(movie)
        })
      let remaining = document.createElement('li')
        remaining.innerText = parseInt(movie.capacity)- parseInt(movie.tickets_sold)
      this.showings.appendChild(div)
      div.appendChild(li)
      li.appendChild(tixSol)
      li.appendChild(remaining)
      this.showings.appendChild(blueButton)
    })

  }

  buttonEventListener(movie){
    let id = movie.id
    let options = {
      method:'POST',
      header:{
        'Content-Type': 'application/json',
        Accept:'application/json'
      },
      body:JSON.stringify({showing_id:id})
    }
    fetch(`https://evening-plateau-54365.herokuapp.com/tickets`,options)
    .then((res)=>res.json())
    .then((json) => console.log(json))
  }
}
