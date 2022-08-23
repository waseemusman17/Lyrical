

$('.featured--slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    items:1,
});

$('.artist--slider').owlCarousel({
    loop:true,
    margin:40,
    dots:false,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    nav: true,
    navText: ["<img src='./assets/img/left--icon.svg'>","<img src='./assets/img/right--icon.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.latest--release_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    nav: true,
    navText: ["<img src='./assets/img/left--icon.svg'>","<img src='./assets/img/right--icon.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});



// Menu Js
$('.hamButton button').click(function(){
    $(this).toggleClass('active');
    $('.header--menu_nav').toggleClass('menu-active');
    $('html').toggleClass('menu-active');
})