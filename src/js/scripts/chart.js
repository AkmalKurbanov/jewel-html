let charts = $('.detailed');
let chartsTop = charts.offset().top;
$(window).bind('scroll', function () {
    let windowTop = $(this).scrollTop();
    if (windowTop > chartsTop) {
        $(function () {
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


        });

        $('.total-js').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });


        });
    }
});
