$('.accordion__link-list').show();
$('.accordion .accordion__title').on('click', function () {
    $(this).toggleClass('accordion-open').next().slideToggle()
});

$('.faq .accordion__link-list').hide();