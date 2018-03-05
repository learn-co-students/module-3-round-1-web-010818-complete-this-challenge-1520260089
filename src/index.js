const theatreId = 5;
const baseUrl = 'https://evening-plateau-54365.herokuapp.com/'

document.addEventListener('DOMContentLoaded', event => {
  let app = new App();
  app.fetchShowings();
})
