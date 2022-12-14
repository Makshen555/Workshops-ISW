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
    var a = sessionStorage.getItem("VerRide");
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