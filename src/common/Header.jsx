import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/manutd.png';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? 'bg-body-tertiary' : 'bg-transparent'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img id='logo' src={logo} alt="Logo" className='img-fluid' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "/" ? "active" : ""}`} to="/">HOME {'>'}{'>'}</Link>
                                <div className='dropdown-content'>
                                    <Link to="/">Home Club</Link>
                                    <Link to="#">Home School</Link>
                                    <Link to="#">Home Pub</Link>
                                    <Link to="#">Home Store</Link>
                                    <Link to="#">Home Club RTL</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "/acercadenosotros" ? "active" : ""}`} to="/acercadenosotros">ABOUT US {'>'}{'>'}</Link>
                                <div className='dropdown-content'>
                                    <Link to="/acercadenosotros">About Us</Link>
                                    <Link to="#">Our Team</Link>
                                    <Link to="#">Testimonials</Link>
                                    <Link to="#">FAQ</Link>
                                    <Link to="#">Gallery</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "#" ? "active" : ""}`} to="#">PRODUCTS {'>'}{'>'}</Link>
                                <div className='dropdown-content'>
                                    <Link to="#">Shop</Link>
                                    <Link to="#">Wishlist</Link>
                                    <Link to="#">Cart</Link>
                                    <Link to="#">Checkout</Link>
                                    <Link to="#">My account</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "#" ? "active" : ""}`} to="#">BLOG {'>'}{'>'}</Link>
                                <div className='dropdown-content'>
                                    <Link to="#">Blog with Sidebar</Link>
                                    <Link to="#">Blog without Sidebar</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "/contacto" ? "active" : ""}`} to="/contacto">CONTACTS {'>'}{'>'}</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto">
                            <li>
                                <Link className={`icono ${location.pathname === "/micuenta" ? "active" : ""}`} to="/micuenta">
                                    <i className="bi bi-person-circle"></i>
                                </Link>
                            </li>
                            <li className='icono'>
                                <i className="bi bi-bag"></i>
                            </li>
                            <li className='icono' onClick={() => setSearchVisible(!searchVisible)}>
                                <i className="bi bi-search"></i>
                            </li>
                        </ul>
                        {searchVisible && (
                            <div className="search-bar">
                                <input type="text" placeholder="Search" />
                                <i className="bi bi-x close-search" onClick={() => setSearchVisible(false)}></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
