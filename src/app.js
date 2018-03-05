class App {
  constructor() {
    this.theatreId = 8;
    this.showingsDiv = document.querySelector('.showings')
    // this.allButtons = document.querySelectorAll('.button')
  }

  fetchTheatres() {
    fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${this.theatreId}`)
      .then(res => res.json())
      .then(json => {
        for (let film of json.showings) {
          let filmObject = new Theatre(film)
          this.showingsDiv.innerHTML += filmObject.render()
        }
        this.addButtonEventListeners()
      })
  }

  postTicket(showingId) {
   let body = { showing_id: showingId}
   let options = {
     method: 'POST',
     headers:{
       'Content-Type': 'application/json',
       Accepts: 'application/json'
    },
     body: JSON.stringify(body)
   }
   fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, options)
    .then(res => res.json())
    .then(json => {
      this.updateRemainingTickets(json)
    })
  }

  addButtonEventListeners() {
    let allButtons = document.querySelectorAll('.button')
    for (let button of allButtons) {
      button.addEventListener("click", () => {
        this.postTicket(button.dataset.showingId)
      })
    }
  }

  findButton(showingId) {
    let allButtons = document.querySelectorAll('.button')
    for (let button of allButtons) {
      if (button.dataset.showingId == showingId) {
        return button
      }
    }
  }

  updateRemainingTickets(json) {
    let theatres = document.querySelectorAll('.card')
    for (let theatre of theatres) {
      let remaingTickets = theatre.querySelector('#remaining-tickets')
      if (remaingTickets.dataset.showingId == json.showing_id) {
        remaingTickets.innerText = parseInt(remaingTickets.innerText) - 1
        if (parseInt(remaingTickets.innerText) === 0) {
          let buttonParent = this.findButton(json.showing_id).parentElement
          buttonParent.innerHTML = "<div class='description'>Sold Out</div>"
        }
      }
    }
  }

}
