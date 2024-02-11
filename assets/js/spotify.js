var searchQuery = $("#search").val();
var playlistId = "6lPvKGavrxnoLOlr72v1ET?si=7437b047cd60498f";
var accessToken = 'BQDXS95xfRNJcDQWSB5RGYJoNvzXRSwpMmsORE4R8q_Pc746YHKUNNvwnbk1BUzxVaqoCcKED6TrrZgvn9GLWrXCkOSVuqEUxIHT31ce9MGezXPE31Y';

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

        // Create an anchor element for the clickable link
        var spotifyLink = $("<a>");
        spotifyLink.attr('href', track.track.external_urls.spotify);
        spotifyLink.attr('target', '_blank'); // Open the link in a new tab

        console.log("Track:", trackName);
        console.log("Artist:", trackArtist);
        console.log("Image:", trackImage);

        var musicContainer = $("<div>").addClass("music-container flex flex-col justify-center items-center mr-2");
        musicContainer.css({height: "400px", width: "400px"});
        var nameElement = $("<h3>").text(trackName);
        var imageElement = $("<img>").attr("src", trackImage).addClass("m-4");
        imageElement.css({height: "300px", width: "300px"});
        var artistElement = $("<p>").text("Artist: " + trackArtist);

        musicContainer.append(artistElement);
        musicContainer.append(nameElement);
        musicContainer.append(imageElement);
        spotifyLink.append(musicContainer);
        $("#resultContainer").append(spotifyLink);
      });
    } else {
      console.log("Tracks not found");
      $("#resultContainer").text("Tracks not found");
    }
  })
  .catch((error) => console.error("Error:", error));