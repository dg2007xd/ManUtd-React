import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/manutd.png';

function Header() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? 'bg-body-tertiary' : 'bg-transparent'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img id='logo' src={logo} alt="Logo" className='img-fluid' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active ms-3 pages" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 pages" to="/acercadenosotros">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 pages" to="#">PRODUCTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 pages" to="#">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 pages" to="/clientes">CLIENTS</Link>
                        </li>
                        <li><Link className="nav-link ms-3 pages" to="/contacto">CONTACTS</Link></li>
                    </ul>
                    <ul className="navbar-nav mx-auto">
                        <li className='icono'>
                            <i className="bi bi-person-circle"></i>
                        </li>
                        <li className='icono'>
                            <i className="bi bi-bag"></i>
                        </li>
                        <li className='icono'>
                            <i className="bi bi-search"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;