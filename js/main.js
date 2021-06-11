$(document).ready(function (){
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.development__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        easing:'ease',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 10000,
        waitForAnimate: false,
        responsive:[
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing:'ease',
        infinite: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 10000,
        waitForAnimate: false,
    });
});

$(document).ready(function() {
    $('.mentors__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing:'ease',
        infinite: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 10000,
        waitForAnimate: false,
    });
});