const body = document.body;
// Menu navBar active links
const menuLinks = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

// Menu - Burger
function activeMenu(){
    let len=sections.length;
    while(--len && window.scrollY + 100 < sections[len].offsetTop){}
    menuLinks.forEach(ltx => ltx.classList.remove("active-link"));
    menuLinks[len].classList.add("active-link")
}

activeMenu();



window.addEventListener("scroll", activeMenu)
// End active links 

// Menu - Burger
let link = document.getElementById('burger-link');
let burger = document.getElementById('burger');
let ul = document.querySelector('.menu-up');

function isEven(n){
    return n % 2 === 0;
}

var mouseClick =0;


link.addEventListener('click', function(e){
    mouseClick++
    e.preventDefault()
    burger.classList.toggle('open');

    if(!isEven(mouseClick)){
        ul.classList.remove('close');    
        ul.classList.add('active');
    }else{
        ul.classList.remove('active');
        ul.classList.add('close');
    }
});
// End menu burger


// Section 1 "Header"
var intElemScrollTop = body.scrollTop;
// Script pour le logo UP (remonter la page)
jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }
        });
    });
});

// Intersection Observer for HEADER

const header = document.querySelector('header');
const titleH1 = document.querySelector('.title');
const titleNavbar = document.querySelector('.container-nolan-title_navbar');
const titleNavbarText = document.querySelector('.nolan-title_navbar');

// // On crée l'observer avant toute chose, l'ordre est important !!
let observer = new IntersectionObserver(function(entries){
    for (let entrie of entries){
        if (entrie.intersectionRatio < 0.52 && header.offsetWidth > 450){
            titleNavbar.style.display ="flex";
            titleNavbarText.classList.toggle('--active');
            titleH1.classList.toggle('title--active');
        }else{
            titleNavbar.style.display ="none";
            titleNavbarText.classList.remove('--active');
            titleH1.classList.remove('title--active');
        }  
        // if (titleNavbarText.classList.contains("--active")){
        //     console.log("contient la classe active");
        // }else{
        // console.log('ne contient pas la classe active');
        // }

        // if (entrie.intersectionRatio > 0.52 && titleNavbarText.classList.contains("--active")){
        //     console.log(('coucou'));
        //     titleNavbarText.classList.remove('--active')
        //     titleNavbarText.classList.add('--inactive');
        // }
    }
}, {
    threshold: 0.52
// Les paramètres d'intersection ICI

});
observer.observe(header);

// Section 2 "COMING SOON"
//const btn1 = document.getElementById("btn1");
//const btn2 = document.getElementById("btn2");
const btnsReadMore = document.querySelectorAll('.btn-read-more');
const videoDescContainer = document.querySelector('.video-desc_container');
const videoPlayer = document.querySelector('.video-player');
const videoDesc = document.querySelector('.video-desc');

// Fonction qui lance l'animation au click sur le bouton "Read More"

function readMore(btnReadMore, index){
    //Selection des container
    const containersDescriptionVideo = document.querySelectorAll('.video-desc_container');
    const videoPlayers = document.querySelectorAll('.video-player');
    console.log(btnReadMore.innerText);
    console.log(btnReadMore.innerText);
    if( btnReadMore.dataset.position === "0" ){
        console.log('hell');
        btnReadMore.innerText = "Ok";
        containersDescriptionVideo[index].style.overflow = 'visible';
        containersDescriptionVideo[index].classList.remove('desc_left_anim');
        containersDescriptionVideo[index].classList.add('desc_left_anim');
        videoPlayers[index].classList.add('video_right_anim');
        videoPlayers[index].classList.remove('video_left_anim');
        btnReadMore.dataset.position = "1";
    }else{
        btnReadMore.innerText = "en savoir plus";
        containersDescriptionVideo[index].style.overflow = 'hidden';
        containersDescriptionVideo[index].classList.add('desc_right_anim');
        containersDescriptionVideo[index].classList.remove('desc_left_anim');
        videoPlayers[index].classList.add('video_left_anim');
        videoPlayers[index].classList.remove('video_right_anim');
    }

}

