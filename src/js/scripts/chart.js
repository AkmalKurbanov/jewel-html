$('.chart').each(function () {
    var $chart = $(this),
        size = parseFloat($chart.outerWidth()),
        clearSet;

    $chart.css({
        height: size
    })
        .easyPieChart({
            size: size,
            animate: 2000,
        });

    $(window).on('resize', function () {

        size = parseFloat($chart.outerWidth());

        $chart.css({
            height: size
        });

        $chart.removeData('easyPieChart').find('canvas').remove();
        $chart.easyPieChart({
            size: size,
            animate: 1
        });
    });
});

$(".total-js").each(function () {
    $(this).prop("Counter", 0).animate({Counter: $(this).text()}, {
        duration: 2000,
        step: function (e) {
            $(this).text(Math.ceil(e))
        }
    })
});

// $('.chart').attr('data-percent', total);
// let number = parseInt($('.chart').children().find('.total-js').text());
// let total = (number / 100);


