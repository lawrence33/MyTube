// //global variables
var url = 'https://www.googleapis.com/youtube/v3/search';

//what is user looking 4
var vidSearch = $('#query').val();
console.log(vidSearch, 'vids');

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

$(function() {

  //take input from Ux (listener), then search YT for input, then print data
  $('.search').on('click', function(e) {
    e.preventDefault();
    
    getvids(vidSearch);
    
  });
});