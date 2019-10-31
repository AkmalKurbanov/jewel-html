$('[data-fancybox="images"]').fancybox({
    buttons : [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close',
        'download',
        'thumbs',
    ],
    animationEffect : "fade",
    thumbs : {
        autoStart : true
    }
});

$(document).ready(function() {
    $("#news-window").fancybox().trigger('click');
});





