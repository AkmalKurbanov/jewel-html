var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "auto",
    nationalMode: true,
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
});




