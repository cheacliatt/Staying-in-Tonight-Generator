$(document).ready(function () {

  $('.game-moods').on('click', function () {
    //checks for id of button pressed, ids=genre tags
    var gameTag = $(this).attr('id');
    var queryURL =
      'https://api.rawg.io/api/games?tags=' +
      gameTag +
      '&ordered-=added&page_size=20&page=' +
      [Math.floor(Math.random() * 15)]; // random page of games fitting the genre
    ajaxGameCall(queryURL);
  });

  function ajaxGameCall(queryURL) {
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      //chooses a game at random from the page
      var gameChoice = response.results[Math.floor(Math.random() * 20)]; // random game from random page
      console.log(gameChoice);
      renderGame(gameChoice);
    });
  }

  function renderGame (game) {
    var gameImageCode = game.background_image;
    var titleGame = game.name;
    // var overviewGame = game.overview; // find endpoint
    var releaseGame = game.released;
    var ratingGame = game.rating;
    var gamesList = $("#games-list");

    var gameContent = $(`
      <div class="card">
          <img id="game-poster" class="card-img" style="image-resolution:50dpi" src="${gameImageCode}" alt="game_cover" />
      </div>
      <div class="card-body text-white">
        <h2 class="card-title" id="title-game">${titleGame}</h2>

        <h3 class="card-text" id="rating-game">Rating: ${ratingGame}/5</h3>
        <h3 id="release-movie" class="card-text">${releaseGame}</h3>
      </div>
    `);
    cleanGamesList(game);
    gamesList.append(gameContent);
  };

  function cleanGamesList (game) {
    var gamesList = $("#games-list");
    gamesList.empty();
  }

});
