/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM loaded');
  fetchMovies();
});

const theatreId = 9;
const showingsContainer = document.getElementsByClassName('ui cards showings')[0];

function fetchMovies() {
  fetch('https://evening-plateau-54365.herokuapp.com/theatres/9')
  .then(res => res.json())
  .then(json => renderMovies(json.showings));
}

function renderMovies(showings) {
  showingsContainer.innerHTML = '';
  let ul = document.createElement('ul');
  showings.forEach((showing) => {
    let title = showing.film.title;
    let runtime = showing.film.runtime;
    let showtime = showing.showtime;
    let remainingTix = parseInt(showing.capacity) - parseInt(showing.tickets_sold);
    let li = `
    <li class="ui card"><h3>${title}</h3>
    ${runtime} minutes
    <br>
    Showtime: ${showtime}
    <br>
    ${remainingTix} remaining tickets
    </li>`;
    ul.innerHTML += li;

    let buyBtn = document.createElement('button');
    buyBtn.setAttribute('data-id', showing.id);
    buyBtn.setAttribute('data-remaining', remainingTix);
    if (remainingTix > 0) {
      buyBtn.innerText = 'Buy Ticket';
      buyBtn.setAttribute("class", "ui primary button");
    } else {
      buyBtn.innerText = 'Sold Out';
      buyBtn.setAttribute("class", "ui button");
      buyBtn.disabled = true;
    }
    ul.appendChild(buyBtn);
  });
  showingsContainer.appendChild(ul);
  buyTixListeners();
}

function buyTixListeners() {
  showingsContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      let remaining = parseInt(e.target.dataset.remaining);
      if (remaining > 0) {
        let showingId = parseInt(e.target.dataset.id);
        persistNewTicket(showingId);
      } else {
        alert ('sold out');
      }
    }
  });
}

function persistNewTicket(showingId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({showing_id: showingId})
  };
  fetch('https://evening-plateau-54365.herokuapp.com/tickets', options)
  .then(res => res.json())
  .then(fetchMovies());
}
