function userLogued() {
    let usuarioLogueado = JSON.parse(sessionStorage.getItem("Usuario"));
    const userLogueado = usuarioLogueado.User;
    document.getElementById("txtUsername").textContent = userLogueado;
    return userLogueado;
}
userLogued();

const UsuarioLogueado = userLogued();

function cargarRides() {
    const rides = JSON.parse(localStorage.getItem("Rides"));
    const table = document.getElementById('ridesTable');
    console.log(rides);
    if (rides) {
        let rows = "";
        rides.forEach((ride, index) => {
            if (ride.Created == UsuarioLogueado) {
                let row = `<tr>`;
                row += `<td>${ride.RideName}</td>`;
                row += `<td>${ride.StartFrom}</td>`;
                row += `<td>${ride.EndFrom}</td>`;
                row += `<td> <a onclick="editarRide(${ride.ID})" class="btnEditar">Editar</a>  |  <a onclick="eliminarRide(${ride.ID});" class="btnEliminar">Eliminar</a></td>`;
                rows += row + "</tr>";
            }
        });
        table.innerHTML = table.innerHTML + rows;
    }
}
cargarRides();

function editarRide(a) {
    sessionStorage.setItem('Ride', a);
    window.location.href = "PaginaEdicionRide.html";
}
function eliminarRide(x) {
    let rides = JSON.parse(localStorage.getItem("Rides"));
    let newRides = []
    if (confirm("Desea eliminar este ride?")) {
        rides.forEach(ride => {
            if (ride.ID == x) {

            } else {
                newRides.push(ride);
            }
        });
        localStorage.setItem("Rides", JSON.stringify(newRides));
        location.reload();
        cargarRides();
    }
}
function cerrarSesion() {
    const user = JSON.parse(sessionStorage.getItem("Usuario"));
    sessionStorage.removeItem(user);
    window.location.href = "PaginaAccesoPublico.html";
}
document.getElementById("btnCerrarSesion").addEventListener('click', function(){
    cerrarSesion();
});