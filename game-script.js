$(document).ready(function () {
  //genres
  // var genreArray= ['action-adventure', 'comedy', 'family-friendly', 'story-rich', 'horror'] - may not need this if ids work

  // currently it is selecting a tag randomly from the array. These should instead correspond to the button ids.

  // random page number
  $('.game-moods').on('click', function () {
    //checks for id of button pressed, ids=genre tags
    var gameTag = $(this).attr('id');
    var queryURL =
      'https://api.rawg.io/api/games?tags=' +
      gameTag +
      '&page_size=20&page=' +
      [Math.floor(Math.random() * 30)]; // random page of games fitting the genre
    console.log(gameTag);
    ajaxGameCall(queryURL);
  });

  function ajaxGameCall(queryURL) {
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      //chooses a game at random from the page
      var gameChoice = response.results[Math.floor(Math.random() * 20)]; // random game from random page
      console.log(gameChoice);
      console.log(gameChoice.background_image); 
// key art for game, equivalent to movie poster.
      var gameImage = gameChoice.background_image;
      $('#screenshot').attr('src', gameImage);
    });
  }
});
