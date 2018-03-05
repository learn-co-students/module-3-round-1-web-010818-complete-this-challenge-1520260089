class App {
  constructor() {
    this.showings = []
    this.url = 'https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}'
    this.buyUrl = "https://evening-plateau-54365.herokuapp.com/tickets"
    this.showingsDiv = document.getElementsByClassName('showings')[0]
    this.exampleJson = {
      //Can't get api to give me any response besides 404 so stubbing this so I can continue
      "id": 3,
      "name": "Flatiron Theatres #3",
      "showings": [
        {
          "id": 30,
          "film": {
            "title": "The Torment of Others 2",
            "runtime": 96
          },
          "capacity": 20,
          "showtime": "01:59AM",
          "tickets_sold": 1
        },
        {
          "id": 29,
          "film": {
            "title": "The Torment of Others 2",
            "runtime": 96
          },
          "capacity": 20,
          "showtime": "08:41PM",
          "tickets_sold": 6
        },
        {
          "id": 28,
          "film": {
            "title": "The Torment of Others 2",
            "runtime": 96
          },
          "capacity": 20,
          "showtime": "06:50AM",
          "tickets_sold": 1
        },
        {
          "id": 27,
          "film": {
            "title": "All Passion Spent 4",
            "runtime": 88
          },
          "capacity": 20,
          "showtime": "10:11AM",
          "tickets_sold": 10
        },
        {
          "id": 26,
          "film": {
            "title": "All Passion Spent 4",
            "runtime": 88
          },
          "capacity": 20,
          "showtime": "11:02PM",
          "tickets_sold": 7
        },
        {
          "id": 25,
          "film": {
            "title": "All Passion Spent 4",
            "runtime": 88
          },
          "capacity": 20,
          "showtime": "06:58PM",
          "tickets_sold": 1
        },
        {
          "id": 24,
          "film": {
            "title": "Consider Phlebas",
            "runtime": 118
          },
          "capacity": 20,
          "showtime": "11:36PM",
          "tickets_sold": 2
        },
        {
          "id": 23,
          "film": {
            "title": "Consider Phlebas",
            "runtime": 118
          },
          "capacity": 20,
          "showtime": "09:47AM",
          "tickets_sold": 14
        },
        {
          "id": 22,
          "film": {
            "title": "Consider Phlebas",
            "runtime": 118
          },
          "capacity": 20,
          "showtime": "06:13AM",
          "tickets_sold": 2
        },
        {
          "id": 21,
          "film": {
            "title": "Those Barren Leaves, Thrones, Dominations 3",
            "runtime": 107
          },
          "capacity": 20,
          "showtime": "03:55AM",
          "tickets_sold": 4
        },
        {
          "id": 20,
          "film": {
            "title": "The Last Temptation 2",
            "runtime": 85
          },
          "capacity": 20,
          "showtime": "08:48PM",
          "tickets_sold": 3
        }
      ]
    }
    this.fetchShowings()
  }

  fetchShowings() {
    console.log("fetching showings...")
    const options = {
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      }
    }
    fetch(this.url, options)
      .then(res => res.json())
      .then(json => this.createShowings(this.exampleJson))
  }

  createShowings(json) {
    json.showings.forEach((showing) => {
      let newShowing = new Showing(showing)
      this.showings.push(newShowing)
    })
    this.displayShowings()
  }

  displayShowings() {
    this.showingsDiv.innerHTML = this.showings.map((showing) => showing.render()).join('')
    let buttons = document.getElementsByClassName('button')
    for (let i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', event => this.buyTicket(event))
    }
  }

  buyTicket(event) {
    console.log(event.target.dataset.id)
    const options = {
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      showing_id: event.target.dataset.id
    }
    fetch(this.buyUrl, options)
      .then(res => res.json())
      .then(json => this.completeTransaction(json))
  }

  completeTransaction(json) {
    // AGAIN, could not get api to give me a success response. Could only get 404 NOT FOUND
    // Had to try to continue without a working api
    console.log("buying ticket")
    // console.log(json)
    // if (json.id) {
      //success! Find matching showing object and increment tickets sold
      let targetShowing = this.showings.find((showing) => showing.id === 28)
      console.log(targetShowing)
      console.log("before tickets sold:", targetShowing.tickets_sold)
      // if (targetShowing.tickets_sold > 0) targetShowing.tickets_sold += 1;
      targetShowing.tickets_sold += 1;
      console.log("after tickets sold:", targetShowing.tickets_sold)
      this.fetchShowings()
    // } else {
    //   //unsuccessful
    // }
  }
}

// Example Responses:
//
// Successfully created ticket
// {"id": 3820, "showing_id": 182, "created_at": "2017-11-13T12:12:28.682Z"}
// Sold out
// {"error": "That showing is sold out"}
// status 422
