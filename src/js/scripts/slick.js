var swiper = new Swiper('.slider', {
    effect: 'fade',
    loop: true,
    slidesPerView: 1,
    navigation: {
        prevEl: '.left',
        nextEl: '.right',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575: {}
    }
});
