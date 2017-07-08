
var objects = {"Search":[{"Title":"A Very Long Engagement","Year":"2004","imdbID":"tt0344510","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZWI4ZTgwMzktNjk3Yy00OTlhLTg3YTAtMTA1MWVlMWJiOTRiXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg"},{"Title":"The Long Kiss Goodnight","Year":"1996","imdbID":"tt0116908","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTkzOWZkN2QtNDJkYy00OTdjLThlNDQtNDg4MjMyMWE5Y2U5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"A Long Way Down","Year":"2014","imdbID":"tt0458413","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MTg0MDI2Ml5BMl5BanBnXkFtZTgwNzM4MDYwMTE@._V1_SX300.jpg"},{"Title":"A Love Song for Bobby Long","Year":"2004","imdbID":"tt0369672","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MjIxNzY0M15BMl5BanBnXkFtZTcwMzM0NDcyMQ@@._V1_SX300.jpg"},{"Title":"Mandela: Long Walk to Freedom","Year":"2013","imdbID":"tt2304771","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTQ1NDczNV5BMl5BanBnXkFtZTcwNDQyMDU1OQ@@._V1_SX300.jpg"},{"Title":"The Long Goodbye","Year":"1973","imdbID":"tt0070334","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzZhODNiOWYtMmNkNS00OTFhLTkzYzktYTQ4ZmNmZWMyN2ZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"I've Loved You So Long","Year":"2008","imdbID":"tt1068649","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1Njg2ODI1Ml5BMl5BanBnXkFtZTcwMzkzNzQ5MQ@@._V1_SX300.jpg"},{"Title":"The Long Good Friday","Year":"1980","imdbID":"tt0081070","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzNDMxNTQ1OV5BMl5BanBnXkFtZTYwMTA0NDU5._V1_SX300.jpg"},{"Title":"Billy Lynn's Long Halftime Walk","Year":"2016","imdbID":"tt2513074","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NDI1Nzg4OF5BMl5BanBnXkFtZTgwNjYxOTg4ODE@._V1_SX300.jpg"},{"Title":"Long Way Round","Year":"2004","imdbID":"tt0403778","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzODU4MTgxNDleQTJeQWpwZ15BbWU3MDQ1NTgyMDI@._V1._CR15,2,339,480_SY132_CR2,0,89,132_AL_.jpg_V1_SX300.jpg"}],"totalResults":"1705","Response":"True"};

console.log(objects.Search[2].Title);

(function addElement()         {
	var newDiv = document.createElement("div");
	document.body.appendChild(newDiv);
	var h1 = document.createElement('h1');
	newDiv.appendChild(h1);
	h1.textContent = "Movies and series";
	newDiv.setAttribute("id", "mmyDiv");
	var myUl = document.createElement('Ul');
	document.getElementById('mmyDiv').appendChild(myUl);
	myUl.setAttribute("id", "myList");
}());;


(function ListOfMovies()       {
    var mainList = document.getElementById('myList'), i;
	
    for (i = 0; i < objects.Search.length; i = i + 1) {
		var myMovieId = objects.Search[i].Title;
		
		var movieEle = createListEle(myMovieId);
		mainList.appendChild(movieEle);
		
		var h1 = document.createElement('h2');
		movieEle.appendChild(h1);
		h1.textContent =  objects.Search[i].Title;
		
		var p = document.createElement('p');
		movieEle.appendChild(p);
		p.innerHTML = "Year :  " +  objects.Search[i].Year + "<br>" + "imdbID :  " + objects.Search[i].imdbID
			+ "<br>" + "Type :  " + objects.Search[i].Type + "<br>";
		
		var movUrl = document.createElement('a');
		movieEle.appendChild(movUrl);
		movUrl.textContent = "Click here for more";
		movUrl.setAttribute("href", "http://www.imdb.com/title/" + objects.Search[i].imdbID);
		movUrl.setAttribute("target", "_blank");
		
		var movieImg = document.createElement('img');
		movieImg.innerHTML = objects.Search[i].Poster;
		movieImg.setAttribute("src", objects.Search[i].Poster);
		movieEle.appendChild(movieImg);
    }
	
}());

function createListEle(titl)   {
    var listEle = document.createElement('li');

    return listEle;
}
