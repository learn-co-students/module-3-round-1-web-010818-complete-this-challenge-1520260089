const theatreId = 19;

document.addEventListener('DOMContentLoaded', function(){


  function fetchShows(){
    fetch("https://evening-plateau-54365.herokuapp.com/theatres/19")
      .then(res=>res.json())
      .then(json=>createCards(json))
  }

  fetchShows()

  function postDB(showing_id){
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({"showing_id": showing_id})
    }

    fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, options)
      .then(res=>res.json())
      .then(json=>fetchShows())
  }

  function calcRemainTick(cap, sold){
    return cap - sold;
  }

  function createCards(json){

    let page = document.getElementsByClassName("ui cards showings")[0]
    page.innerHTML = ""
    let showings = json.showings

    for(let i = 0; i < showings.length; i++){
      let card = document.createElement("div")
      card.setAttribute("id", `film-${showings[i].id}`)
      card.setAttribute("class", "card")

      let content = document.createElement("div")
      content.setAttribute("class", "content")

      card.appendChild(content)

      let header = document.createElement("div")
      header.setAttribute("class", "header")
      header.innerText = showings[i].film.title

      content.appendChild(header)

      let runtime = document.createElement("div")
      runtime.setAttribute("class", "meta")
      runtime.innerText = `${showings[i].film.runtime} minutes`

      content.appendChild(runtime)

      let description = document.createElement("div")
      description.setAttribute("class", "description")
      description.setAttribute("id", `remain-${showings[i].id}`)

      let uiLabel = document.createElement("span")
      uiLabel.setAttribute("class", "ui label")
      uiLabel.innerText = showings[i].showtime

      description.appendChild(uiLabel)

      if(calcRemainTick(showings[i].capacity, showings[i].tickets_sold) === 0){
        description.innerText += `${calcRemainTick(showings[i].capacity, showings[i].tickets_sold)} remaining tickets`

        content.appendChild(description)

        let extra = document.createElement("div")
        extra.setAttribute("class", "extra content")
        extra.innerText = "Sold Out"

        card.appendChild(extra)

      } else {
        description.innerText += `${calcRemainTick(showings[i].capacity, showings[i].tickets_sold)} remaining tickets`

        content.appendChild(description)

        let extra = document.createElement("div")
        extra.setAttribute("class", "extra content")

        let button = document.createElement("button")
        button.setAttribute("class", "ui blue button")
        button.setAttribute("id", `${showings[i].id}`)
        button.innerText = "Buy Ticket"
        button.addEventListener("click", (event)=>{
          postDB(showings[i].id)
        })
        extra.appendChild(button)
        card.appendChild(extra)
      }
      page.appendChild(card)
    }
  }




})
