// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 
 let goTop = document.querySelector('.go-top');
 //let gowe= document.querySelector('.go-we');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #03989E';  //Color del borde inferior del menu cuando se hace scroll arriba (color red #ff2e63)

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click

/*goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = $('html,body').animate({scrollTop: 0}, 1000);
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('onclick', () => {
  document.body.scrollTop = 700 ;
  document.documentElement.scrollTop = $('html,body').animate({scrollTop: 700}, 1000);
  
});
*/

$('.go-top').click(function(){
  $('html,body').animate({scrollTop: 0}, 1000)

});

$('#abajo').click(function(){
  $('html,body').animate({scrollTop: 700}, 1000)

});


/* Efecto lento en scroll cuando se pulsa en el menu */

$ (function(){

  $('a[href*=#]').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {

          var $target = $(this.hash);

          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

          if ($target.length) {

              var targetOffset = $target.offset().top;

              $('html,body').animate({scrollTop: targetOffset}, 1000);

              return false;

         }

    }

});

});
