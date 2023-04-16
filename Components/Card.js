const Card = (alumno) => {
  return (
    `<div class="card rounded-3 student-card shadow">
    <div class=" d-flex ">
        <img src=${alumno.image} style="width: 100%;" class="rounded-top" alt="" srcset=""> 
    </div>
    <div class="p-4 pt-3 text container">
    <div class="mid-container">
    <h5 class="text-center" style="font-family: 'Roboto', sans-serif; color: #000000; font-weight: 700; ">${alumno.name}</h5>
        ${alumno.linkedin? `<div class="my-1">
        <a href=${alumno.linkedin} target="_blank" class="text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; "><i class="bi bi-linkedin"></i></a>
        <a href=${alumno.linkedin} target="_blank" class="ms-1 text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; ">Linkedin</a>
    </div>`: ""}

        ${alumno.portfolio? `<div class="my-1">
        <a href=${alumno.portfolio} target="_blank" class="text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; "><i class="bi bi-briefcase-fill"></i></a>
        <a href=${alumno.portfolio} target="_blank" class="ms-1 text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; ">Portfolio</a>
    </div>`: ""}

        ${alumno.github? `<div class="my-1">
        <a href=${alumno.github} target="_blank" class="text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; "><i class="bi bi-github"></i></a>
        <a href=${alumno.github} target="_blank" class="ms-1 text-dark" style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 500; ">Github</a>
    </div>`:""}
    </div>
        


    <div class="bio">
    <p class="mt-2 " style="font-family: 'Roboto', sans-serif; color: #000000 !important; font-weight: 400; "> ${alumno.bio}</p>
    
    </div>
        
      
  

        
    </div>

</div>`
    
  )
}

export default Card