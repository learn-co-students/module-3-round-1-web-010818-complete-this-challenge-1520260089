class Ticket {
  constructor(showingId) {
    this.showingId = showingId;
  }

  postTicket() {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accepts:'application/json'
      },
      body: JSON.stringify({showing_id:this.showingId})
    }
    fetch(baseUrl+'tickets', options)
      .then(res => res.json())
      .then(json => this.purchaseTicket(json))
  }

  purchaseTicket(json) {
    let app = new App();
    app.fetchShowings();
  }



}
