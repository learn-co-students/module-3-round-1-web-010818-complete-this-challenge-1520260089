class Showing {
  constructor( { id, film, capacity, showtime, tickets_sold }) {
    this.id = id
    this.film = film
    this.filmTitle = this.film.title
    this.runtime = this.film.runtime
    this.capacity = capacity
    this.showtime = showtime
    this.tickets_sold = tickets_sold
  }

  render() {
    return `<div class="card">
              <div class="content">
                <div class="header">
                  ${this.filmTitle}
                </div>
                <div class="meta">
                  ${this.runtime} minutes
                </div>
                <div class="description">
                  <span class="ui label">
                    ${this.showtime}
                  </span>
                  ${this.capacity - this.tickets_sold} remaining tickets
                </div>
              </div>
              <div class="extra content">
                <div class="ui blue button" data-id="${this.id}">Buy Ticket</div>
              </div>
            </div>`
  }
}

// <div class="card">
//   <div class="content">
//     <div class="header">
//       (Film Title)
//     </div>
//     <div class="meta">
//       (Runtime) minutes
//     </div>
//     <div class="description">
//       <span class="ui label">
//         (Showtime)
//       </span>
//       (Num Tickets) remaining tickets
//     </div>
//   </div>
//   <div class="extra content">
//     <div class="ui blue button">Buy Ticket</div>
//   </div>
// </div>
//
// "id": 3,
// "name": "Flatiron Theatres #3",
// "showings": [
//   {
//     "id": 30,
//     "film": {
//       "title": "The Torment of Others 2",
//       "runtime": 96
//     },
//     "capacity": 20,
//     "showtime": "01:59AM",
//     "tickets_sold": 1
//   },
