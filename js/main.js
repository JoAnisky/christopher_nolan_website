const body = document.body;
const videoDescContainer = document.querySelector('.video-desc_container');
const btnReadMore = document.querySelector('.btn-read-more');
const videoPlayer = document.querySelector('.video-player');

// Section "COMING SOON"
// Fonction qui lance l'animation au click sur le bouton "Read More"

//Event au click sur le bouton READ MORE :
btnReadMore.addEventListener('click', function(){
    //Si le bouton Contient "Read More"
    if(btnReadMore.innerHTML === "en savoir plus"){
        // Action à réaliser si la condition est vraie :
        btnReadMore.innerText = "Ok";
    }else{
        btnReadMore.innerText = "en savoir plus"
    };
    // Si vidéo description contient la classe desc-left-anim
    if (videoDescContainer.classList.contains('desc_left_anim')){
    // supprime la classe desc-left-anim
        videoDescContainer.classList.remove('desc_left_anim')

    // et ajoute la classe desc-left-anim (animation inverse)
        videoDescContainer.classList.toggle("desc_right_anim");
    }

    if (videoPlayer.classList.contains('video_right_anim')){
        videoPlayer.classList.remove('video_right_anim')
        videoPlayer.classList.toggle("video_left_anim");
    }
videoDescContainer.classList.toggle("desc_left_anim");
videoPlayer.classList.toggle("video_right_anim");
});

// SECTION 3 - MOVIES
// Movies list script with movies.json
const carousselContain = document.querySelector('.caroussel-contain');
const carousselMovies = document.querySelector('.carousel-movies');
const togg1 = document.getElementById("togg1");
const d1 = document.getElementById("d1");
const exitCross = document.querySelector('.exit_cross');

// Fetch starts here with content creation :
fetch("js/movies.json").then((response) => { 
    // tout le reste du code se place entre accolades sinon l'objet JSON n'existe pas (scope)
    response.json().then((moviesData) => { 
        for (let i=0; i<moviesData.length; i++){
            // Div container movie-card
            let movieCardDiv = document.createElement('DIV');
            movieCardDiv.setAttribute('class', 'movie-card');
            // List Item
            let listItem = document.createElement('LI');
            listItem.setAttribute('class', 'carousel-movie');
            // List Item h2
            let listTitle = document.createElement('H2');
            listTitle.setAttribute('class', 'card-title');
            listTitle.innerText = moviesData[i].title;
            // IMG with attributes
            let listImage = document.createElement('IMG');
            listImage.setAttribute('src', moviesData[i].poster.url)
            listImage.setAttribute('width', moviesData[i].poster.width)
            listImage.setAttribute('height', moviesData[i].poster.height)
            listImage.setAttribute('alt', moviesData[i].poster.alt)
            // Movie Desription
            let movieDescText = document.createElement('P');
            let movieDescDiv = document.createElement('DIV');
            movieDescDiv.setAttribute('class', 'movie-desc');
            movieDescText.innerText = moviesData[i].description;

            carousselMovies.append(listItem);
            listItem.append(movieCardDiv);
            movieCardDiv.append(listTitle);
            movieCardDiv.append(listImage);
            movieCardDiv.append(movieDescDiv);
            movieDescDiv.append(movieDescText);
        }
    });
});

/* SECTION 3 - MOVIES  Parallax Test
Parallax Test
movieCard.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value /800;
        var y = e.clientY * moving_value /800;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

On click movie
function togg(){
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "flex";
    }
}; */

movieCard.addEventListener("click", function(event){
    // Si l'utilisateur clique dans l'élément
      d1.style.display = "flex"
      exitCross.style.display = "flex";

      if (event.target.closest(".movie-card"))return
      // Si l'utilisateur clique en dehors de l'élément, alors faire ceci
})

exitCross.addEventListener("click", function(event){
    // Si l'utilisateur clique dans l'élément
      d1.style.display = "none"
      exitCross.style.display = "none";
      if (event.target.closest(".movie-card"))return
      // Si l'utilisateur clique en dehors de l'élément, alors faire ceci
})

document.addEventListener('keypress', logKey);
function logKey(e) {
  console.log(` ${e.code}`);
}