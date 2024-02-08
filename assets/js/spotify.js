var searchQuery = $("#search").val();
var playlistId = "6lPvKGavrxnoLOlr72v1ET?si=7437b047cd60498f";
var accessToken = "BQA0_FTs2Xxe8Ug7X7cyQx0YExdHuTZnwVjPmJWWYkYYAipUsbO-aQNYL0CH_wG1uFZ_hOgqMUTIPI1WslQJyNHiOQDqkvo_BJYYlBfXxKod_SSnUDk";

fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?q=${searchQuery}&limit=10`, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (data.tracks.items.length > 0) {
      var tracks = data.tracks.items.slice(0, 10); // Limit to 10 items

      tracks.forEach((track) => {
        var trackName = track.track.name;
        var trackArtist = track.track.artists[0].name;
        var trackImage = track.track.album.images[0].url;

        console.log("Track:", trackName);
        console.log("Artist:", trackArtist);
        console.log("Image:", trackImage);

        var musicContainer = $("<div>").addClass("music-container flex flex-col justify-center items-center");
        musicContainer.css({height: "400px", width: "400px"});
        var nameElement = $("<h3>").text(trackName);
        var imageElement = $("<img>").attr("src", trackImage).addClass("m-4");
        imageElement.css({height: "300px", width: "300px"});
        var artistElement = $("<p>").text("Artist: " + trackArtist);

        musicContainer.append(artistElement);
        musicContainer.append(nameElement);
        musicContainer.append(imageElement);
        $("#resultContainer").append(musicContainer);
      });
    } else {
      console.log("Tracks not found");
      $("#resultContainer").text("Tracks not found");
    }
  })
  .catch((error) => console.error("Error:", error));