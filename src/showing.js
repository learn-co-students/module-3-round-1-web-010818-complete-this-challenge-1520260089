class Showing {
  constructor(data) {
    this.id = data.id
    this.film = data.film //film object has title and runtime
    this.capacity = data.capacity
    this.showtime = data.showtime
    this.ticketsSold = data.tickets_sold
  }

  render() {
    let container = `<div class="card" id="showing-${this.id}">`;
    let content = '<div class="content">';
    let header = `<div class='header'>${this.film.title}</div>`
    let meta = `<div class='meta'>${this.film.runtime} minutes</div>`
    let description = `<div class='description'><span class='ui label'>${this.showtime}</span>${this.capacity - this.ticketsSold} remaining tickets</div>`
    let closeContent = `</div>`
    let extra;
    if(this.capacity - this.ticketsSold === 0) {
      extra = `<div class='extra content'>Sold Out</div>`
    } else {
      extra = `<div class='extra content'><div data-id='${this.id}'class='ui blue button'>Buy Ticket</div></div>`
    }
    let closeContainer = '</div>'
    let showingCard = container+content+header+meta+description+closeContent+extra+closeContainer;
    return showingCard;
  }

  // addListener() {
  //   let showingDiv = document.querySelector(`#showing-${this.id}`)
  //   if(showingDiv.querySelector('.button')) {
  //     let button = showingDiv.querySelector('.button')
  //     button.addEventListener('click', event => {
  //       console.log(event)
  //       let ticket = new Ticket(event.target.dataset.id);
  //       ticket.postTicket();
  //     })
  //   }
  // }

  // I was trying to add the button listeners from here, but I couldn't get it working


}
