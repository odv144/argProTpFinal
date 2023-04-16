const Card = (alumno) => {
  return (
    `<div class="card rounded-3 border border-secondary shadow-lg m-5 student-card" style="width: 300px;  min-width: 300px;" >
    <div class=" d-flex">
        <img src=${alumno.image} style="width: 100%;" class="rounded-top" alt="" srcset="">
    </div>
    <div class="p-4">
        <h5 class="text-center">${alumno.name}</h5>
        ${alumno.linkedin? `<div>
        <i class="bi bi-linkedin"></i>
        <a href=${alumno.linkedin} target="_blank" class="ms-1 text-dark">Linkedin</a>
    </div>`: ""}

        ${alumno.portfolio? `<div>
        <i class="bi bi-briefcase-fill"></i>
        <a href=${alumno.portfolio} target="_blank" class="ms-1 text-dark">Portfolio</a>
    </div>`: ""}

        ${alumno.github? `<div>
        <i class="bi bi-github"></i>
        <a href=${alumno.github} target="_blank" class="ms-1 text-dark ">Github</a>
    </div>`:""}
        
      
  

        <p class="m-0"> ${alumno.bio}</p>
    </div>

</div>`
    
  )
}

export default Card