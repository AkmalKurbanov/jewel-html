var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "auto",
    nationalMode: true,
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
});


$(document).on("click", ".registration-js", function () {
    $('.modal-wrap').addClass('modal-window');
    $('body').css('overflow-y', 'hidden');
});

$(document).on("click", ".close-btn", function () {
    $('.modal-wrap').removeClass('modal-window');
    $('body').css('overflow-y', 'auto');
});

$(document).on("click", ".registration-js", function () {
    $('.mobile-menu').removeClass('open-menu');
    $('.hamburger ').removeClass('hamburger-open');
});
