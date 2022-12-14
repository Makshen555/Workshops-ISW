function userLogued() {
    let usuarioLogueado = JSON.parse(sessionStorage.getItem("Usuario"));
    const userLogueado = usuarioLogueado.User;
    document.getElementById("txtUsername").textContent = userLogueado;
    return userLogueado;
}
userLogued();


function cargarUsuario() {
    let a = JSON.parse(sessionStorage.getItem("Usuario"));
    idUser = a.id;
    let Usuarios = JSON.parse(localStorage.getItem("Lista_Usuarios"));
    Usuarios.forEach(usuario => {
        if (usuario.id == idUser) {
            document.getElementById("txtFullName").value = usuario.First_Name + " " + usuario.Last_Name;
            document.getElementById("txtSpeedAverage").value = usuario.SpeedAverage;
            document.getElementById("txtAboutMe").value = usuario.AboutMe;
        }
    });
}
cargarUsuario();

let firstName = "";
let lastName = "";

function dividirNombre() {
    const nombreCompleto = document.getElementById("txtFullName").value;
    let listaNombre = nombreCompleto.split(" ");
    console.log(listaNombre.length);
    if (listaNombre.length == 2) {
        firstName = listaNombre[0];
        lastName = listaNombre[1];
    }
    if (listaNombre.length == 4) {
        firstName = listaNombre[0] + " " + listaNombre[1];
        lastName = listaNombre[2] + " " + listaNombre[3];
    }
    return firstName, lastName;
}

function modUsuario() {
    const fullName = document.getElementById("txtFullName").value;
    const speedAverage = document.getElementById("txtSpeedAverage").value;
    const aboutMe = document.getElementById("txtAboutMe").value;
    if (!fullName || !speedAverage || !aboutMe) {
        alert("No pueden haber campos vacios");
    } else {
        let Users = JSON.parse(localStorage.getItem("Lista_Usuarios"));
        const sessionUser = JSON.parse(sessionStorage.getItem("Usuario"));
        const idUser = sessionUser.id;
        if (!Users) {
            Users = [];
        }
        dividirNombre();
        Users.forEach(user => {
            if (idUser == user.id) {
                user.First_Name = firstName;
                user.Last_Name = lastName;
                user.SpeedAverage = speedAverage;
                user.AboutMe = aboutMe;
                user.id = idUser;
                sessionStorage.setItem("Usuario", JSON.stringify(user));
            }
        });
        localStorage.setItem("Lista_Usuarios", JSON.stringify(Users));
        alert("Usuario Modificado");
        window.location.href = 'PaginaInicial.html';
    }
}
document.getElementById('Save').addEventListener('click', function () {
    modUsuario();
});
/*function modUsuario() {
    const fullName = document.getElementById("txtFullName").value;
    const speedAverage = document.getElementById("txtSpeedAverage").value;
    const aboutMe = document.getElementById("txtAboutMe").value;

    if (!fullName || !speedAverage || !aboutMe) {
        alert("No pueden haber campos vacios");
    } else {
        let Usuarios = JSON.parse(localStorage.getItem("Lista_Usuarios"));
        var idUsuario = sessionStorage.getItem("Usuario");
        if (!Usuarios) {
            Usuarios = [];
        }
        Usuarios.forEach(usuario => {
            if (idRide == ride.ID) {
                usuario.RideName = rideName
                usuario.StartFrom = startFrom
                usuario.EndFrom = endFrom
                usuario.Descripcion = descripcion
                usuario.Departure = departure
                usuario.EstimatedArrival = estimatedArrival
                usuario.Days = checkDays
                usuario.ID = idRide
            }
        });
        localStorage.setItem("Rides", JSON.stringify(Usuarios));
        alert("Usuario Modificado");
        window.location.href = 'PaginaInicial.html';
    }
}*/