function addUser(){
    const name = document.getElementById("txtFirstName").value;
    const lastname = document.getElementById("txtLastName").value;
    const phone = document.getElementById("txtPhone").value;
    const username = document.getElementById("txtUsername").value;
    const password = document.getElementById("txtPassword").value;
    const repeatPassword = document.getElementById("txtRepeatPassword").value;

    if (password != repeatPassword){
        document.getElementById("messages").innerHTML = "Las contrasennas no son iguales.";
    }

    let usersList = JSON.parse(localStorage.getItem("Lista_Usuarios"));
    if(!usersList){
        usersList = [];
    }
    console.log(usersList.length)
    const user = {
        id: usersList.length,
        First_Name: name,
        Last_Name: lastname,
        Phone: phone,
        User:username,
        Password: password,
        SpeedAverage:"" + " km/h",
        AboutMe:""
    }

    usersList.push(user);
    localStorage.setItem("Lista_Usuarios", JSON.stringify(usersList));
    console.log(JSON.parse(localStorage.getItem("Lista_Usuarios")));
    window.location.href = "Autenticacion.html";
}