function agregarContacto() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    if (nombre && telefono && email) {
        var listaContactos = document.getElementById("listaContactos");

        var nuevoContacto = document.createElement("li");
        nuevoContacto.innerHTML = `<span>${nombre}</span> - <span>${telefono}</span> - <span>${email}</span>`;

        listaContactos.appendChild(nuevoContacto);

        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
    }
}