function mostrarOpcionEscritorio(noEnciende, enciende) {
    noEnciende.style.display = "block";
    enciende.style.display = "block";


}
function mostrarOpcionNotebook(noEnciende, enciende) {
    noEnciende.style.display = "block";
    enciende.style.display = "block";

}
function mostrarOpcionImpresora(noImprime, imprimeRayado) {
    noImprime.style.display = "block";
    imprimeRayado.style.display = "block";

}


function mostrarOpcionesDependientes() {
    var escritorio = document.getElementById("opcion1a");
    var notebook = document.getElementById("opcion1b");
    var impresora = document.getElementById("opcion1c");

    var noEnciende = document.getElementById("opcion2a");
    var enciende = document.getElementById("opcion2b");
    var noImprime = document.getElementById("opcion2c");
    var imprimeRayado = document.getElementById("opcion2d");

    noEnciende.style.display = "none";
    enciende.style.display = "none";
    noImprime.style.display = "none";
    imprimeRayado.style.display = "none";

    if (escritorio.checked) {
        noEnciende.style.display = "block";
        enciende.style.display = "block";
    }  else {
        if (notebook.checked) {
            mostrarOpcionNotebook(noEnciende, enciende);
        } else {
            if (impresora.checked) {
                mostrarOpcionImpresora(noImprime, imprimeRayado);

            }
        }
    }


    var tabActiva = document.querySelector(".tab.active");
    var siguienteTab = tabActiva.nextElementSibling;
    tabActiva.classList.remove("active");
    siguienteTab.classList.add("active");
}

function volverAPasoAnterior() {
    var tabActiva = document.querySelector(".tab.active");
    var anteriorTab = tabActiva.previousElementSibling;
    tabActiva.classList.remove("active");
    anteriorTab.classList.add("active");
}

function irASiguientePaso() {
    var tabActiva = document.querySelector(".tab.active");
    var siguienteTab = tabActiva.nextElementSibling;
    tabActiva.classList.remove("active");
    siguienteTab.classList.add("active");

}

var siguiente = document.getElementById("boton-siguiente").addEventListener("click", mostrarOpcionesDependientes);
var siguiente = document.getElementById("boton-siguiente-1").addEventListener("click", irASiguientePaso);
var anterior = document.getElementById("boton-anterior").addEventListener("click", volverAPasoAnterior);
var anterior = document.getElementById("boton-anterior-1").addEventListener("click", volverAPasoAnterior);