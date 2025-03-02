import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {[{ img: banner1, text: ['POR QUE', 'AMAD DIALLO', 'FUE EL MVP', 'EN EL ULTIMO PARTIDO'] },
          { img: banner2, text: ['YA LLEGÓ', 'PATRICK DORGU', 'BIENVENIDO'] },
          { img: banner3, text: ['MARCUS RASHFORD', 'DEJARÁ MANCHESTER,', 'BUENA SUERTE'] }]
          .map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={slide.img} className="d-block w-100 banners" alt="..." />
              <div className="carousel-text">
                {slide.text.map((line, i) => (
                  <h2 key={i} className="banner-title">
                    <b>{line.includes(' ') ? line.split(' ').map((word, j) => j === 1 ? <mark key={j}>{word} </mark> : `${word} `) : <mark>{line}</mark>}</b>
                  </h2>
                ))}
                <button type="button" className="boton mt-4">LEER MÁS</button>
              </div>
            </div>
        ))}
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
  );
}

export default Banner;
