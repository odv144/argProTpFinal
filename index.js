import Card from "./Components/Card.js"

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


$(".root-team").html(app)


