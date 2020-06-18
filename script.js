$(document).ready(function () {
//genres
  var genreArray= ['action-adventure', 'comedy', 'family-friendly', 'story-rich', 'horror']

  // currently it is selecting a tag randomly from the array. These should instead correspond to the button ids.
  var queryURL = 'https://api.rawg.io/api/games?tags='+ genreArray[Math.floor(Math.random() * genreArray.length)] +'&page='+[Math.floor(Math.random() * 50)] // random page number
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    console.log(response);

    var gameChoice = response.results[Math.floor(Math.random() * 20)]; // random game from random page
    console.log(gameChoice);
    console.log(gameChoice.background_image) ///screenshot src url

    //disp
    var gameImage = gameChoice.background_image;
    $('#screenshot').attr('src', gameImage);
  });

});