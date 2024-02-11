// var API_KEY = "AIzaSyCZmbOSPR6rIQ3IQDcQfzqGsPZLERTiL_c";
var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE";
// var API_KEY = "AIzaSyDc8pWz32IVDozNbfYqKd3bTcifbladBY4";
var CHANNEL_ID = "UCS6s3OidfTU0fMRScTGE_jg";
localStorage.setItem("channelId", CHANNEL_ID)

//This calls on the API key and channel ID to display the most recent YouTube upload in the card on the website on load
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    var videoId = data.items[0].id.videoId;
    document.getElementById('youtubeEmbed').innerHTML = `<iframe width="1029" height="530" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById("youtubeEmbed").setAttribute("data-channel", data.items[0].snippet.channelTitle)
  })
  .catch((error) => console.error('Error:', error));