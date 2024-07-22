// MENU
document.querySelector('.menu-oppener').addEventListener('click', ()=>{
    let nav = document.querySelector('header nav');
    nav.classList.toggle('oppened');
});




// SEÇÃO SOBRE - SLIDER

// Definindo a largura do item dinâmicamenete
let totalSlides = document.querySelectorAll(".slider--item").length;
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;


// Definindo a altura do item dinâmicamenete
let slider = document.querySelector('.slider');
let sliderControls = document.querySelector('.slider--controls').style.height = `${slider.clientHeight}px`


//FUNÇÕES PARA MUDAR DE IMAGEM 

let currentSlide = 0;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }

    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin();
}


//Função que faz a "mágica" acontecer
function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);

    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`

}