$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        var email = $('#email').val();
        if (!(/\S+@\S+\.\S+/.test(email))) {
          errores += '<p>Ingrese un correo electrónico válido</p>';
          $('#email').css("border-bottom-color", "#F14B4B");
        } else {
          $('#email').css("border-bottom-color", "#d1d1d1");
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }else {
            // Limpiar campos y mostrar mensaje de éxito
            $('#names').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#mensaje').val('');
            alert('Mensaje enviado correctamente');
          }
      
          // CERRANDO MODAL ==============================
          $('#btnClose').click(function(){
            $('.modal_wrap').remove();
          });
        });
      
      });
