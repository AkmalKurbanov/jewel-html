if ($(window).width() <= 767) {
    $('.header__nav-wrapper').clone().appendTo('.mobile-menu');
}
$('.hamburger').on('click', function () {
    $(this).toggleClass('hamburger-open');
    $('.mobile-menu').toggleClass('open-menu');
  });

