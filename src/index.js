const theatreId = 3;
const cards = document.getElementsByClassName('showings');
let li = document.createElement('li');

document.addEventListener('DOMContentLoaded', function() {
  fetchMovies();
});

function fetchMovies(){
  fetch(`https://evening-plateau-54365.herokuapp.com/theatres/3`)
  .then(res => res.json())
  .then(json => populateData(json.showings)); // console.log shows an array of movie info objects call populateData on json.showings
}

function populateData(showings){
  for (let i = 0; i < showings.length; i++) {
    let div = document.createElement("div");
    div.setAttribute('id', showings[i].id);
    div.innerText = (`${showings[i].film["title"]}\n runtime: ${showings[i].film["runtime"]}\n ${showings[i].showtime}  ${(showings[i].capacity - showings[i].tickets_sold)} remaining tickets`);
    // console.log(div);   //this console.log shows the movie title, runtime, showtime, and remaining tickets.
    let button = document.createElement("BUTTON");
    div.button;
    console.log(cards);
    cards.appendChild(div); // TypeError appendChild is not a function?!?!
  }
}
