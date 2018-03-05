class Theatre {
  constructor({capacity, film, showtime, tickets_sold, id}) {
    this.capacity = capacity
    this.film = film
    this.showtime = showtime
    this.ticketsSold = tickets_sold
    this.id = id
  }

  render() {
    let buttonHTML;
    if ((this.capacity - this.ticketsSold) === 0) {
      buttonHTML = "<div class='description'>Sold Out</div>"
    } else {
      buttonHTML = `<div class="ui blue button" data-showing-id="${this.id}">Buy Ticket</div>`
    }
    return `
    <div class="card">
      <div class="content">
        <div class="header">
          ${this.film.title}
        </div>
        <div class="meta">
          ${this.film.runtime} minutes
        </div>
        <div class="description">
          <span class="ui label">
            ${this.showtime}
          </span>
          <span data-showing-id="${this.id}" id="remaining-tickets">${this.capacity - this.ticketsSold}</span>  remaining tickets
        </div>
      </div>
      <div class="extra content">
        ${buttonHTML}
      </div>
  </div>
    `
  }
}
