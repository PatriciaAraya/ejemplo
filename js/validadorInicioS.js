function validadorInicioS() {
    var Usuario, Password, expresionEmail;
    Usuario = document.getElementById("Usuario").value;
    Password = document.getElementById("Password").value;
    expresionEmail = /\w+@\w+\.+[a-z]/;



    if (Password === "" || Usuario === "") {

        alert("Un campo esta vacio");
        return false;
    }

}