import React from 'react'
import contactoimg from '../assets/images/contactoimg.jpg'

function Contacto() {
    return (
        <section>
            <div className='text-center'>
                <img src={contactoimg} className='d-block w-100 banners2' alt="" />
                <div className='carousel-text d-none d-md-block'>
                    <h2 className='texto-banner'><b>ACERCA DE NOSOTROS</b></h2>
                    <p className='d-inline-block texto-corto'>HOME | </p> <p className='d-inline-block texto-corto2'>CONTACTO</p>
                </div>
            </div>

            <div className="container padded text-center">
                <div className="row justify-content-evenly">
                    <div className="col-3">
                        <i className="bi bi-geo-alt display-5 text-danger"></i>
                        <h3 className="fw-bold">LOCATION</h3>
                        <p className='text-simple'>Sir Matt Busby Way,<br />987597-50</p>
                    </div>

                    <div className="col-3">
                        <i className="bi bi-telephone display-5 text-danger"></i>
                        <h3 className="fw-bold">PHONES</h3>
                        <p className='text-simple'>44 161 676 7770<br />44 161 868 8001</p>
                    </div>

                    <div className="col-3">
                        <i className="bi bi-envelope display-5 text-danger"></i>
                        <h3 className="fw-bold">EMAIL</h3>
                        <p className='text-simple'>sale@like-themes.com<br />tech@like-themes.com</p>
                    </div>

                    <div className="col-3">
                        <i className="bi bi-clock display-5 text-danger"></i>
                        <h3 className="fw-bold">WORKING HOURS</h3>
                        <p className='text-simple'>Wednesday - Sunday<br />7:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>


            <div>
                <iframe
                    title="Mapa de ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151979.6518528286!2d-2.4175945364743074!3d53.47414203401181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0xc69495f08b49cc49!2sManchester%20United!5e0!3m2!1ses!2spe!4v1740340535817!5m2!1ses!2spe"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="container padded d-flex justify-content-center">
                <div className="col-md-6 p-5 bg-light text-center shadow-sm formulario">
                    <h2 className="fw-bold mb-5">SEND MESSAGE</h2>
                    <p className='text-simple mb-5'>Fill out this form and our specialists will contact you shortly for detailed consultation.</p>

                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control border-0 border-bottom" placeholder="Your name" />
                            </div>
                            <div className="col">
                                <input type="email" className="form-control border-0 border-bottom" placeholder="Your email" />
                            </div>
                        </div>

                        <div className="mb-5">
                            <textarea className="form-control border-0 border-bottom" rows="3" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-danger text-white fw-bold px-5">SUBMIT</button>
                    </form>
                </div>
            </div>



        </section>
    )

}


export default Contacto