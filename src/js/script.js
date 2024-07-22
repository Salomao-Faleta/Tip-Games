// MENU
document.querySelector('.menu-oppener').addEventListener('click', ()=>{
    let nav = document.querySelector('header nav');
    nav.classList.toggle('oppened');
});




// SEÇÃO SOBRE - SLIDER

// Definindo a largura do item dinâmicamenete
let sliderItem = document.querySelectorAll(".slider--item").length;
document.querySelector('.slider--width').style.width = `calc(100vw * ${sliderItem})`;


// Definindo a altura do item dinâmicamenete
let slider = document.querySelector('.slider');
let sliderControls = document.querySelector('.slider--controls').style.height = `${slider.clientHeight}px`
