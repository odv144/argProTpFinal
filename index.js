import Card from "./Components/Card.js"
import teammates from "./team.js"



const app = `<div class="container d-flex  justify-content-center flex-wrap">
${teammates.map((alumno)=>{
    return(
        Card(alumno)
    )
}).join("")}
</div>`

console.log("holo");
$(".root-team").html(app)