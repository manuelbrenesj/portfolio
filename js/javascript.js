
function action(){
    var a = document.getElementsByClassName("navChild")
    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle("hide");          
    }
}

//-------------------------------------------------------------//
//PARALLAX
const parallax = document.getElementById("parallax");
const up = document.getElementsByClassName("btn-Up");
//ME
const me1A = document.getElementsByClassName("me1");
const me1B = document.getElementsByClassName("meText1");
const me2A = document.getElementsByClassName("me2");
const me2B = document.getElementsByClassName("meText2");
const me3A = document.getElementsByClassName("me3");
const me3B = document.getElementsByClassName("meText3");
const meFather = document.getElementsByClassName("sectionFather-Me");
//ABOUT
const titleAbout = document.getElementsByClassName("title-About");
const txtAbout = document.getElementsByClassName("txt-About");
const mainCard = document.getElementsByClassName("main-Card");
const sectionAbout = document.getElementsByClassName("sectionFather-About");
//WORK
const titleWork = document.getElementsByClassName("title-Work");
const txtWork = document.getElementsByClassName("txt-Work");
//SLIDER
const imgWeb = document.getElementsByClassName("img-Web");
const imgMobile = document.getElementsByClassName("img-Mobile");
const titleWeb = document.getElementsByClassName("title-Web");
const containerMobile = document.getElementsByClassName("container-5");

window.addEventListener("scroll", function(){

    let offset = window.pageYOffset;
    console.log('Offset: ', offset); //Esto es para ver el scroll en consola

    parallax.style.backgroundPositionY = offset * 0.5 + "px";

    //UP BUTTON
    if(offset > 400){
        
        for(let i = 0; i < up.length; i++){
            up[i].classList.remove('hidden');
            up[i].classList.add('fadeInUpMine');
        } 
    } else if (offset < 400) {
        for(let i = 0; i < up.length; i++){
            up[i].classList.add('hidden');
        } 
    }

    //ME
    if(offset > 400){
        
        for(let i = 0; i < me1A.length; i++){
            me1A[i].classList.remove('hidden');
            me1A[i].classList.add('fadeInUpMine');
        } 
        for(let i = 0; i < me1B.length; i++){
            me1B[i].classList.remove('hidden');
            me1B[i].classList.add('fadeInUp');
        }
    }
    if(offset > 975){
        
        for(let i = 0; i < me2A.length; i++){
            me2A[i].classList.remove('hidden');
            me2A[i].classList.add('fadeInUpMine');
        } 
        for(let i = 0; i < me2B.length; i++){
            me2B[i].classList.remove('hidden');
            me2B[i].classList.add('fadeInUp');
        }
    }
    if(offset > 1525){
        
        for(let i = 0; i < me3A.length; i++){
            me3A[i].classList.remove('hidden');
            me3A[i].classList.add('fadeInUpMine');
        } 
        for(let i = 0; i < me3B.length; i++){
            me3B[i].classList.remove('hidden');
            me3B[i].classList.add('fadeInUp');
        }
    }
    //ABOUT
    if(offset > 2000){

        for(let i = 0; i < titleAbout.length; i++){
            titleAbout[i].classList.remove('hidden');
            titleAbout[i].classList.add('fadeInUpMine');
        } 
        for(let i = 0; i < txtAbout.length; i++){
            txtAbout[i].classList.remove('hidden');
            txtAbout[i].classList.add('fadeInUp');
        }
    }
    if(offset > 2300){

        for(let i = 0; i < mainCard.length; i++){
            mainCard[i].classList.remove('hidden');
            mainCard[i].classList.add('fadeInUpMine');
        } 
    }
    if(offset > 2300){

        for(let i = 0; i < sectionAbout.length; i++){
            sectionAbout[i].classList.remove('margin-600');
        } 
    }
    //WORK
    if(offset > 3300){

        for(let i = 0; i < titleWork.length; i++){
            titleWork[i].classList.remove('hidden');
            titleWork[i].classList.add('fadeInUpMine');
        } 
        for(let i = 0; i < txtWork.length; i++){
            txtWork[i].classList.remove('hidden');
            txtWork[i].classList.add('fadeInUpMine');
        } 
    }
    //SLIDER WEB
    if(offset >= 4100){
        
        for(let i = 0; i < imgWeb.length; i++){
            imgWeb[i].classList.remove('hidden');
            imgWeb[i].classList.add('fadeInUp');
        } 
    }
    if(offset >= 4100){

        for(let i = 0; i < titleWeb.length; i++){
            titleWeb[i].classList.remove('margin-600');
        } 
    }
    if(offset > 4100){

        for(let i = 0; i < titleWeb.length; i++){
            titleWeb[i].classList.remove('hidden-Text');
            titleWeb[i].classList.add('fadeInUpMine');
        } 
    }
    //SLIDER MOBILE
    if(offset > 5100){
        
        for(let i = 0; i < imgMobile.length; i++){
            imgMobile[i].classList.remove('hidden');
            imgMobile[i].classList.add('fadeInUp');
        } 
    }
    if(offset > 5100){

        for(let i = 0; i < containerMobile.length; i++){
            containerMobile[i].classList.remove('hidden');
            containerMobile[i].classList.add('fadeInUpMine');
        } 
    }

})


