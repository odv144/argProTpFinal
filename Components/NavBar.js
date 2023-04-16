const NavBar = () => {
  return (
    `<nav class="navbar navbar-expand-lg bg-dark">
    <div class=" navbar bg-dark container mx-2 mx-sm-auto" data-bs-theme="dark">
        <a class="navbar-brand" href="#">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">LogoCorporativo</font>
            </font>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/index.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Inicio</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/team.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Nosotros</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/form.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Servicio</font>
                        </font>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact.html">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Contacto</font>
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