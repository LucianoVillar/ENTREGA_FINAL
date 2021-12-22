import { Link } from "react-router-dom";

export default function Formulario(){
    return (
        <body>
	<header className="header">
	<nav className="nav">
		<a href="/Inicio" className="logo nav-link nav-menu-link_active">RincónCarbonero</a>
		<button className="nav-toggle" aria-label="Abrir menú">
			<i className="fas fa-bars"></i>
		</button>
		<ul className="nav-menu nav-menu_visible">
			<li className="nav-menu-item"><Link to="/Inicio" className="nav-menu-link nav-link">Inicio</Link></li>
			<li className="nav-menu-item"><Link to="/Origen" className="nav-menu-link nav-link">Historia</Link></li>
			<li className="nav-menu-item"><Link to="/Formulario" className="nav-menu-link nav-link">Contacto</Link></li>
		</ul>
	</nav>
	</header>
    <br/><br/><br/><br/><br/>
	<br/><br/><br/><br/><br/>
	<br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/>
<main>
	
<div className="form-box">
<img className="avatar" src={require("../img/escudo.jpg")} alt="Escudo Peñarol" /> 
        <h1>Contactános</h1>
        <form>
            
            <label for="text">Username</label>
            <input type="text" placeholder="Enter Username" />

            
            <label for="email">Correo</label>
            <input type="email" placeholder="Enter Email" />

            
            <label for="number">Celular</label>
            <input type="number" placeholder="Enter Number" />

        
            <label for="text">Mensaje</label>
            <input type="text" placeholder="Enter Message" />

            <input type="submit" value="Enviar"></input>
            

    

        </form>
	</div>
	
</main>

	<br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>


<footer>
	<br/><h4>Segui al club en todas sus redes</h4>
	<br/>
	 	<a href="https://www.youtube.com/user/CAPCanalOficial"><i className="fab fa-youtube iconos"></i></a>
 		<a href="https://instagram.com/OficialCAP/"><i className="fab fa-instagram iconos" ></i></a>
 		<a href="https://twitter.com/OficialCAP/"><i className="fab fa-twitter iconos"></i></a>
 		<a href="https://www.tiktok.com/@oficialcap?lang=es"><i className="fab fa-tiktok iconos"></i></a>
 		<a href="https://www.facebook.com/OficialCAP"><i className="fab fa-facebook iconos"></i></a>
</footer>

</body>

    )
}

