function userLogued() {
    let usuarioLogueado = JSON.parse(sessionStorage.getItem("Usuario"));
    const userLogueado = usuarioLogueado.User;
    document.getElementById("txtUsername").textContent = userLogueado;
    return userLogueado;
}
userLogued();

const UsuarioLogueado = userLogued();
let checkDays = [];

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
    const cbJueves = document.getElementById('cbThursday').value;
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

function addRide() {
    const rideName = document.getElementById("txtRideName").value;
    const startFrom = document.getElementById("txtStartFrom").value;
    const endFrom = document.getElementById("txtEndFrom").value;
    const descripcion = document.getElementById("txtDescription").value;
    const departure = document.getElementById("txtDeparture").value;
    const estimatedArrival = document.getElementById("txtEstimatedArrival").value;
    const username = UsuarioLogueado;
    console.log(username);

    if (!rideName || !startFrom || !endFrom || !descripcion || !departure || !estimatedArrival || (checkDays.length == 0)) {
        alert("No pueden haber campos vacios");
    } else {
        let Rides = JSON.parse(localStorage.getItem("Rides"));
        if (!Rides) {
            Rides = [];
        }
        const ride = {
            RideName: rideName,
            StartFrom: startFrom,
            EndFrom: endFrom,
            Descripcion: descripcion,
            ID: Rides.length,
            Departure: departure,
            EstimatedArrival: estimatedArrival,
            Created: UsuarioLogueado,
            Days: checkDays
        }
        Rides.push(ride);
        localStorage.setItem("Rides", JSON.stringify(Rides));
        console.log(JSON.parse(localStorage.getItem("Rides")));
        window.location.href = "PaginaInicial.html";
    }
}

var guardar = document.getElementById("Save");
guardar.addEventListener('click', function () {
    addRide();
});