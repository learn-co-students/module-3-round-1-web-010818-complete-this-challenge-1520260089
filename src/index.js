document.addEventListener("DOMContentLoaded", function() {
  const theatreId = 11;
  const showing = document.getElementById("showing")
  fetchMovieInfo()

  function fetchMovieInfo() {
    fetch("https://evening-plateau-54365.herokuapp.com/theatres/11")
      .then(res => res.json())
      .then(json => displayMovieInfo(json))
  }

  function displayMovieInfo(json) {
    console.log(json)
    for (let i = 0; i < json.showings.length; i++) {
      const div = document.createElement("div")
      const title = json.showings[i].film.title
      const runtime = json.showings[i].film.runtime
      const showtime = json.showings[i].showtime
      const ticketNum = json.showings[i].tickets_sold
      const remainingTickets = (json.showings[i].capacity) - ticketNum
      const info = `Title: ${title}, Runtime: ${runtime} minutes, Showtime: ${showtime}, Available Tickets: ${remainingTickets}`
      div.innerText = info
      div.setAttribute = ("showingId", json.showings[i].id)
      showing.appendChild(div)
      const button = document.createElement("button")
      button.innerText = "Buy Ticket"
      button.setAttribute("id", json.showings[i].id)
      div.appendChild(button)
      button.addEventListener('click', event => {
        if (remainingTickets > 0) {
          buyTicket(event, json)
        } else {
          alert("That show is sold out")
        }
      })
    }
  }

  function buyTicket(event, json) {
    console.log(json)
    showingId = event.target.id
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        showing_id: showingId
      })
    }
    fetch("https://evening-plateau-54365.herokuapp.com/tickets", options)
      .then(res => res.json())
      .then(ticket => visualDecrement(ticket, json))
  }

  function visualDecrement(ticket, json) {
    divId = ticket.showing_id
    console.log(divId)
  }
})