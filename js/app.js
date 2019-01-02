// MENU MOBILE 
$(window).load(function () {

  $(".mobile-inner-header-icon").click(function(){
    $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
    $(".mobile-inner-nav").slideToggle(250);
  });

  $(".mobile-inner-nav a").each(function( index ) {
    $( this ).css({'animation-delay': (index/10)+'s'});
  });

});


$(document).ready(function(){
	
  // Single slider
  $('.owl-carousel.default').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      items:1,
  });

  $('.box-primary-body .owl-carousel.slider').owlCarousel({
    loop:false,
    margin: 20,
    nav:true,
    dots:false,
    items: 1,
    responsive : {
      768 : {
        items : 2
      },
      992 : {
          items : 3
      }
    }
  });

  $('.item .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    items:1,
  });

  /* Slider marcas (OFERTAS ESPECIALES) */
  $('.owl-marcas').owlCarousel({
    loop:false,
    center: true,
    autoplay: false,
    margin:4,
    nav:false,
    dots:false,
    items:4,
    loop: true,
    responsive : {
      768 : {
        items : 6,
      },
      1200 : {
          items : 6,
          loop: false,
      }
    }
  });


  // Cambiar estado de marca avtiva
  $('.owl-marcas .item').click(function(){

    var itemClick = $(this);
    var marca = itemClick.attr('id').toLowerCase();

    $('.owl-marcas .item').removeClass('focus-active').hasClass('focus-active'); // Eliminamos el estado focus-active
    itemClick.addClass('focus-active'); // le agregamos el estado activo al item que le hizo click

    // recorremos todas las galerias de marcas
    $('#galeria-marcas .filtrar').each(function() {
      if(!$(this).hasClass(marca)){
        $(this).fadeOut('normal').addClass('d-none'); // Si la marca es distinta a la del click, esconder
      }else{
        $(this).fadeIn('slow').removeClass('d-none');// Si la marca es igual a la del click, mostrar
      }
    });

  });
  /* FIN Slider marcas (OFERTAS ESPECIALES) */

});