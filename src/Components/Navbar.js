import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src="img/isotipo.png" alt="logo" width="70" height="70"/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Sobre Nosotros</a>
				<a href="/#">Productos</a>
				<a href="/#">Contacto</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
