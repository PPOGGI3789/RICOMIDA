$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente.")
    });

    $('body').on('dblclick','h4',function () {
        $(this).css("color",'red');
    });
    $('body').on('click','h4',function () {
        $(this).css("color",'BLACK');
    });

    $('.card-title').click(function(){
        $('.card-text').toggle();
    });
});
