const theatreId = 17;

let showings = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');

  function fetchShowings() {
    fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
      .then(res => res.json())
      .then(json => {
        showings = [];
        iterateThroughShowings(json.showings)
      })
  }

  function iterateThroughShowings(showingArray) {
    showingArray.forEach(showing => {
      render(showing);
      addBuyButtonEventListener();
    });
  }

  function render(showing) {
    let showingDiv = document.getElementById('showing-div');
    showings.push(showing);
    showingDiv.innerHTML += `<div class="card">
                              <div class="content">
                                <div class="header">
                                  ${showing.film.title}
                                </div>
                                <div class="meta">
                                  ${showing.film.runtime} Minutes
                                </div>
                                <div class="description">
                                  <span class="ui label">
                                    ${showing.showtime}
                                  </span>
                                  ${showing.capacity - showing.tickets_sold} remaining tickets
                                </div>
                              </div>
                              <div class="extra content">
                                <div data-id="${showing.id}"class="ui blue button">Buy Ticket</div>
                              </div>
                            </div>`

  }

  function addBuyButtonEventListener() {
    let btn = document.getElementsByClassName('button');
    for(let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', (event) => {
        buyTicket(event.target.dataset.id);
      });
    }
  }

  function buyTicket(ticketId) {
    ticketId = parseInt(ticketId);
    let film = showings.find(film => film.id === ticketId);
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
      body: JSON.stringify({showing_id: `${ticketId}`})
    };
    if ((film.capacity - film.tickets_sold) > 0) {
      fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, options)
      .then(res = res.json())
      .then(json => console.log(json))
    }
    fetchShowings();
  }

  fetchShowings();

});
