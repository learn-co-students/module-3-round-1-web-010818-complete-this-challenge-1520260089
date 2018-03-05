const theatreId = 15;

document.addEventListener("DOMContentLoaded", ()=> {

  start()
})

function start(){
  fetch('https://evening-plateau-54365.herokuapp.com/theatres/15')
  .then(resp => resp.json())
  .then(showings => showMovies(showings))
}

function showMovies(showings){
  console.log(showings)

  let caseDiv = document.getElementById('showings')
  caseDiv.innerHTML = ""
  showings.showings.forEach((showing) => {




    let cardDiv = document.createElement('div');
      cardDiv.setAttribute("class", "card")
    let contentDiv = document.createElement('div')
      contentDiv.setAttribute("class", "content")
    let headerDiv = document.createElement('div')
      headerDiv.setAttribute("class", "header")
    let descriptionDiv = document.createElement('div')
      descriptionDiv.setAttribute("class", "description")
    let metaDiv = document.createElement('div')
      metaDiv.setAttribute("class", "meta")
    let spanElement = document.createElement('div')
      spanElement.setAttribute("class", "ui label")
    let extraDiv = document.createElement('div')
      extraDiv.setAttribute("class", "extra content")
    let buttonDiv = document.createElement('div')
      buttonDiv.setAttribute("class", "ui blue button")
    let ticketDiv = document.createElement('p')

    cardDiv.appendChild(contentDiv)
    contentDiv.appendChild(headerDiv)
    contentDiv.appendChild(metaDiv)
    contentDiv.appendChild(descriptionDiv)
    descriptionDiv.appendChild(spanElement)
    cardDiv.appendChild(extraDiv)
    extraDiv.appendChild(buttonDiv)
    let tickets = showing.capacity - showing.tickets_sold

    let title = showing.film.title
    let runtime = showing.film.runtime
    let showtime = showing.showtime
    let tickets_sold = showing.tickets_sold
    headerDiv.innerText = title
    metaDiv.innerText = runtime + " minutes"
    spanElement.innerText = showtime + ` ${tickets}` // remaining tickets`
    if (tickets == "0"){
      spanElement.innerText = "That showing is sold out"
    }
    descriptionDiv.innerText += " remaining tickets"
    buttonDiv.innerText = "Buy Ticket"

    caseDiv.appendChild(cardDiv)
    let id = showing.id


    buttonDiv.addEventListener("click", ()=> {
      buyTicket(id)
    })


  })
  }


  function buyTicket(id){
    let postData = {
      "showing_id": `${id}`
    }
    let obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(postData)
    }
    fetch('https://evening-plateau-54365.herokuapp.com/tickets', obj)
    .then(resp => resp.json())
    .then(json => start())


  }
