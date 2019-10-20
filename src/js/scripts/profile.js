$(document).ready(function() {


    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.pr-img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".pr-img-upload").on('change', function(){
        readURL(this);
    });

    $(".pr-avatar-choose").on('click', function() {
        $(".pr-img-upload").click();
    });
});