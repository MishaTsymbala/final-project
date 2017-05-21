$(function() {
    $('#send-button').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/mishatsumbala@gmail.com",
            method: "POST",
            data: {
                name: $('#client-name').val(),
                email: $('#client-email').val(),
                subject: $('#client-subject').val(),
                message: $('#message').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form').html('<h3>Thanks!</h3>');
        });
}
