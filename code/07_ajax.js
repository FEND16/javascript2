var data;
$.get('http://localhost:4000/movies', (response) => {
  console.log(response);
})

$.ajax({
  method: 'GET',
  url: 'http://localhost:4000/movies',
  success: (response) => {
    data = response;
    console.log(response);
    // appendMoviesToHtml(response);
  }
});

// console.log(data);
// appendMoviesToHtml(data);



function postToServer(){
  var info = {
    title: "The Lobster",
    year: "2015",
    genres: ["Drama", "Comedy", "Sci-Fi"],
    ratings: [5,5,6,6,3,2,4]
  }
  $.ajax({
    method: 'POST',
    contentType: 'application/json; charset=UTF-8',
    url:'http://localhost:4000/movies',
    data: JSON.stringify(info),
    success: function(data){
      console.log(data);
    }
  })

}