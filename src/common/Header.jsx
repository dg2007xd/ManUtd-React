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
                    <div className="offcanvas-body justify-content-space-around align-items-center">
                        <ul className="navbar-nav menu-list list-unstyled align-items-lg-center d-flex gap-md-3 mb-0">
                            <li className="nav-item dropdown">
                                <Link role={`button`} data-bs-toggle={`dropdown`} aria-expanded={`false`}
                                className={`nav-link pages dropdown-toggle dropbtn ${location.pathname === "/" ? "active" : ""}`} to="/" >HOME</Link>
                                <ul className='dropdown-content nav-item dropdown-menu'>
                                    <li><Link className='dropdown-item' to="/">Home Club</Link></li>
                                    <li><Link className='dropdown-item' to="#">Home School</Link></li>
                                    <li><Link className='dropdown-item' to="#">Home Pub</Link></li>
                                    <li><Link className='dropdown-item' to="#">Home Store</Link></li>
                                    <li><Link className='dropdown-item' to="#">Home Club RTL</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link role={`button`} data-bs-toggle={`dropdown`} aria-expanded={`false`}
                                className={`nav-link pages dropdown-toggle dropbtn ${location.pathname === "/acercadenosotros" ? "active" : ""}`} to="/acercadenosotros" >ABOUT US</Link>
                                <ul className='dropdown-content nav-item dropdown-menu'>
                                    <li><Link to="/acercadenosotros">About Us</Link></li>
                                    <li><Link to="#">Our Team</Link></li>
                                    <li><Link to="#">Testimonials</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Gallery</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link role={`button`} data-bs-toggle={`dropdown`} aria-expanded={`false`} 
                                className={`nav-link pages dropdown-toggle dropbtn ${location.pathname === "#" ? "active" : ""}`} to="#" >PRODUCTS</Link>
                                <ul className='dropdown-content nav-item dropdown-menu'>
                                    <li><Link to="#">Shop</Link></li>
                                    <li><Link to="#">Wishlist</Link></li>
                                    <li><Link to="#">Cart</Link></li>
                                    <li><Link to="#">Checkout</Link></li>
                                    <li><Link to="#">My account</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link role={`button`} data-bs-toggle={`dropdown`} aria-expanded={`false`} 
                                className={`nav-link pages dropdown-toggle dropbtn ${location.pathname === "#" ? "active" : ""}`} to="#" >BLOG</Link>
                                <ul className='dropdown-content nav-item dropdown-menu'>
                                    <li><Link to="#">Blog with Sidebar</Link></li>
                                    <li><Link to="#">Blog without Sidebar</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link pages dropbtn ${location.pathname === "/contacto" ? "active" : ""}`} to="/contacto">CONTACTS</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
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
