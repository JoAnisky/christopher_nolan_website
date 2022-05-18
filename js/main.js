// var scroll = 0;
// var ticking = false;
// function faireQuelqueChose(position_scroll) {
//   faire quelque chose avec la position du scroll
//   console.log(scroll);
//   if (scroll > 363.6363525390625){
//       alert('div atteinte !');
//   }
// }

// window.addEventListener('scroll', function(e) {
//   scroll = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       faireQuelqueChose(scroll);
//       ticking = false;
//     });
//   }

//   ticking = true;
// });
const body = document.body;
const main = document.querySelector('main');
const videoDescContainer = document.querySelector('.video-desc_container');
const btnReadMore = document.querySelector('.btn-read-more');
const videoPlayer = document.querySelector('.video-player');
const carousselContain = document.querySelector('.caroussel-contain');
const movieCard = document.querySelector('.movie-card');

const togg1 = document.getElementById("togg1");
const d1 = document.getElementById("d1");

function togg(){
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "flex";
    }
  };
  togg1.onclick = togg;

movieCard.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value /800;
        var y = e.clientY * moving_value /800;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


body.addEventListener('click', function(){
});

// Section "COMING SOON"
// Fonction qui lance l'animation au click sur le bouton "Read More"

//Event au click sur le bouton READ MORE :
btnReadMore.addEventListener('click', function(){
    //Si le bouton Contient "Read More"
    if (btnReadMore.innerText === "Read More"){
        
    // Alors remplace par "OK"
        btnReadMore.innerText = "Ok";
    }else{

    // Sinon remplace par "Read More"
        btnReadMore.innerText = "Read More";
    }
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

// Parallax effect for Filmography movies

