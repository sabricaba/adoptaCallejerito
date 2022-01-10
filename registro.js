$(document).ready(function () {
    $("#enviarFormulario").on("submit",function(e){
        e.preventDefault();
        const btnEnviar = $("#btnEnviar");
        
        $.ajax({
            type: "POST",
            url: "https://run.mocky.io/v3/ed8f225f-5154-48fb-8418-c4fd19672a16",
            data: $(this).serialize(),
            beforeSend: function(){
                btnEnviar.attr("disabled","disabled");
            },
            complete:function(data){
                btnEnviar.val("Enviar formulario");
                btnEnviar.removeAttr("disabled");
            },
            success: function(data){
                $(".respuesta").html(data);
            },
            error: function(data){
                alert("Problemas al tratar de enviar el formulario");
            }
        });
    });
});