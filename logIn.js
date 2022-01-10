$(document).ready(function () {
    $("#inicioSesion").on("submit",function(e){
        e.preventDefault();
        const btnLogIn = $("#btnLogIn");

        $.ajax({
            type: "POST",
            url: "https://run.mocky.io/v3/ed8f225f-5154-48fb-8418-c4fd19672a16",
            data: $(this).serialize(),
            beforeSend: function(){
                btnLogIn.attr("disabled","disabled");
            },
            complete:function(data){
                btnLogIn.val("Enviar solicitud de ingreso");
                btnLogIn.removeAttr("disabled");
            },
            success: function(data){
                document.location.replace('/')
            },
            error: function(data){
                alert("Problemas al iniciar sesión");
            }
        });
    });
});