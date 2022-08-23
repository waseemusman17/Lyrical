

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
    nav:false,
    dots:false,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    items:4,
});

$('.latest--release_slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    items:4,
});