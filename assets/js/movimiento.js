const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelantar-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelantar-pag4");
const btn_atras3 = document.querySelector(".volver-pag3 ");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p"); /*traemos todos los pasos con p */
const progressCheck = document.querySelectorAll(".paso .check"); /*traemos todos los pasos con p */
const num = document.querySelectorAll(".paso .num"); /*traemos todos los pasos con p */
let max = 4; /**cantidad de paginas */
let cont = 1;
var data;
btn_adelante2.addEventListener("click",function(e){
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    if(nombre==""){
        document.getElementById("nombre-error").innerHTML="Este campo no puede quedar vacio";
        document.getElementById("nombre").style.borderColor= "red";
    } else{
        document.getElementById("nombre-error").innerHTML="";
        document.getElementById("nombre").style.borderColor= "lightgrey";
        movPag.style.marginLeft = "-25%";
        num[cont -1].classList.add("active");
        progressCheck[cont -1].classList.add("active");
        progressText[cont -1].classList.add("active");
        cont++;
    }

})

btn_adelante3.addEventListener("click",function(e){
    e.preventDefault();
    var notebook = document.getElementById("notebook");
    if(notebook.checked){
        document.getElementById("falla-impre").style.display="none";
        document.getElementById("falla-notebook").style.display="block";
         
       }else{
           document.getElementById("falla-notebook").style.display="none";
           document.getElementById("falla-impre").style.display="block";
         
       }
    movPag.style.marginLeft = "-50%";
    num[cont -1].classList.add("active");
    progressCheck[cont -1].classList.add("active");
    progressText[cont -1].classList.add("active");
    cont++;
   
})

btn_adelante4.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-75%";
    num[cont -1].classList.add("active");
    progressCheck[cont -1].classList.add("active");
    progressText[cont -1].classList.add("active");
    cont++;
    var notebook = document.getElementById("notebook");
    var enciende = document.getElementById("enciende");
    var imprime = document.getElementById("imprime");
    let equipo;
    let falla;
    if(notebook.checked){
        equipo = "Notebook";
        if(enciende.checked){
            falla = "Enciende sin Imagen";
            // alert("notebook enciende sin imagen")

        }else{
            falla="No enciende nada";
        }
    }else{
        equipo = "Impresora";
        if(imprime.checked){
            falla="Mala calidad en la impresion"
            }else{
                falla="impresora no imprime";
                }
        }
    
    var resul = document.getElementById("resultado");
    data = "<strong>Datos Del Usuario:</strong><br>Nombre: "+ document.getElementById("nombre").value;
    data= data+ "<br>Email: "+ document.getElementById("correo").value;
    data = data+ "<br>Equipo: "+ equipo + "<br>Falla: "+falla;
    resul.innerHTML=data;
})

btn_final.addEventListener("click",function(e){
    e.preventDefault();
    num[cont -1].classList.add("active");
    progressCheck[cont -1].classList.add("active");
    progressText[cont -1].classList.add("active");
    alert("Informacion Envida de forma exitosa");
})

btn_atras1.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";
    num[cont -2].classList.remove("active");
    progressCheck[cont -2].classList.remove("active");
    progressText[cont -2].classList.remove("active");
    cont--;
})

btn_atras2.addEventListener("click",function(e){
    e.preventDefault();

    movPag.style.marginLeft = "-25%";
    num[cont -2].classList.remove("active");
    progressCheck[cont -2].classList.remove("active");
    progressText[cont -2].classList.remove("active");
    cont--;
})
btn_atras3.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    num[cont -2].classList.remove("active");
    progressCheck[cont -2].classList.remove("active");
    progressText[cont -2].classList.remove("active");
    cont--;
})

// function limpiar(){
    
//     document.getElementById("nombre").value="";
//     document.querySelector('input[type="date"]').value=""; /** limpia la fecha */
//     document.getElementById("sexo").value="-1";  /**limpia el select pone la primer opcion */
// }
