function validarUsuario(){
    const Personas = JSON.parse(localStorage.getItem('Lista_Usuarios'));
    let username = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;
    if (!username || !password){
        alert("Contraseña o Nombre de Usuario incorrecto.");
    } else {
        if (!Personas) {
            alert("No hay usuarios registrados.");
        } else {
            //inicia sesion
            for (i = 0; i < Personas.length; i++) {
                if (username == Personas[i].User && password == Personas[i].Password) {
                    sessionStorage.setItem('Usuario', JSON.stringify(Personas[i]));
                    window.location.href = 'PaginaInicial.html';
                    break;
                }
                else {
                }
            };
        }
    }
}
document.getElementById("btnLogin").addEventListener('click', function(){
    validarUsuario();
})