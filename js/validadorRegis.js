function validadorRegis() {
    var Usuario, Contrasena, Email, Contrasenaa, expresionEmail,expresioncontraseña;
    Usuario = document.getElementById("Usuario").value;
    Email = document.getElementById("Email").value;
    Contrasena = document.getElementById("Contrasena").value;
    Contrasenaa = document.getElementById("Contrasenaa").value;
    expresionEmail = /\w+@\w+\.+[a-z]/;
    expresioncontraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



    if (Contrasena === "" || Usuario === "" || Email === "" || Contrasena === "") {

        alert("Un campo esta vacio");
        return false;
    }
    else if (!expresionEmail.test(Email)) {
        alert("El correo NO es valido");
        return false;
    }
    else if (!expresioncontraseña.test(Contrasena)) {
    alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula NO puede tener otros símbolos.");
    return false;
}

else if (Contrasena!=Contrasenaa) {
alert("Las contraseñas no coinciden");
return false;
}
}

jQuery(document).ready(function () {
    // Show password Button
    $("#showpassword").on('click', function () {
 
        var Contrasena = $("#Contrasena");
        var Contrasenaa = $("#Contrasenaa");
 
        var fieldtype = Contrasena.attr('type');
        var fieldtype2 = Contrasenaa.attr('type');
 
        if (fieldtype == 'password' & fieldtype2 == 'password') {
            Contrasena.attr('type', 'text');
            Contrasenaa.attr('type', 'text');
            $(this).text("Ocultar Password");
        } else {
            Contrasena.attr('type', 'password');
            Contrasenaa.attr('type', 'password');
            $(this).text("Ver Password");
        }
 
    });
 
});