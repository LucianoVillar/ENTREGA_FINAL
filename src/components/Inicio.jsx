import { Link } from "react-router-dom";

export default function Inicio() {
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
    <br/><br/><br/><br/><br/><br/><br/>
	<main>
	<div className="container">
        <ul className="slider">
            <li id="slide1">
                <img src="https://ladiaria.com.uy/media/photologue/photos/cache/RS100167_200812310356FGI__1-lpr_900w.JPG" alt="Futsal Tricampeon" />
                <h2>Peñarol tricampeón</h2>
                <p>Peñarol se consagró tricampeón uruguayo de fútbol sala .</p>
            </li>
            <li id="slide2">
                <img src="https://ladiaria.com.uy/media/photologue/photos/cache/RS98655_20211208er-lpr_900w.jpg" alt="Peñarol Campeon Uruguayo 53" />
                <h2>Nadie ganó más</h2>
                <p>Peñarol se consagró campeón uruguayo por 53° vez tras vencer a Plaza Colonia 8-7 en los penales</p>
            </li>
            <li id="slide3">
                <img src="https://media.cdnp.elobservador.com.uy/102020/1603936859661/000_8U38PB.jpg?&cw=790" alt="Ruben Paz nuevo ayudante tecnico" />
                <h2>Nuevo Ayudante Técnico</h2>
                <p>Ruben Paz, el ídolo de Larriera, se sumará al cuerpo técnico de Peñarol en 2022</p>
            </li>
        </ul>

        <ul className="menu">
            <li>
                <a href="#slide1">1</a>
            </li>
            <li>
                <a href="#slide2">2</a>
            </li>
            <li>
                <a href="#slide3">3</a>
            </li>
        </ul>
    </div>	
	</main>

<br/><br/><br/>

<h3><em><a className="boton volver"  href="Inicio">Volver</a></em></h3>
<h3><em><a className="boton siguiente"  href="Origen">Siguiente</a></em></h3>

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