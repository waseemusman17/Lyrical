

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
    items:4,
    nav: true,
    navText: ["<img src='./assets/img/left--icon.svg'>","<img src='./assets/img/right--icon.svg'>"]
});

$('.latest--release_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    autoplay: true,
    // slideTransition: 'linear',
    // autoplaySpeed: 3000,
    smartSpeed: 500,
    items:4,
    nav: true,
    navText: ["<img src='./assets/img/left--icon.svg'>","<img src='./assets/img/right--icon.svg'>"]
});