//-------------------------------------------------------------//

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

//-------------------------------------------------------------//

const hero = document.getElementsByClassName("img-Hero");
const titleHero = document.getElementsByClassName("title-Hero");
const txtHero = document.getElementsByClassName("txt-Hero");
const txtHeroB = document.getElementsByClassName("txt-HeroB");

const menuAbout = document.getElementById("menu-About");
const menuWork = document.getElementById("menu-Work");
const menuContact = document.getElementById("menu-Contact");

let webImage = document.querySelector('img.img-Web');
let webPrevious = document.getElementById('webPrev');
let webNext = document.getElementById('webNext');
let w = 1;

let mobileImage = document.querySelector('img.img-Mobile');
let mobilePrevious = document.getElementById('mobilePrev');
let mobileNext = document.getElementById('mobileNext');
let m = 1;

window.onload = function() {
    //image.style.content = "url(img/mockup-01.png)";
    webImage.src = "img/1.jpg";
    webPrevious.addEventListener('click', wPrev);
    webNext.addEventListener('click', wNext);

    mobileImage.src = "img/mobile-01.png";
    mobilePrevious.addEventListener('click', mPrev);
    mobileNext.addEventListener('click', mNext);

    menuAbout.addEventListener('click', scrollAbout);
    menuWork.addEventListener('click', scrollWork);
    menuContact.addEventListener('click', scrollContact);

    //SHOW HERO WITH TIME
    showHero();

    async function wait(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }
    async function showHero() {
        
        for(let i = 0; i < hero.length; i++){
            hero[i].classList.remove('hidden');
            hero[i].classList.add('fadeInLeft');
            await wait(500);
        };

        txtHero[0].classList.remove('hidden');
        txtHero[0].classList.add('fadeInUpMine');
        txtHeroB[0].classList.remove('hidden');
        txtHeroB[0].classList.add('fadeInUpMine');
        await wait(600);
        titleHero[0].classList.remove('hidden');
        titleHero[0].classList.add('fadeInUpMine');
    }
}  

//WEB
function wPrev(){
    if(w==1){
        w=9;
    }
    w--;
    //image.style.content = "url(img/web-0" + i + ".png)"; AGREGAR IMAGEN POR MEDIO DE CSS
    webImage.src = "img/" + w + ".jpg"; //3 
}
function wNext(){
    if(w<7){ //2, 3
        w+=1;
        webImage.src = "img/" + w + ".jpg";
    } else { //1
        w = 1;
        webImage.src = "img/" + w + ".jpg";
    }
}

//MOBILE          
function mPrev(){
    if(m==1){
        m=4;
    }
    m--;
    mobileImage.src = "img/mobile-0" + m + ".png";
}
function mNext(){
    if(m<3){
        m+=1;
        mobileImage.src = "img/mobile-0" + m + ".png";
    } else {
        m = 1;
        mobileImage.src = "img/mobile-0" + m + ".png";
    }
}

var divisor = document.getElementById("divisor");
var comparisonWidth = document.getElementById("comparison").clientWidth;

function moveDivisor(e) {
    divisor.style.width = (e.offsetX * 100 / comparisonWidth) + "%";
}

function scrollAbout() {
    window.scrollTo(0, 2600);
}
function scrollWork() {
    window.scrollTo(0, 3633);
}
function scrollContact() {

    for(let i = 0; i < me1A.length; i++){

        up[i].classList.remove('hidden');

        me1A[i].classList.remove('hidden');
        me1B[i].classList.remove('hidden');
        me2A[i].classList.remove('hidden');
        me2B[i].classList.remove('hidden');
        me3A[i].classList.remove('hidden');
        me3B[i].classList.remove('hidden');
    } 

    window.scrollTo(0, 8147);
}
















//-------------------------------------------------------------//



// function transition() {

//     document.getElementById("imgID").style.transition = "all 2s";
//     document.getElementById("imgID").style.backgroundColor = "blue";
// }

//var images = ["img/mockup-01.png","img/mockup-02.png","img/mockup-03.png","img/mockup-04.png"];
//var slideA = document.getElementById("fondo").children;
//var slide = document.querySelector('img.imgUI');

// function mySlide(param){

//     if(param === 'next'){
//         if(i<2){
//             i++;
//         } else {
//             i=0;
//         }
//     } else {
//         if(i==0){
//             i=3;
//         }
//         i--;
//     }
//     document.getElementById('slide').src = images[i];
// }

//document.getElementById('titu').innerHTML = "Cambie de nombre por innerHTML";


