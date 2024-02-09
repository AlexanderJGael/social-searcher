/* var API_KEY = "AIzaSyCZmbOSPR6rIQ3IQDcQfzqGsPZLERTiL_c"; */
//var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE";
var API_KEY = "AIzaSyDc8pWz32IVDozNbfYqKd3bTcifbladBY4";
var CHANNEL_ID = localStorage.getItem("channelId");
var SEARCH = localStorage.getItem("search");
console.log(CHANNEL_ID);
console.log(SEARCH);

// This function calls on the API key, the channel ID for the specific content creator's channel, and a jQuery for the search input by the user
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=10&q=${SEARCH}&type=video`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Loop through the items in the data array and display each video with its thumbnail
      data.items.forEach((item) => {
        var videoId = item.id.videoId;
        var videoTitle = item.snippet.title;
        var videoThumbnail = item.snippet.thumbnails.default.url;

        // Create an anchor element for the clickable link
        var link = document.createElement("a");
        link.href = `https://www.youtube.com/watch?v=${videoId}`;
        link.target = "_blank"; // Open the link in a new tab

        // Create a container div for each video
        var videoContainer = document.createElement("div");
        videoContainer.classList.add("flex", "flex-col", "items-center", "justify-center", "items-center", "m-16");
        videoContainer.style.height = "400px"; // Set the height to 300px
        videoContainer.style.width = "400px";

        // Create an image element for the video thumbnail
        var thumbnailImage = document.createElement("img");
        thumbnailImage.classList.add("m-4");
        thumbnailImage.src = videoThumbnail;
        thumbnailImage.style.width = "100%";

        // Create a heading element for the video title
        var titleHeading = document.createElement("h3");
        titleHeading.textContent = videoTitle;

        // Append the thumbnail and title elements to the video container
        videoContainer.appendChild(titleHeading);
        videoContainer.appendChild(thumbnailImage);

        link.appendChild(videoContainer);
        document.getElementById("results").appendChild(link);
      });
    })
  .catch((error) => console.error("Error:", error));

