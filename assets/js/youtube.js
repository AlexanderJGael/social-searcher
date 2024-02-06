var API_KEY = "AIzaSyCZmbOSPR6rIQ3IQDcQfzqGsPZLERTiL_c";
var CHANNEL_ID = "UCS6s3OidfTU0fMRScTGE_jg";
localStorage.setItem("channelId", CHANNEL_ID)

//This calls on the API key and channel ID to display the most recent YouTube upload in the card on the website on load
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let videoId = data.items[0].id.videoId;
    document.getElementById('youtubeEmbed').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById("youtubeEmbed").setAttribute("data-channel", data.items[0].snippet.channelTitle)
  })
  .catch((error) => console.error('Error:', error));