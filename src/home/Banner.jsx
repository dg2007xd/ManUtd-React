import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'


function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banners" alt="..." />
                        <div className="carousel-text d-block">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    
                            <h2 className='texto-banner'><b>POR QUE </b><mark> AMAD DIALLO</mark></h2>
                            <h2 className='texto-banner'><b>FUE EL MVP</b></h2>
                            <h2 className='texto-banner'><b>EN EL ULTIMO PARTIDO</b></h2>
    
                            <button type='button' className='boton mt-5'>
                                <p>LEER MÁS</p>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100 banners" alt="..." />
                        <div className="carousel-text d-block">
                          <h2 className='texto-banner'><b>YA LLEGÓ</b></h2>
                          <h2 className='texto-banner'><b><mark>PATRICK DORGU</mark></b></h2>
                          <h2 className='texto-banner'><b>BIENVENIDO</b></h2>

                          <button type='button' className='boton mt-5'>
                                <p>LEER MÁS</p>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 banners" alt="..." />
                        <div className="carousel-text d-block">
                          <h2 className='texto-banner'><b><mark>MARCUS RASHFORD</mark></b></h2>
                          <h2 className='texto-banner'><b>DEJARÁ MANCHESTER,</b></h2>
                          <h2 className='texto-banner'><b>BUENA SUERTE</b></h2>

                          <button type='button' className='boton mt-5'>
                                <p>LEER MÁS</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
  )
}

export default Banner