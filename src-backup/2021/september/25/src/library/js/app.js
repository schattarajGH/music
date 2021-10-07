const ProjectPath = '';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
feather.replace();
//artist carousel
$('.artists').owlCarousel({
    loop:false,
    margin:70,
    nav:false,
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
})
$('.trending').owlCarousel({
    loop:false,
    margin:70,
    nav:false,
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
})

