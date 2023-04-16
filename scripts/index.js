import Card from "../Components/Card.js"
import Footer from "../Components/Footer.js";
import NavBar from "../Components/NavBar.js";

let teammates;

const apiUrl = "https://ap-backend-production-6742.up.railway.app"

await fetch(`${apiUrl}/usuarios`)
  .then(response => response.json())
  .then(data => teammates = data.teammates)
  

const app = `<div class="container d-flex  justify-content-center flex-wrap">
${teammates.map((alumno)=>{
    return(
        Card(alumno)
    )
}).join("")}
</div>`


$(".navbar-container").html(NavBar())
$(".root-team").html(app)
$(".footer-container").html(Footer())

