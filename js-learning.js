$(document).ready(function() {
    var element = $('#bblue');
    $(window).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 500 ? 'In': 'In')](1000);
    });

    var element2 = $('#bred');
    $(window).scroll(function() {
        element2['fade'+ ($(this).scrollTop()>700 ? 'In' : 'In')](1000);
    });

    $('#contacts li').hover(function () {
        $(this).addClass(' mail active')
    }, function () {
        $(this).removeClass('active')
    });


    $('.mail').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    });
});
