class Movie {
	constructor({
		id,
		film,
		capacity,
		showtime,
		tickets_sold
	}, ) {
		this.id = id,
			this.film = film,
			this.title = film.title,
			this.runtime = film.runtime,
			this.capacity = capacity,
			this.showtime = showtime,
			this.tickets_sold = tickets_sold
	}

	render() {
		return `
    <div class="card">
    <div class="content">
      <div class="header">
        ${this.title}
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
      <div class="ui blue button" data-id=${this.id}>Buy Ticket</div>
    </div>
  </div>
    `
	}
}