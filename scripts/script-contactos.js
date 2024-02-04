

function goToAddContactPage() {
    window.location.href = "../pages/nuevoContacto.html";
}

function viewContactDetails(contactName) {
    let detallesPages = {
        'Diego Marroquin': 'detallesDiego.html',
        'Lucciano Maquin': 'detallesLucciano.html',
        'Brandon Marroquin': 'detallesBrandon.html',
        'Luis Vaquin': 'detallesLuis.html',
        'Braulio Echeverria': 'detallesBraulio.html'
    };

    let detallesPage = detallesPages[contactName];

    if (detallesPage) {
        window.location.href = "../pages/" + detallesPage + "?contact=" + encodeURIComponent(contactName);
    } else {
        console.error("Página de detalles no definida para el contacto: " + contactName);
    }
}
