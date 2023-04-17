

const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=Alimentoperro"

let imagen;
await fetch(`${apiUrl}/usuarios`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0].thumbnail);
    imagen = (data.results[0].thumbnail)})
  


  $(".precio").html(`<img src=${imagen} alt="">`)