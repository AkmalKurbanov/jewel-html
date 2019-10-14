$(function () {
    $('.chart').easyPieChart({
        barColor: '#00b7f4',
        trackColor: '#b6b6b6',
        scaleColor: false,
        lineWidth: 4,
        lineCap: 'circle',
        size: 260,
        animate:{
            duration:2000,
            enabled:true
        },
        onStep: function(from, to, percent) {
            $(this.el).find('.count').text(Math.round(percent));
        }
    });
});