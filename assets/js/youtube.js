var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE";
var CHANNEL_ID = "UCS6s3OidfTU0fMRScTGE_jg";

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let videoId = data.items[0].id.videoId;
    document.getElementById('youtubeEmbed').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById("youtubeEmbed").setAttribute("data-channel", data.items[0].snippet.channelTitle)
  })
  .catch((error) => console.error('Error:', error));