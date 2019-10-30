$('.accordion__link-list').show();
$('.accordion .accordion__title').on('click', function () {
    $(this).toggleClass('accordion-open').next().slideToggle()
});
$('.accordion__link-item').on('click', function () {
    $('.side-bar').removeClass('open-side-bar');
    $('.content-side').removeClass('shaded-bg');
});

$('.faq .accordion__link-list').hide();