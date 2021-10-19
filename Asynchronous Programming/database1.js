var movie = {
    name: "movie",
    releaseDate:"date" ,
    imdbRating: 0,
    poster: "image"
}
var movies = [];

var movie1 = Object.create(movie);
movie1.name = "Bellbottom";
movie1.releaseDate = "August 2021";
movie1.imdbRating = 7.0;
movie1.poster = "https://m.media-amazon.com/images/M/MV5BNjZjNTU2MTQtNGQ5YS00YjQ1LTgwZTctYWNjMGRjMzhkMmVhXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg"


var movie2 = Object.create(movie);
movie2.name = "3 Idiots";
movie2.releaseDate = "December 2009";
movie2.imdbRating = 8.4;
movie2.poster = "https://lh3.googleusercontent.com/proxy/kfPZvruW1xbK7m1bZ9fynxL8EFJg3DxDC1AcputAftmO_6Cm26lJz41o5SJyfgNeCMSnvR6G51C2iTh8H_rbImdznxoWjT0vAxXwaRfbWWWbZniMXUDzqnN_HrIrYOdb";

var movie3 = Object.create(movie);
movie3.name = "Pursuit of happiness";
movie3.releaseDate = "December 2006";
movie3.imdbRating = 8.0;
movie3.poster = "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg";


var movie4 = Object.create(movie);
movie4.name = "Life of Pi";
movie4.releaseDate = "November 2012";
movie4.imdbRating = 7.9;
movie4.poster = "https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg";

var movie5 = Object.create(movie);
movie5.name = "M.S. Dhoni: The Untold Story";
movie5.releaseDate = "September 2016";
movie5.imdbRating = 7.9;
movie5.poster = "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";


var movie6 = Object.create(movie);
movie6.name = "Manjhi – The Mountain Man";
movie6.releaseDate = "August 2015";
movie6.imdbRating = 8.0;
movie6.poster = "https://static.sacnilk.com/articles/entertainment/box_office/1039.jpg";


var movie7 = Object.create(movie);
movie7.name = "Chak De! India ";
movie7.releaseDate = "August 2007";
movie7.imdbRating = 8.2;
movie7.poster = "https://upload.wikimedia.org/wikipedia/en/0/0c/Chak_De%21_India.jpg";


var movie8 = Object.create(movie);
movie8.name = "Lakshya";
movie8.releaseDate = "June 2004";
movie8.imdbRating = 7.9;
movie8.poster = "https://a10.gaanacdn.com/images/albums/8/57208/crop_480x480_57208.jpg";


var movie9 = Object.create(movie);
movie9.name = "Bhaag Milkha Bhaag";
movie9.releaseDate = "July 2013";
movie9.imdbRating = 8.2;
movie9.poster = "https://upload.wikimedia.org/wikipedia/en/4/42/Bhaag_Milkha_Bhaag_poster.jpg";

movies.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9);
localStorage.setItem("moviesList", JSON.stringify(movies));
console.log(movies);
console.log("Hello")




