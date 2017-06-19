/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
SC.initialize({
  client_id: '8538a1744a7fdaa59981232897501e04',
});

var audio = document.querySelector(".music-player");
var searchBar = document.querySelector("#search-bar");
var results = document.querySelector(".results");
var button = document.getElementById('search-button');

// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission
SC.get('/tracks', {
  q: 'user',
})
.then(function(tracks) {
  console.log(tracks);
  return tracks;
})
.then(function(json){
  json.map(function(name){
    let userName = name.user;
    console.log(userName);
    let userPic = userName['avatar-url'];
    results.createElement();
  });
})
// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
// function validatePIN (pin) {
// let pinApprove = pin.length;
//  if (pinApprove === 4 || 6) {
//    return true;
// } else {
//   return false;
// };
//
// validatePIN("1222");
