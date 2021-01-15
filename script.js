function randomMovie(){
    let length = data.Movies.length;
    let movieId = Math.floor(Math.random() * length);
    return movieId;
}

function InsertTitle(){
    let movie = randomMovie()
    let MovieName = document.getElementById("MovieName")
    let MoviePoster = document.getElementById("MoviePoster")
    let Youtube = document.getElementById("Youtube")
    MovieName.innerHTML = data.Movies[movie].Movie
    MoviePoster.src = data.Movies[movie].Poster
    Youtube.src = data.Movies[movie].Trailer
    setImageVisible("MoviePoster",true)
    setImageVisible("Youtube",true)

}

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

document.addEventListener('DOMContentLoaded', function() {
setImageVisible("MoviePoster",false)
setImageVisible("Youtube",false)
})