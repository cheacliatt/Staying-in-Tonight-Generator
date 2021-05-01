$(document).ready(function () {
  var api_key = '8f217cc3f1fc089564adde5523a50099';
  var mainURL = `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=`;

  //listener to movie button
  $('.movie-moods').on('click', function () {
    var genreEl = $(this).val();
    var queryURL =
      `${mainURL}${genreEl}` + '&page=' + [Math.floor(Math.random() * 9 + 1)];
    ajaxMovieCall(queryURL);
  });
  // call function
  function ajaxMovieCall(queryURL) {
    $.ajax({
      url: queryURL,
      method: 'GET',
      success: function (response) {
        console.log(response);
      },
      error: function (response) {
        console.log(response);
      },
    }).then(function (response) {
      console.log(response.results[0].poster_path);
      renderMovies(response, 1);
    });
  }
  //fuction that renders movie
  function renderMovie(movie) {
    var posterImageCode = movie.backdrop_path;
    var posterImageURL = `https://image.tmdb.org/t/p/w500/${posterImageCode}`;
    var titleMovie = movie.title;
    var overviewMovie = movie.overview;
    var releaseMovie = movie.release_date;
    var ratingMovie = movie.vote_average;
    var moviesList = $('#movies-list');
    // dynamically creating card and text
    var movieContent = $(`
            <div class="card">
            <h2   class="general-title"> Movies</h2>
                <img id="movie-poster" class="card-img" src="${posterImageURL}" alt="poster1" />
            </div>
            <div class="card-body rounded text-white">
            <h2  class="card-title" id="title-movie">${titleMovie}</h2>
            <h5 id="overview-movie">${overviewMovie}</h5>
            <h3 class="card-text" id="rating-movie">Rating: ${ratingMovie}</h3>
            <h3 id="release-movie" class="card-text">${releaseMovie}</h3>
            </div>
    `);

    moviesList.append(movieContent);
  }

  function cleanMoviesList(movie) {
    var moviesList = $('#movies-list');
    moviesList.empty();
  }
  //generating random number
  function getRandomMovie(movies) {
    var randomNumber = Math.floor(Math.random() * movies.results.length);
    var movie = movies.results[randomNumber];

    return movie;
  }
  //for loop if user would like to display more than one movie
  function renderMovies(movies, length) {
    cleanMoviesList();

    for (var i = 0; i < length; i++) {
      var randomMovie = getRandomMovie(movies);
      renderMovie(randomMovie);
    }
  }
});
