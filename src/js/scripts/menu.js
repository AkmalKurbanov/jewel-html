if ($(window).width() <= 767) {
    $('.header__nav-wrapper').clone().appendTo('.mobile-menu');
    $('.hamburger').on('click', function () {
        $(this).toggleClass('hamburger-open');
        $('.mobile-menu').toggleClass('open-menu');
        $('body').toggleClass('mobileBody-scroll');
    });
}


$('.nav__item').on('click', function () {
$('.mobile-menu').removeClass('open-menu');
$('body').removeClass('mobileBody-scroll');
$('.hamburger ').removeClass('hamburger-open');
});