btnsReadMore.forEach( (btnReadMore, index) =>{
    btnReadMore.addEventListener('click', function(){
        readMore( this, index );
    });
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

// movieCard.addEventListener("click", function(event){
//     // Si l'utilisateur clique dans l'élément
//       d1.style.display = "flex"
//       exitCross.style.display = "flex";

//       if (event.target.cl osest(".movie-card"))return
//       // Si l'utilisateur clique en dehors de l'élément, alors faire ceci
// })

// exitCross.addEventListener("click", function(event){
//     // Si l'utilisateur clique dans l'élément
//       d1.style.display = "none"
//       exitCross.style.display = "none";
//       if (event.target.closest(".movie-card"))return
//       // Si l'utilisateur clique en dehors de l'élément, alors faire ceci
// })

// document.addEventListener('keypress', logKey);
// function logKey(e) {
//   console.log(` ${e.code}`);
// }

// Section 4 Image Gallery
const vignettes = document.querySelectorAll('.gal-pict');
const fullImgContain = document.getElementById('full-img-contain');
const fullImgContainer = document.getElementById('full-img-container');
const fullImgExit = document.querySelector('.full-img-exit_cross');
const rightArrow = document.getElementById('arrow-right');
const leftArrow = document.getElementById('arrow-left');
const fullImg = document.createElement('IMG');
let listImg = "";
fetch('js/lol.json')
    .then( (response) => {
        return response.json();
    })
    .then((galeryImg) => {
        listImg = galeryImg;
        vignettes.forEach(item => {
            item.addEventListener('click', function () {
                for (let i = 0; i < galeryImg.length; i++) {
                    if (item.getAttribute('src') === galeryImg[i].min) {
                        if (!document.getElementById('full')) {
                            fullImg.setAttribute('src', galeryImg[i].full);
                            fullImg.setAttribute('id', 'full');
                            fullImgContain.append(fullImg);
                            fullImgContainer.style.display = 'flex';
                            fullImgExit.style.display = "flex";
                            fullImgContain.dataset.indexpicture = i;
                        } else {
                            fullImgContain.replaceChildren(fullImg);
                        }
                    }
                }
            });
        });
    });

    rightArrow.addEventListener('click', function(){

        const currentIndex = parseInt(fullImgContain.dataset.indexpicture, 10);
        let lastIndex = null;
        if( currentIndex === (vignettes.length - 1) ){
            lastIndex = 0;
            fullImg.setAttribute('src', listImg[lastIndex].full);
        }else{
            lastIndex = currentIndex + 1;
            fullImg.setAttribute('src', listImg[lastIndex].full);
        }
        fullImgContain.dataset.indexpicture = lastIndex;
    });

    leftArrow.addEventListener('click', function(){
        const currentIndex = parseInt(fullImgContain.dataset.indexpicture, 10);
        let lastIndex = null;
        if( currentIndex === 0 ){
            lastIndex = vignettes.length - 1;
            fullImg.setAttribute('src', listImg[lastIndex].full);
        }else{
            lastIndex = currentIndex - 1;
            fullImg.setAttribute('src', listImg[lastIndex].full);
        }
        fullImgContain.dataset.indexpicture = lastIndex;
    });


fullImgExit.addEventListener('click', function(){

    i=0;
    fullImgContainer.style.display = 'none';
    fullImgExit.style.display = "none";
    rightArrow.style.display="block";
    leftArrow.style.display = "block";
    fullImg.remove();
});


const carouselGal = document.getElementById('carousel-gal');
// Section 4 Reponsive Galery
fetch('js/lol.json').then((response) => {
    response.json().then((imgFile) => {
        for (let i=0; i<imgFile.length; i++){

            // Div for IMG
            let pictureCardDiv = document.createElement('DIV');
            pictureCardDiv.setAttribute('class', 'picture-card');

            // List Item
            let listItem = document.createElement('LI');
            listItem.setAttribute('class', 'gallery-list-img');

            // Img creation
            let responsiveImg = document.createElement('IMG');
            responsiveImg.setAttribute('src', imgFile[i].mobile.url);
            responsiveImg.setAttribute('width', imgFile[i].mobile.width);
            responsiveImg.setAttribute('height', imgFile[i].mobile.height);
            responsiveImg.setAttribute('alt', imgFile[i].mobile.alt);

            // Insertion des éléments
            carouselGal.append(listItem);
            listItem.append(pictureCardDiv);
            pictureCardDiv.append(responsiveImg);

        };
    });
});