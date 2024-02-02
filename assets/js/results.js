//get results, send array back to html
// var API_KEY = "AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE"
var searchBtn = document.getElementById("search-btn")  

function search() {
  gapi.client.setApiKey('AIzaSyCS9ZrJOwXU9eQOeUGoLmH5TcdW-5xT8RE');
  gapi.client.load('youtube', 'v3', function(){
          makeRequest();
  });
}
                       
function makeRequest(){
  var search = $('#search').val();
  var request = gapi.client.youtube.search.list({
          q: search,
          part: 'snippet', 
          maxResults: 10,   
   }); 
  
  request.execute(function(response)  {                                                                                    
          $('#results').empty()
          var srchItems = response.result.items;                      
          $.each(srchItems, function(index, item){
          vidTitle = item.snippet.title;  
          vidThumburl =  item.snippet.thumbnails.default.url;                 
          vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';                   

          $('#results').append('<pre>' + vidTitle + vidThumbimg + '</pre>');                  
      })  
    })  
 }

 //JSON.stringify/parse?
//add if statement for displaying search results on page
//serachbutton ONCLICK, redirect to results page
//jquery .onClick, function()


//NEW TRY


searchBtn.addEventListener("click", search)

