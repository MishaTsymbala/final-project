$(function() {
    new WOW().init();
});

$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$('.btn').click(function() {
    $('body, html').animate({
        'scrollTop': 0
    }, 1000)
});

$('.btn').click(function() {
    $('body, html').animate({
        'scrollTop': 0
    }, 1000)
});

$(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
        if ($('.btn').hasClass('slideOutDown')) {
            $('.btn').removeClass('slideOutDown');
        }

        $('.btn').addClass('active animated slideInUp');
    }
    else {
        if ($('.btn').hasClass('active animated slideInUp')) {

            $('.btn').addClass('animated slideOutDown');
            setTimeout(function() {
                $('.btn').removeClass('slideInUp');
            }, 50);

        }
        // $('.btn').removeClass('active animated bounceInLeft');

    }
});
