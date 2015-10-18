$(document).ready(function(){





//This allows you to type somthing in the text box, click submit and it searches through the url
  $('#search-term').click(function(event){
    event.preventDefault();
    //value inside of the text area
    var searchTerm = $('#query').val();
    //function that gets results
    getRequest(searchTerm);
    //function that shows results on the html page
    showResults(results);
  })
})





//function that gets reults
function getRequest(searchTerm){
	var searchTerm = $('#query').val();
  var params = {
    part: 'snippet',
    r: 'json',
    q:  "searchTerm",
    key: "AIzaSyBFIKVdUujJpKwlKFb9lavQyc1QT88QBO8"
  };

  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(params, function(data){
    showResults(data.Search);
  })
}





//function that shows reulsts on web page
function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    //console.log(value.Title);

  })
  $('#search-results').html(html);
}










