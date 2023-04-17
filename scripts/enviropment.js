import Footer from "../Components/Footer.js";
import NavBar from "../Components/NavBar.js";


$(".navbar-container").html(NavBar())
$(".footer-container").html(Footer())


const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=Alimentoperro"


await fetch(`${apiUrl}/usuarios`)
  .then(response => response.json())
  .then(data => console.log(data))
  
