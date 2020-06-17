$(document).ready(function () {

  var settings = {
    async: true,
    crossDomain: true,
    url: 'https://rawg-video-games-database.p.rapidapi.com/genres',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '97bff17986mshcf52cf710c93321p1a7692jsnaf0726e48fd1',
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});

