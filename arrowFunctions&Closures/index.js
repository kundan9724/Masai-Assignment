// alert("Hello")
async function movieSearch()
{
    try {
        let input = document.getElementById("movieSearch").value;
        let res = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=4dd27e73`);
        let data = await res.json();
        console.log(data);
        if (input == "")
        {
            var container = document.getElementById("container");
            container.innerHTML = "";
            return;
        }
        else
        displayMovies(data)
        
    }
    catch(err) {
        console.log(err);
    }
    
}

const throttleFunction=(fn, delay)=>
{
    let status = true;
    return function () {
        if (status)
            fn();
    
        status = false;
        setTimeout(() => {
            status = true;
        }, delay)
    
    }
    
}
 function displayMovies(data) {
        var container = document.getElementById("container");
        container.innerHTML = "";
        const div = document.createElement("div");
        div.className = "movies";
        // for (let movie of data) {
        //   const card = createMovieCard(movie);
        //   div.append(card);
        // }
        const card = createMovieCard(data);
        div.append(card);
        container.append(div);
      }

      function createMovieCard(movie) {
        const div = document.createElement("div");

        var img = document.createElement("img");
        img.src = movie.Poster;
        var rating = document.createElement("h4");
        rating.innerHTML = "Imdb Rating: " + movie.imdbRating;
        var h3 = document.createElement("h3");
        h3.innerHTML = "Title: " + movie.Title;
        var h4 = document.createElement("h4");
        h4.innerHTML = "Released: " + movie.Released;
        var type = document.createElement("h4");
        type.innerHTML = "Type: " + movie.Type;
        var left = document.createElement("div");
        var right = document.createElement("div");
        var actors = document.createElement("h4");
        actors.innerHTML = "Actors: " + movie.Actors;
        var genre = document.createElement("h4");
        genre.innerHTML = "Genre: " + movie.Genre;
        var language = document.createElement("h4");
        language.innerHTML = "Language: " + movie.Language;

        left.append(img);
        right.append(h3, rating, h4, type, actors, genre, language);
        right.className = "movieDetails";
        div.append(left, right);
        div.className = "movie";
        return div;
      }
const throtthandler = throttleFunction(movieSearch, 300);
let input = document.getElementById("movieSearch");
input.onkeyup = throtthandler;
let button = document.getElementById("btn");
button.addEventListener("click", movieSearch)
console.log(button.innerHTML)