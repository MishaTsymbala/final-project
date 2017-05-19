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

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
