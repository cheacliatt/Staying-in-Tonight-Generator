$(document).ready(function () {
  // get new API Key from rawg if this won't work https://rawg.io/apidocs
  //API KEY
  const gameAPIKey = '03ef63429b0b4373879b19bf85155c0d';
  //
  const mainGameUrl =
    'https://api.rawg.io/api/games?key=' + gameAPIKey + '&tags=';
  $('.game-moods').on('click', function () {
    //checks for id of button pressed, ids=genre tags
    var gameTag = $(this).attr('id');
    var queryURL =
      mainGameUrl +
      gameTag +
      '&ordered-=added&page_size=20&page=' +
      [Math.floor(Math.random() * 15)]; // random page of games fitting the genre
    ajaxGameCall(queryURL);
    console.log(queryURL);
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

      var gameID = gameChoice.id;

      var gameURL =
        'https://api.rawg.io/api/games/' + gameID + '?key=' + gameAPIKey;

      $.ajax({
        url: gameURL,
        method: 'GET',
      }).then(function (responseGame) {
        gameDescription(responseGame.description);
        console.log(responseGame.description);
      });
    });
  }

  function gameDescription(gameInfo) {
    $('#game-description').append(gameInfo);
  }

  function renderGame(game) {
    var gameImageCode = game.background_image;
    var titleGame = game.name;
    var releaseGame = game.released;
    var ratingGame = game.rating;
    var gamesList = $('#games-list');

    var gameContent = $(`
      <div class="card">
      <h2  class="general-title-"> Games</h2>

          <img id="game-poster" class="card-img" style="image-resolution:50dpi" src="${gameImageCode}" alt="game_cover" />
      </div>
      <div class="card-body rounded text-white">
        <h2 class="card-title" id="title-game">${titleGame}</h2>
        <p id="game-description" maxlength="50"></p>
        <h3 class="card-text" id="rating-game">Rating: ${ratingGame}/5</h3>
        <h3 class="card-text">${releaseGame}</h3>
        <p>Video Game data from <a href="https://rawg.io/">RAWG.io</a></p>
      </div>
    `);

    cleanGamesList(game);
    gamesList.append(gameContent);
  }

  function cleanGamesList(game) {
    var gamesList = $('#games-list');
    gamesList.empty();
  }
});
