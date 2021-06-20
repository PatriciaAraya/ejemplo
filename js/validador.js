$("#formulario_registrar").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtUsuario":{
            required: true

        },
        "txtPassword": {
            required: true,
            minlength: 8
        },
        "txtRepetirPassword": {
            required: true,
            equalTo: '#id_txtPassword'
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email',
            email: 'No cumple formato'
        },
        "txtPassword": {
            required: 'Ingrese la contraseña',
            minlength: 'Mínimo 8 caracteres'
        },
        "txtRepetirPassword": {
            required: 'Repita la contraseña',
            equalTo: 'Debe ser igual al campo contraseña'
        },
        "txtUsuario": {
            required: 'Ingrese un usuario',
        }
    } //-->Fin de mensajes
 
});

$("#formularioContacto").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtNombre":{
            required: true

        },
        "txtMensaje": {
            required: true,
        
        }
    },
    messages: {
        "txtEmail": {
            required: 'Ingrese email',
            email: 'No cumple formato'
        },
        "txtMensaje": {
            required: 'Ingrese su mensaje',
        },
        "txtNombre": {
            required: 'Ingrese su nombre',
        }
    } //-->Fin de mensajes
 
});
