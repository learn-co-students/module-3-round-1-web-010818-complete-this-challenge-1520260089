const theatreId = 14;


const url = "https://evening-plateau-54365.herokuapp.com/theatres/14"
const movie = document.getElementById("moviename")

document.addEventListener("DOMContentLoaded", () => {
 console.log("loaded")

  fetched(url)
})


function fetched(url) {
  fetch(url)
    .then(res => res.json())
    .then(json => show(json))
}


function show(json) {
  movie.innerHTML = ""
  for (var i = 0; i < json.showings.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", json.showings[i].id)
    button.innerHTML = "Buy";

    let div = document.createElement("ul");
    div.innerHTML = `Title : ${json.showings[i].film.title}`;
    let li = document.createElement("div");
    li.innerHTML = `Runtime : ${json.showings[i].film.runtime}`;
    let li2 = document.createElement("div");
    // button.setAttribute("id", `sold${i}`)
    li2.innerHTML = `Tickets Sold: ${json.showings[i].tickets_sold}`;
    let li3 = document.createElement('div');
    // button.setAttribute("id", `remaning${i}`)
    li.innerHTML = `Remaning: ${json.showings[i].capacity-json.showings[i].tickets_sold}`
    movie.appendChild(div)
    movie.appendChild(li)
    movie.appendChild(li2)
    movie.appendChild(button)
  }


}

function fetchToBuy(url, movieId) {
  let flag = false
  fetch(url)
    .then(res => res.json())
    .then(json => {
      for (var i = 0; i < json.showings.length; i++) {
        if (movieId == json.showings[i].id && json.showings[i].capacity > json.showings[i].tickets_sold) {
          flag = true;
        }
      }
      if (flag) {
        buyTickets(movieId)
      } else {
        alert("That showing is sold out")
      }
    })
}




document.addEventListener("click", (e) => {


  let movieId = (e.srcElement.id)
  fetchToBuy(url, movieId)

})



function buyTickets(movieId) {

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "showing_id": movieId
    })
  }

  fetch("https://evening-plateau-54365.herokuapp.com/tickets", options)

  fetched(url)

}


// function deleteTicket(ticket_id){
//   fetch(`https://evening-plateau-54365.herokuapp.com/tickets/${ticket_id}`,{
//     method: "DELETE",
//     headers:{
//       "Content-Type": "application/json"
//       "Accept": "application/json"
//     }
//   })
// }
