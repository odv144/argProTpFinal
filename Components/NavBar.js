const NavBar = () => {
  return (
    `<nav class="navbar navbar-expand-lg" style="background-color: #000000 !important;">
    <div class=" navbar container mx-2 mx-sm-auto" data-bs-theme="dark">
        <a class="navbar-brand" href="./index.html">
            <img src="../assets/logo.png" alt="" style="width: 250px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/index.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit; color: #F6F1F1 ;font-family: 'Roboto', sans-serif;">Inicio</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/team.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit; color: #F6F1F1 ;font-family: 'Roboto', sans-serif;">Nosotros</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/form.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit; color: #F6F1F1 ;font-family: 'Roboto', sans-serif;">Servicio</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit; color: #F6F1F1 ;font-family: 'Roboto', sans-serif;">Contacto</font>
                        </font>
                    </a>
                </li>

            </ul>
           
        </div>
    </div>
</nav>`
    
  )
}

export default NavBar