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

$('#search').on('keyup', function () {
    var $this = $(this),
        val = $this.val();

    if (val.length >= 1) {
        $('.pr #search, .pr .pr-input-search').css({'max-width': '100%', 'width': '100%'});
        $('.delete-search').show();
    } else {
        $('#search').css('max-width', '192px');
    }
});


$('.delete-search').on('click', function () {
    $('.pr #search,.pr .pr-input-search').css('max-width', '192px');
    $('#search').val('');
    $(this).hide();
});


// select dropdown
$('.select').on('click', function () {
    $(this).children('.select__dropdown').slideToggle(300);
});
$('.select__option').on('click', function () {
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
});
$(document).mouseup(function (e) {
    let div = $(".select");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.select__dropdown').slideUp();
    }
});
// select dropdown end


