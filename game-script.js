$(document).ready(function () {
  //genres
  // var genreArray= ['action-adventure', 'comedy', 'family-friendly', 'story-rich', 'horror'] - may not need this if ids work

  // currently it is selecting a tag randomly from the array. These should instead correspond to the button ids.

  // random page number
  $('.game-moods').on('click', function () {
    var gameTag = $('.game-moods').val();
    var queryURL =
      'https://api.rawg.io/api/games?tags=' +
      gameTag +
      '&page=' +
      [Math.floor(Math.random() * 50)];
    console.log(gameTag);
    ajaxGameCall(queryURL);
  });

  function ajaxGameCall(queryURL) {
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      console.log(response);

      var gameChoice = response.results[Math.floor(Math.random() * 20)]; // random game from random page
      console.log(gameChoice);
      console.log(gameChoice.background_image); ///screenshot src url

      var gameImage = gameChoice.background_image;
      $('#screenshot').attr('src', gameImage);
    });
  }
});
