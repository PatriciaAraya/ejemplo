$("#formulario1").validate({
    rules: {
        "txtUsuario": {
            required: true,
        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtContrasena": {
            required: true,
            minlength: 5
        },
        "txtRepetirContrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        }
    }, // --> Fin de reglas
    messages: {
        "txtUsuario": {
            required: 'Ingrese el usuario',
        },
        "txtEmail": {
            required: 'Ingrese email',
            email: 'No cumple formato'
        },
        "txtContrasena": {
            required: 'Ingrese la contraseña',
            minlength: 'Mínimo 5 caracteres'
        },
        "txtRepetirContrasena": {
            required: 'Repita la contraseña',
            equalTo: 'Debe ser igual al campo contraseña'
        }
    } //-->Fin de mensajes

 
});
