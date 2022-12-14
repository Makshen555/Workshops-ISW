function cargarRides() {
    const rides = JSON.parse(localStorage.getItem("Rides"));
    const table = document.getElementById('ridesTable');

    if (rides) {
        let rows = "";
        rides.forEach((ride, index) => {
            let row = `<tr>`;
            row += `<td>${ride.RideName}</td>`;
            row += `<td>${ride.StartFrom}</td>`;
            row += `<td>${ride.EndFrom}</td>`;
            row += `<td> <a onclick="verRide(${ride.ID})" class="btnView">View</a>`;
            rows += row + "</tr>";
        });
        table.innerHTML = table.innerHTML + rows;
    }
}
cargarRides();

function verRide(a) {
    sessionStorage.setItem('VerRide', a);
    window.location.href = "PaginaVerRide.html";
}

function filtrarRides() {
    const table = document.getElementById('ridesTable');
    const start = document.getElementById("aut").value;
    const end = document.getElementById("aut2").value;
    let Rides = JSON.parse(localStorage.getItem("Rides"))
    let filtrado = Rides.filter(ride => ride.StartFrom == start && ride.EndFrom == end)
    let rows = "";
    filtrado.forEach(filtro => {
        let row = `<tr>`;
        row += `<td>${filtro.RideName}</td>`;
        row += `<td>${filtro.StartFrom}</td>`;
        row += `<td>${filtro.EndFrom}</td>`;
        row += `<td> <a onclick="verRide(${filtro.ID})" class="btnView">View</a>`;
        rows += row + "</tr>";
    });
    table.innerHTML = rows;
}
var filtrar = document.getElementById("find");
filtrar.addEventListener('click', function () {
    filtrarRides();
});