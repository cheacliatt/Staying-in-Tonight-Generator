// 8f217cc3f1fc089564adde5523a50099
// movie DB key

$(".movie-moods").on("click", function () {
  var genreEl = $(this).val();

  var queryURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=8f217cc3f1fc089564adde5523a50099&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=" +
    genreEl;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var moviePosterCode = response.results[ranmovie].poster_path;
    var moviePosterURL = "https://image.tmdb.org/t/p/w500/" + moviePosterCode;
    var overviewMovie = response.results[ranmovie].overview;
    var titleMovie = response.result[ranmovie].title;
    var releaseMovie = response.result[ranmovie].release_date;
    var ratingMovie = response.result[ranmovie].vote_average;

    $("").attr("src", moviePosterURL);
    $("").text(titleMovie);
    $("").text(overviewMovie);
    $("").text(releaseMovie);
    $("").text(ratingMovie);
  });
});

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
