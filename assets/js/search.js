//This returns results when search button is clicked
document.getElementById('search-btn').addEventListener('click', function(event){
    event.preventDefault()
    var search = document.getElementById("search").value
    localStorage.setItem("search", search)
    window.location.assign("results.html")

    youtubeResults();
    spotifyResults();
});