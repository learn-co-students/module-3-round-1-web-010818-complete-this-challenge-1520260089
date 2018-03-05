class App {
  constructor() {
    this.showingsContainer = document.querySelector('.showings')
  }

  fetchShowings() {
    this.showingsContainer.innerHTML = ''
    fetch(`${baseUrl}theatres/${theatreId}`)
      .then(res => res.json())
      .then(json => {
        json.showings.forEach(showing => {
          this.addShowingToPage(showing);
        })
      })
      .then(() => this.addAllListeners())
  }

  addShowingToPage(showingJson) {
    let showing = new Showing(showingJson);
    let showingCard = showing.render();
    this.showingsContainer.innerHTML += showingCard;
    // showing.addListener();
  }

  addAllListeners() {
    let buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        let ticket = new Ticket(event.target.dataset.id);
        ticket.postTicket();
      })
    })
  }

}
