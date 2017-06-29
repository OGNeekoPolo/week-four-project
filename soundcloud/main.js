/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
SC.initialize({
  client_id: '8538a1744a7fdaa59981232897501e04',
});

var searchBar = document.querySelector('#search-bar');
var results = document.querySelector('.results');
var button = document.getElementById('search-button');
// var searchForm = document.querySelector('.search-form')

// 2. Create your `onSubmit` event for getting the user's search term
button.addEventListener('click', function(evt){
  evt.preventDefault();
  initialSearch(searchBar.value);
});
  // 3. Create your `fetch` request that is called after a submission




function initialSearch(search){
  // evt.preventDefault();
  SC.get('/tracks', {
    q: search,
    limit: 16
  })
  // .then(function(tracks) {
  //   console.log(tracks);
  //   return tracks;
  // })
  .then(function(json){
    console.log(json);
    for (var i = 0; i < json.length; i++) {
      let trackSquare = json[i];
      let trackName = trackSquare.title;
      let trackCover = trackSquare['artwork_url'];
      let stream = trackSquare.uri;
      console.log(stream);
      // console.log(trackCover);
      var div = document.createElement('div');
      div.setAttribute('class', 'track');
      results.appendChild(div);
      div.addEventListener('click', function(e){
        e.preventDefault();
        alert(trackName);
      });
      // div.setAttribute('onclick', 'playTrack()');
      var image = document.createElement('img');
      image.setAttribute('src', trackCover);
      div.appendChild(image);
      var title = document.createElement('h4');
      title.textContent = trackName;
      div.appendChild(title);
    }
  });
}

initialSearch('');
// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play
