const theatreId = 16;

class App {
  constructor(){
    this.cardShowing = document.getElementById("cards showings")
  }

  fetchFilms(){
    fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
    .then(res => res.json())
    .then(json => this.showFilms(json))
  }

  showFilms(data){
    this.cardShowing.innerHTML = ""
    data.showings.forEach((film) => {
      this.displayFilm(film)
    })
  }

  displayFilm(film){

    let divCard = document.createElement("div")
    divCard.setAttribute("class", "card")
    let divContent = document.createElement("div")
    divContent.setAttribute("class", "content")
    let divHeader = document.createElement("div")
    divHeader.setAttribute("class", "header")
    divHeader.innerText = `${film.film.title}`
    divContent.appendChild(divHeader)

    let divMeta = document.createElement("div")
    divMeta.setAttribute("class", "meta")
    divMeta.innerText = `${film.film.runtime} minutes`
    divContent.appendChild(divMeta)


    let spanLabel = document.createElement("span")
    spanLabel.setAttribute("class", "ui label")
    spanLabel.innerText = `${film.showtime}`
    let divDescription = document.createElement("div")
    divDescription.setAttribute("class", "description")

    divContent.appendChild(divDescription)
    divDescription.innerText = `${20 - film.tickets_sold} remaining tickets`
    divDescription.appendChild(spanLabel)
    divCard.appendChild(divContent)

    let divExtra = document.createElement("div")
    divCard.appendChild(divExtra)
    this.cardShowing.appendChild(divCard)
    if (film.tickets_sold === 20){

       divExtra.innerText = "sold out"
    } else{
      let divButton = document.createElement("div")
      divButton.setAttribute("class", "ui blue button")
      divButton.innerText = "Buy Ticket"
      divExtra.appendChild(divButton)
      divButton.addEventListener("click", (event) => {
          this.buyTicket(film)
      })
    }
  }



  buyTicket(film){
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({showing_id:film.id})
    };

    fetch("https://evening-plateau-54365.herokuapp.com/tickets", options)
    .then((res) => res.json())
    .then(json => {
      this.fetchFilms()
    })
  }







}
