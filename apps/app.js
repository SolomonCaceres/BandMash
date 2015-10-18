$(function(){


/*$(document).ready(function(){});*/






/*------This is all about API. Application Programming Interface. This allos us to get data frm a server
using get requests or call back functions and display the data either one by one or
in a list.*------*/






/*
//This returns data from a server. This is a get request or a callback function
$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json',function(data){
	
      console.log(data);
	})
    })
/*
  






/*

//This searches through the Array and finds a specific movie Title
$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search[0].Title;
    console.log(myData);
  })

})

*/







/*
//This searches through the Array and finds all movie titles


  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search;
    $.each(myData, function(index,value){
      console.log(value.Title);
    })
  })
})

*/





/*
//This is a way to create a function that shows the data from the get request. It displays the data in the webconsole
//and it also displays it on the users webpage

$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json',function(data){
	showResults (data.Search);//This is the name of the new function
	})
   })


//This is the function and what it does
//Remember----    += just means youre adding something to the variable. In this case youre adding
//the results of this function to the website (html)

function showResults(results){
	var html='';
	$.each(results, function(index, value){
		html += '<p>' + value.Title + '</p>';//This is putting the data from the server in a paragraph style on the web page
		console.log(value.Title);//This is also logging it into the web console

	})

$('#search-results').html(html); //This is telling the result to get places in a specific div id (search-results)


}


*/









//This allows you to type somthing in the text box, click submit and it searches through the url
  $('#search-term').click(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    //alert();
  })
})


function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  })
}


function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  })
  $('#search-results').html(html);
}









