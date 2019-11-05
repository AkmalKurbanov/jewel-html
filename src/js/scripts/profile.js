$(document).ready(function () {


    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.pr-img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".pr-img-upload").on('change', function () {
        readURL(this);
    });

    $(".pr-avatar-choose").on('click', function () {
        $(".pr-img-upload").click();
    });
});



// select dropdown
$('.select').on('click', function () {
    $(this).toggleClass('slide-down-select');
});
$('.select__option').on('click', function () {
    let value = $(this).attr('data-value');
    $(this).parent().parent().find('.select-type').val(value);
    $(this).parent().parent().find('.select_checked').text(value);
 });
$(document).mouseup(function (e) {
    let div = $(".select");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('slide-down-select');
    }
});
// select dropdown end






