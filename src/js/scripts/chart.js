$(".total-js").each(function () {
    $(this).prop("Counter", 0).animate({Counter: $(this).text()}, {
        duration: 2000,
        easing: "swing",
        step: function (e) {
            $(this).text(Math.ceil(e))
        }
    })
});