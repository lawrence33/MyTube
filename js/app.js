// //global variables
var url = 'https://www.googleapis.com/youtube/v3/search';

// Use .submit handler when working with forms
$('.search').on('submit', function(e) {
  e.preventDefault();
  var vidSearch = $('#query').val();
  getVids(vidSearch);
});
//this example works --COPY--
    // $.getJSON('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyA1uLdof4nnB3Ef3japYsj8p6eNcYB6LIc%20&part=snippet,contentDetails,statistics,status', function(data){console.log(data)});

//search YT api for the data matching search
function getVids(vidSearch) {
  //1. variable with search paramaters needed, including API key
  var params = {
    q: 'vidSearch',
    key: 'AIzaSyA1uLdof4nnB3Ef3japYsj8p6eNcYB6LIc',
    part: 'snippet'
      // maxResults: 5
  };
  //2. pull the base URL from url global variable above
  //3. print out data received w/ console.log
  $.getJSON(
    url,
    params,
    function(data) {
      // var dataResults = data.Search;
      console.log(data, 'data');
    });
};
