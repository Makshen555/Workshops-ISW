function userLogued() {
    let usuarioLogueado = JSON.parse(sessionStorage.getItem("Usuario"));
    const userLogueado = usuarioLogueado.User;
    document.getElementById("txtUsername").textContent = userLogueado;
    return userLogueado;
}
userLogued();

const UsuarioLogueado = userLogued();

let checkDays = [];

function cargarDias(listaDias) {
    checkDays = listaDias;
    listaDias.forEach(day => {
        if (day == "Monday") {
            document.getElementById("cbMonday").checked = true;
        }
        else if (day == "Tuesday") {
            document.getElementById("cbTuesday").checked = true;
        }
        else if (day == "Wednesday") {
            document.getElementById("cbWednesday").checked = true;
        }
        else if (day == "Thursday") {
            document.getElementById("cbThursday").checked = true;
        }
        else if (day == "Friday") {
            document.getElementById("cbFriday").checked = true;
        }
        else if (day == "Saturday") {
            document.getElementById("cbSaturday").checked = true;
        }
        else if (day == "Sunday") {
            document.getElementById("cbSunday").checked = true;
        }
        else {
        }
    });
}

function cargarRide() {
    var a = sessionStorage.getItem("Ride");
    let Rides = JSON.parse(localStorage.getItem("Rides"));
    Rides.forEach(ride => {
        if (ride.ID == a) {
            document.getElementById("txtRideName").value = ride.RideName;
            document.getElementById("txtStartFrom").value = ride.StartFrom;
            document.getElementById("txtEndFrom").value = ride.EndFrom;
            document.getElementById("txtDescription").value = ride.Descripcion;
            document.getElementById("txtDeparture").value = ride.Departure;
            document.getElementById("txtEstimatedArrival").value = ride.EstimatedArrival;
            cargarDias(ride.Days);
        }
    });
}
cargarRide();

const checkbox1 = document.getElementById('cbMonday');
const checkbox2 = document.getElementById('cbTuesday');
const checkbox3 = document.getElementById('cbWednesday');
const checkbox4 = document.getElementById('cbThursday');
const checkbox5 = document.getElementById('cbFriday');
const checkbox6 = document.getElementById('cbSaturday');
const checkbox7 = document.getElementById('cbSunday');

function eliminarDia(x) {
    let newDays = []
    checkDays.forEach(day => {
        if (day == x) {

        } else {
            newDays.push(day);
        }
    });
    checkDays = newDays
}

function agregarDia(e, checkbox) {

    if (e.currentTarget.checked) {
        if (checkbox == "Monday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Tuesday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Wednesday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Thursday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Friday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Saturday") {
            checkDays.push(checkbox);
        }
        else if (checkbox == "Sunday") {
            checkDays.push(checkbox);
        }
        else {
            alert("No checkeo nigun dia");
        }
    } else {
        if (checkbox == "Monday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Tuesday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Wednesday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Thursday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Friday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Saturday") {
            eliminarDia(checkbox);
        }
        else if (checkbox == "Sunday") {
            eliminarDia(checkbox);
        }
        else {
            alert("No checkeo nigun dia");
        }
    }
    console.log(checkDays);
}
checkbox1.addEventListener('change', (event) => {
    const cbLunes = document.getElementById('cbMonday').value;
    agregarDia(event, cbLunes);
})
checkbox2.addEventListener('change', (event) => {
    const cbMartes = document.getElementById('cbTuesday').value;
    agregarDia(event, cbMartes);
})
checkbox3.addEventListener('change', (event) => {
    const cbMiercoles = document.getElementById('cbWednesday').value;
    agregarDia(event, cbMiercoles);
})
checkbox4.addEventListener('change', (event) => {
    const cbJueves = document.getElementById('cbMonday').value;
    agregarDia(event, cbJueves);
})
checkbox5.addEventListener('change', (event) => {
    const cbViernes = document.getElementById('cbFriday').value;
    agregarDia(event, cbViernes);
})
checkbox6.addEventListener('change', (event) => {
    const cbSabado = document.getElementById('cbSaturday').value;
    agregarDia(event, cbSabado);
})
checkbox7.addEventListener('change', (event) => {
    const cbDomingo = document.getElementById('cbSunday').value;
    agregarDia(event, cbDomingo);
})

function modRide() {
    const rideName = document.getElementById("txtRideName").value;
    const startFrom = document.getElementById("txtStartFrom").value;
    const endFrom = document.getElementById("txtEndFrom").value;
    const descripcion = document.getElementById("txtDescription").value;
    const departure = document.getElementById("txtDeparture").value;
    const estimatedArrival = document.getElementById("txtEstimatedArrival").value;

    if (!rideName || !startFrom || !endFrom || !descripcion) {
        alert("No pueden haber campos vacios");
    } else {
        let Rides = JSON.parse(localStorage.getItem("Rides"));
        var idRide = sessionStorage.getItem("Ride");
        if (!Rides) {
            Rides = [];
        }
        Rides.forEach(ride => {
            if (idRide == ride.ID) {
                ride.RideName = rideName
                ride.StartFrom = startFrom
                ride.EndFrom = endFrom
                ride.Descripcion = descripcion
                ride.Departure = departure
                ride.EstimatedArrival = estimatedArrival
                ride.Days = checkDays
                ride.ID = idRide
            }
        });
        localStorage.setItem("Rides", JSON.stringify(Rides));
        alert("Ride Modificado");
        sessionStorage.removeItem(idRide);
        window.location.href = 'PaginaInicial.html';
    }
}
document.getElementById('Save').addEventListener('click', function () {
    modRide();
});