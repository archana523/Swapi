//getting commands when submit button is clicked  	
$('#btnRun').click(function() {
  document.getElementById("table").innerHTML = "";
  var val = $('#select').val();
      console.log(val);
      var url = 'https://swapi.dev/api/' + val;
  if(val == 'starships'){
      for(var i=1; i<5; i++) {
        var url1 = url + '/?page=' + i;
        console.log(url1);
        //fetching data from API
		fetch(url1, {
 			 method: "GET",
 			 headers: {"Content-type": "application/json;charset=UTF-8"}
		})
		.then(response => response.json()) 
		.then(function (data) {
                appendData(data);
            })
      }
  }
  //comparing which value is selected
  if (val == 'films') {
    		fetch(url, {
 			 method: "GET",
 			 headers: {"Content-type": "application/json;charset=UTF-8"}
		})
		.then(response => response.json()) 
		.then(function (data) {
                appendData(data);
            })
  }
  function appendData(data) {
          console.log(data.results);
          if (val == 'films') {
            document.getElementById("table").innerHTML = "";
            var student = '';
                          // ITERATING THROUGH OBJECTS
                        $.each(data.results, function (key, value) {
  
                            //CONSTRUCTION OF ROWS HAVING
                            // DATA FROM JSON OBJECT
                            student += '<tr>';
                            student += '<td>' + 
                                value.title + '</td>';
  
                            student += '<td>' + 
                                value.director + '</td>';
  
                            student += '<td>' + 
                                value.opening_crawl + '</td>';
  
                            student += '<td>' + 
                                value.episode_id + '</td>';
                          
                              student += '<td>' + 
                                value.producer + '</td>';
                          
                            student += '<td>' + 
                                value.release_date + '</td>';
                          
                            student += '</tr>';
                        });
          }
          if( val == 'starships'){
              var student = '';
                          // ITERATING THROUGH OBJECTS
                        $.each(data.results, function (key, value) {
  
                            //CONSTRUCTION OF ROWS HAVING
                            // DATA FROM JSON OBJECT
                            student += '<tr>';
                            student += '<td>' + 
                                value.name + '</td>';
  
                            student += '<td>' + 
                                value.model + '</td>';
  
                            student += '<td>' + 
                                value.manufacturer + '</td>';
  
                            student += '<td>' + 
                                value.length + '</td>';
                          
                              student += '<td>' + 
                                value.crew + '</td>';
                          
                            student += '<td>' + 
                                value.passengers + '</td>';
                          
                            student += '</tr>';
                        });
          }
                        //INSERTING ROWS INTO TABLE 
                        $('#table').append(student);
            }
	});
        