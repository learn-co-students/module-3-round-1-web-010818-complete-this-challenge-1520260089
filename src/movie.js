class Movie {

  constructor(id, title, runtime, showTime, capacity, ticketsSold){
    this.id = id
    this.title = title
    this.runtime = runtime
    this.showTime = showTime
    this.capacity = capacity
    this.ticketsSold = ticketsSold
  }

  ticketsRemaining(){
    return this.capacity - this.ticketsSold
  }

  render(){
    let html = `
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
              ${this.showTime}
            </span>
            <div id="tickets-remaining-${this.id}">${this.ticketsRemaining()} remaining tickets </div>
          </div>
        </div>
        <div class="extra content">
          <div class="ui blue button" id="buy-ticket-${this.id}" data-id="${this.id}">Buy Ticket</div>
        </div>
      </div>
    `
    if (this.ticketsRemaining() <= 0){
      this.soldout = true
      html = `
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
                ${this.showTime}
              </span>
              <div id="tickets-remaining-${this.id}">${this.ticketsRemaining()} remaining tickets </div>
            </div>
          </div>
          <div class="extra content">
            Sold out
          </div>
        </div>
      `
    }
    return html
  }





}
