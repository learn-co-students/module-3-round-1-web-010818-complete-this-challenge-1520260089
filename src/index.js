document.addEventListener("DOMContentLoaded", () => {
console.log("hello")

const theatreId = 13;

fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
.then(res => res.json())
.then(json => showMovies(json))

function showMovies(json){
let showingList = json.showings
// movieTitles = document.createElement("H3")
let singleMovie = showingList.map(show => show)
let parentList = document.getElementById("shows")
for(let i = 0; i < singleMovie.length; i++){
  let ticketButton = `<button type="button" id= "ticket" value=${singleMovie[i].id}>Buy</button>`
   let movieTitles = document.createElement("ul")
   console.log(singleMovie[i])
   movieTitles.innerHTML = `${singleMovie[i].film.title} Showtime: ${singleMovie[i].showtime} Tickets left:${singleMovie[i].capacity - singleMovie[i].tickets_sold} ${ticketButton}`
  parentList.appendChild(movieTitles)

}
  // let buttons = document.querySelectorAll("ul")
  // console.log(buttons.forEach(ul => {ul.children}))
let button = document.getElementById("ticket")
button.addEventListener("click", event => {
  buyTicket(event);
})
}

function buyTicket(event){
  let showingId = event.target.value
  console.log(showingId)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({showing_id: `${showingId}`})
  };
  fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, options)
  .then(res => res.json())
  .then(json => decreaseTickets(json))
}

function decreaseTickets(json){
  console.log(json)
}





});
