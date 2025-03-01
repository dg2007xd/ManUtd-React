import './footer.css';
import logo from '../assets/images/manutd.png';

function Footer() {
  return (
    <div className='main-footer'>
      <div id='prefooter' className='d-flex padded justify-content-center '>
        <div className='col-md-5 justify-content-center align-items-center'>
          <img id='logo2' className='row mb-2' src={logo} alt="" />
          <p className='row'>La conexión entre los aficionados y los clubes en el Campeonato está profundamente arraigada, creando una atmósfera única que resuena con la esencia del deporte rey.</p>
          <div className='row d-inline-flex'>
            <ul>
              <li className='d-inline-block'><i className="bi bi-facebook icon col pe-4 ps-4"></i></li>
              <li className='d-inline-block'><i class="bi bi-instagram icon col pe-4 ps-4"></i></li>
              <li className='d-inline-block'><i class="bi bi-twitter-x icon col pe-4 ps-4"></i></li>
            </ul>

          </div>
        </div>

      </div>

      <footer id="footer">
        <div className="container">
          <p className='d-inline-flex rojo'>Like-themes</p>  &copy; All Rights Reserved - 2025 - <p className='d-inline-flex rojo'>Purchase</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer