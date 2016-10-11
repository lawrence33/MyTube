//global variables
var url = 'https://www.googleapis.com/youtube/v3/search?';
var pgToken;
var vidSearch;

//search YT api for the data matching search
function getVids(vidSearch) {
  // console.log(vidSearch, 'search');
  //1. variable with search paramaters needed, including API key

  var params = {
    q: vidSearch,
    key: 'AIzaSyA1uLdof4nnB3Ef3japYsj8p6eNcYB6LIc',
    part: 'snippet',
    pageInfo: {
      totalResults: 200,
      resultsPerPage: 5
    }
  };

  //2. pull the base URL from url global variable above   
  $.getJSON(url, params, function(data) {
    var dataResults = data.items;
    postTitles(dataResults);
    pgToken = data.nextPageToken;
    console.log(pgToken, 'token');
    console.log(data, 'data1');
    console.log(dataResults, 'data');
  });
};

function getNextVids(vidSearch, pgToken) {
  console.log(vidSearch, 'vid2');
  console.log(pgToken, 'tokenI')

  var params = {
    q: vidSearch,
    key: 'AIzaSyA1uLdof4nnB3Ef3japYsj8p6eNcYB6LIc',
    part: 'snippet',
    pageToken: pgToken,
    maxResults: 10
      // pageInfo: {
      //   totalResults: 20,
      //   resultsPerPage: 5
  }

  $.getJSON(url, params, function(data) {
    console.log(data, 'data2');
    var dataResults = data;
    postTitles(dataResults.items);
    pgToken = data.nextPageToken;
    console.log(data.nextPageToken, 'dataII');
    console.log(pgToken, 'tokenII')
  });
  return pgToken;
};

function postTitles(items) {
  var html = '';
  var base = "https://www.youtube.com/embed/";

  $.each(items, function(index, info) {
    var snipTitle = info.snippet.title;
    var vidThumb = base + info.id.videoId;
    html += '<p>' + info.snippet.title + '</p>' + '<iframe width="350" height="220" src=' + vidThumb + '>' + '</iframe>' + '<br>' + '<br>';
    console.log(info.snippet.title, 'snip');
    $('.results').html(html)
  });
};

function emptyOut() {
  $('#query').val('');
  // $(ul).empty();
  $('results').empty();
};

$(function() {

  $('.search').on('submit', function(e) {
    e.preventDefault();

    //what is user looking 4
    vidSearch = $('#query').val();
    // console.log(vidSearch);
    // $('.list').append('<li>' + vidSearch + '</li>');

    getVids(vidSearch);
    // emptyOut();

  });

  $('.next').on('click', function(e) {
    e.preventDefault();

    getNextVids(vidSearch, pgToken);
    // console.log(vidSearch, 'global');
    // console.log(pgToken, 'token2');
  });
});