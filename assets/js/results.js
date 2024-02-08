//var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE";
var API_KEY = "AIzaSyDc8pWz32IVDozNbfYqKd3bTcifbladBY4";
var CHANNEL_ID = localStorage.getItem("channelId");
var SEARCH = localStorage.getItem("search");
console.log(CHANNEL_ID);
console.log(SEARCH);

//This function calls on the API key, the channel ID for the specific content creator's channel, and a jQuery for the search input by the user
fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=10&q=${SEARCH}&type=video`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Loop through the items in the data array and display each video with its thumbnail
    data.items.forEach((item) => {
      var videoId = item.id.videoId;
      var videoTitle = item.snippet.title;
      var videoThumbnail = item.snippet.thumbnails.default.url;

      // Create a container div for each video
      var videoContainer = document.createElement("div");

      // Create an image element for the video thumbnail
      var thumbnailImage = document.createElement("img");
      thumbnailImage.src = videoThumbnail;

      // Create a heading element for the video title
      var titleHeading = document.createElement("h3");
      titleHeading.textContent = videoTitle;

      // Append the thumbnail and title elements to the video container
      videoContainer.appendChild(thumbnailImage);
      videoContainer.appendChild(titleHeading);

      // Append the video container to the body or any other desired element in your HTML
      document.body.appendChild(videoContainer);
    });
  })
  .catch((error) => console.error("Error:", error));
