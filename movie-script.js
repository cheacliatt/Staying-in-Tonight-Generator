// 8f217cc3f1fc089564adde5523a50099
// movie DB key
$(document).ready(function () {
  var api_key = "8f217cc3f1fc089564adde5523a50099";
  var mainURL = `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=`;

  //comedy button
  $(".movie-moods").on("click", function () {
    var genreEl = $(this).val();
    var queryURL = `${mainURL}${genreEl}`;
    var cachedData = getCachedData();
    var cachedMovies = cachedData.movies;

    if (cachedMovies && cachedMovies.results.length) {
        renderMovies(cachedMovies, 5);
    } else {
        ajaxMovieCall(queryURL);
    }
  });

  function ajaxMovieCall(queryURL) {
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0].poster_path);
      saveMoviesInCache(response);
      renderMovies(response, 5);
    });
  }
});

function renderMovies (movies, length) {
    cleanMoviesList();

    for (var i = 0; i < length; i++) {
        var randomMovie = getRandomMovie(movies);
        renderMovie(randomMovie);
    }
}

function getRandomMovie (movies) {
    var randomNumber = Math.floor(Math.random() * movies.results.length);
    var movie = movies.results[randomNumber];

    return movie;
}

 function cleanMoviesList (movie) {
    var moviesList = $("#movies-list");
    moviesList.empty();
 }

 function renderMovie (movie) {
    var posterImageCode = movie.poster_path;
    var posterImageURL = `https://image.tmdb.org/t/p/w500/${posterImageCode}`;
    var titleMovie = movie.title;
    var overviewMovie = movie.overview;
    var releaseMovie = movie.release_date;
    var ratingMovie = movie.vote_average;
    var moviesList = $("#movies-list");

    var movieContent = $(`
        <div>
            <div>
                <img id="movie-poster" src="${posterImageURL}" alt="poster1" />
            </div>
            <h2 id="title-movie">${titleMovie}</h2><br>
            <h3 id="rating-movie">${ratingMovie}</h3><br>
            <p id="overview-movie">${overviewMovie}</p><br>
            <p id="release-movie">${releaseMovie}</p>
        </div>
    `);

    moviesList.append(movieContent);
 }

 //function to get info from local storage
 function getCachedData() {
    var data = localStorage.getItem("data");
    if (data) {
      data = JSON.parse(data);
    } else {
      data = {};
    }
    return data;
  }
  //function to save info in local storage
  function saveMoviesInCache(movies) {
    var data = getCachedData();
    data.movies = movies;

    localStorage.setItem("data", JSON.stringify(data));
  }

  function saveGamesInCache(data) {
    var data = getCachedData();
    data.games = games;

    localStorage.setItem("data", JSON.stringify(data));
  }

// action 28

// animated 16

// documentary 99

// drama 18

// family 10751

// fantasy 14

// history 36

// comedy 35

// war 10752

// crime 80

// music 10402

// mystery 9648

// romance 10749

// sci fi 878

// horror 27

// TV movie 10770

// thriller 53

// western 37

// adventure 12
