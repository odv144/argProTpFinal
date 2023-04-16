const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelantar-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelantar-pag4");
const btn_atras3 = document.querySelector(".volver-pag3 ");
const btn_final = document.querySelector(".Fin");
const btn_reset = document.querySelector(".limpiar");
const progressText = document.querySelectorAll(".paso p"); /*traemos todos los pasos con p */
const progressCheck = document.querySelectorAll(".paso .check"); /*traemos todos los pasos con p */
const num = document.querySelectorAll(".paso .num"); /*traemos todos los pasos con p */
let max = 4; /**cantidad de paginas */
let cont = 1;
var data;


btn_adelante2.addEventListener("click", function (e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var nombreError = document.getElementById('nombre-error');
    var correoError = document.getElementById('correo-error');

    // const nombreRegex = /^[a-zA-Z\s]+$/;
    const nombreRegex = /^[\p{L}\s]{3,}$/u;

    if (nombre.value.trim() === '') {
        nombreError.textContent = 'Por favor, ingrese su nombre y apellido';
        nombre.focus();
        return false;
    } else if (!nombreRegex.test(nombre.value)) {
        nombreError.textContent = 'Caracteres del nombre incorrectos';
        nombre.focus();
        return false;
    } else {
        nombreError.textContent = '';

    }
    const correoRegex = /^\S+@\S+\.\S+$/;
    if (correo.value.trim() === '') {
        correoError.textContent = 'Por favor, ingrese su dirección de correo electrónico';
        correo.focus();
        return false;
    } else if (!correoRegex.test(correo.value)) {
        correoError.textContent = 'Por favor, ingrese una dirección de correo electrónico válida';
        correo.focus();
        return false;
    } else {
        correoError.textContent = '';
    }


    document.getElementById("nombre-error").innerHTML = "";
    document.getElementById("nombre").style.borderColor = "lightgrey";
    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont++;


})



btn_adelante3.addEventListener("click", function (e) {
    e.preventDefault();
    var notebook = document.getElementById("notebook");
    if (notebook.checked) {
        document.getElementById("falla-impre").style.display = "none";
        document.getElementById("falla-notebook").style.display = "block";
        document.getElementById("noenciende").checked = "true";

    } else {
        document.getElementById("falla-notebook").style.display = "none";
        document.getElementById("falla-impre").style.display = "block";
        document.getElementById("imprime").checked = "true";

    }

    movPag.style.marginLeft = "-50%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont++;

})

btn_adelante4.addEventListener("click", function (e) {
    e.preventDefault();
    movPag.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont++;
    var notebook = document.getElementById("notebook");
    var enciende = document.getElementById("enciende");
    var imprime = document.getElementById("imprime");
    let equipo;
    let falla;
    if (notebook.checked) {
        equipo = "Notebook";
        if (enciende.checked) {
            falla = "Enciende sin Imagen";
            // alert("notebook enciende sin imagen")

        } else {
            falla = "No enciende nada";
        }
    } else {
        equipo = "Impresora";
        if (imprime.checked) {
            falla = "Mala calidad en la impresion"
        } else {
            falla = "impresora no imprime";
        }
    }

    var resul = document.getElementById("resultado");
    data = "<strong>Datos Del Usuario:</strong><br>Nombre: " + document.getElementById("nombre").value;
    data = data + "<br>Email: " + document.getElementById("correo").value;
    data = data + "<br>Equipo: " + equipo + "<br>Falla: " + falla;
    resul.innerHTML = data;


})

btn_final.addEventListener("click", function (e) {
    e.preventDefault();
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    alert("Informacion Envida Exitosamente");
    convertiPDF();


})

btn_reset.addEventListener('click', function (e) {
    document.getElementById("registrarDatos").reset();
    cont = 1;
    movPag.style.marginLeft = "0%";

    num.forEach(x => {
        x.classList.remove("active");
    });
    //num[cont -1].classList.remove("active");
    //progressCheck[cont -1].classList.remove("active");
    progressCheck.forEach(x => {
        x.classList.remove("active")
    })
    progressText.forEach(x => {
        x.classList.remove("active");
    })
    //progressText[cont -1].classList.revemo("active");

})



btn_atras1.addEventListener("click", function (e) {
    e.preventDefault();
    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont--;
})

btn_atras2.addEventListener("click", function (e) {
    e.preventDefault();

    movPag.style.marginLeft = "-25%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont--;
})
btn_atras3.addEventListener("click", function (e) {
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont--;
})

function convertiPDF() {
    let notebook = document.getElementById("notebook");
    let enciende = document.getElementById("enciende");
    let imprime = document.getElementById("imprime");
    let equipo;
    let falla;
    if (notebook.checked) {
        equipo = "Notebook";
        if (enciende.checked) {
            falla = "Enciende sin Imagen";
            // alert("notebook enciende sin imagen")

        } else {
            falla = "No enciende nada";
        }
    } else {
        equipo = "Impresora";
        if (imprime.checked) {
            falla = "Mala calidad en la impresion"
        } else {
            falla = "impresora no imprime";
        }
    }
    var doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(20, 108, 148);
    doc.text(20, 20, 'Información Recopilada por Formulario Wizard');
    doc.setFontSize(16);
    doc.setTextColor(25, 167, 206);

    doc.text(20, 30, 'Datos Del Usuario: ' + document.getElementById("nombre").value);
    doc.text(20, 40, 'Email: ' + document.getElementById("correo").value);
    doc.text(20, 50, 'Equipo: ' + equipo);
    doc.text(20, 60, 'Falla: ' + falla);
    doc.setFontSize(12);
    doc.text(20, 70, 'El servicio tecnico, se encargará de revisar su problema');
    doc.text(20, 80, 'El mismo se pondra en contacto a la brevedad');
    // doc.addPage();
    //doc.text(20, 20, 'Do you like that?');

    doc.save('Test.pdf');

}
