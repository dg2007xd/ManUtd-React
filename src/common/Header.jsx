import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/manutd.png';
function Header() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-2 fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img id='logo' src={logo} alt="" className='img-fluid' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link active ms-3 pages dropbtn" href="#scrollspyHeading1" aria-current="page" to="/">HOME {'>'}{'>'}</Link>
                            <div className='dropdown-content'>
                                <Link to="/">Home Club</Link>
                                <Link to="#">Home School</Link>
                                <Link to="#">Home Pub</Link>
                                <Link to="#">Home Store</Link>
                                <Link to="#">Home Club RTL</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link ms-3 pages dropbtn" href="#scrollspyHeading2" aria-current="page" to="/acercadenosotros">ACERCA DE NOSOTROS {'>'}{'>'}</Link>
                            <div className='dropdown-content'>
                                <Link to="/acercadenosotros">About Us</Link>
                                <Link to="#">Our Team</Link>
                                <Link to="#">Testimonials</Link>
                                <Link to="#">FAQ</Link>
                                <Link to="#">Gallery</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link ms-3 pages dropbtn" aria-current="page" to="#">PRODUCTOS {'>'}{'>'}</Link>
                            <div className='dropdown-content'>
                                <Link to="#">Shop</Link>
                                <Link to="#">Wishlist</Link>
                                <Link to="#">Cart</Link>
                                <Link to="#">Checkout</Link>
                                <Link to="#">My account</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link ms-3 pages dropbtn" aria-current="page" to="#">BLOG {'>'}{'>'}</Link>
                            <div className='dropdown-content'>
                                <Link to="#">Blog with Sidebar</Link>
                                <Link to="#">Blog without Sidebar</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 pages" aria-current="page" to="/clientes">CLIENTES</Link>
                        </li>

                        <li><Link className="nav-link ms-3 pages" aria-current="page" to="/contacto">CONTACTO</Link></li>
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
    )
}

export default Header