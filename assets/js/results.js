
var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE";
var CHANNEL_ID = localStorage.getItem("channelId")
var SEARCH = localStorage.getItem("search")
console.log(CHANNEL_ID)
console.log(SEARCH)
//This function calls on the API key, the channel ID for the specific content creator's channel, and a jQuery for the search input by the user
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=10&q=${SEARCH}&type=video`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.error('Error:', error));





