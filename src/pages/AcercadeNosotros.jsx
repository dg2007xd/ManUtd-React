import React from 'react'
import equipo from '../assets/images/equipo-junto.jpg'
import imgManU from '../assets/images/MANCHESTER-UNITED.png'
import champions from '../assets/images/championscup.png'
import premier from '../assets/images/premiercup.png'
import clubworld from '../assets/images/clubworldcup.png'
import fa from '../assets/images/facup.png'
import estadio from '../assets/images/estadiofake.png'
import amorim from '../assets/images/amorim.jpg'
import firma from '../assets/images/firma.png'

function AcercadeNosotros() {
    return (
        <div className='text-center'>
            <img src={equipo} className='d-block w-100  banners2' alt="" />
            <div className='carousel-text d-block'>
                <h2 className='texto-banner'><b>ACERCA DE NOSOTROS</b></h2>
                <div className='d-flex col justify-content-center'>
                    <p className='texto-corto'>HOME | </p>
                    <p className='texto-corto2'>ACERCA DE NOSOTROS</p>
                </div>
            </div>

            <div className='container padded'>
                <div className='row'>
                    <img className='col img-fluid' src={imgManU} alt="" />
                    <div className='col texto-info'>
                        <h3 className='display-5 d-inline-block'><h3 className='display-5 manutd d-inline-block'>MAN UTD</h3> se basa en los valores de la deportividad y el trabajo en equipo.</h3>
                        <p className='mt-3 texto-acerca text-start'>En el ámbito escolar, los programas de fútbol sientan las bases para los talentos ascendentes. En las escuelas, los entrenadores no son meros instructores, sino mentores que inculcan a sus jugadores disciplina, trabajo en equipo y una sólida ética del trabajo.</p>
                    </div>
                </div>
            </div>

            <div className='padded-campeonatos'>
                <div className='row justify-content-evenly'>
                    <div className='col-2 ms-1 me-1'>
                        <img className='col img-fluid copas' src={champions} alt="" />
                        <p>1967-68 / 1998-99 / 2007-08</p>
                        <h4>CHAMPIONS LEAGUE WINNER</h4>
                    </div>

                    <div className='col-2 ms-1 me-1'>
                        <img className='col img-fluid copas' src={premier} alt="" />
                        <p>2012/2013</p>
                        <h4>13.ª PREMIER LEAGUE WINNER</h4>
                    </div>

                    <div className='col-2 ms-1 me-1'>
                        <img className='col img-fluid copas' src={clubworld} alt="" />
                        <p>21 / 12 / 2008</p>
                        <h4>CLUB WORLD WINNER</h4>
                    </div>

                    <div className='col-2 ms-1 me-1'>
                        <img className='col img-fluid copas' src={fa} alt="" />
                        <p>25 / 05 / 2024</p>
                        <h4>FA CUP WINNER</h4>
                    </div>

                </div>
            </div>

            <div className="container-fluid hero-section padded text-start">
                <div className="container">
                    <div className="row ">

                        <div className="col-md-6 texto-camp">
                            <span className="champions-text">CHAMPIONS</span>
                            <p id='texto-arena' className="text-danger fw-bold small-text">WELCOME TO ARENA</p>
                            <h2 className="fw-bold">WE HAVE A WINNING SPIRIT WITH 45 YEAR OF CUP AND LEAGUE HISTORY</h2>
                            <p className="text-muted">
                                The impact of a football mentor transcends the game itself. Players often see their coaches as mentors and role models. The lessons learned on the field translate into valuable life skills.
                            </p>

                            <button type='button' className='boton mt-5'>
                                <p>READ MORE →</p>
                            </button>
                        </div>


                        <div className="col-md-6 text-center">
                            <img src={estadio} alt="Football Stadium" className="stadiofake" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-fluid text-white d-flex dt-banner row text-start">

                <div className="col sect1 justify-content-center align-items-center">
                    <h2 className="fw-bold display-4 mt-5">
                        "THE SECRET OF VICTORY IS SIMPLE: WORK, DISCIPLINE AND UNSHAKABLE FAITH IN ONE’S STRENGTH"
                    </h2>
                    <div className='row mt-5'>
                        <div className='col dt-info'>
                            <p className="fw-semibold mt-3 dt-text fs-4">RUBEN AMORIM</p>
                            <p className="text-uppercase small dt-text fs-5">General Coach</p>
                        </div>
                        
                        <img src={firma} alt="Firma" className="col mt-3 firma img-fluid" />

                    </div>
                    
                    
                </div>
                <img src={amorim} width={67} alt="" className='col d-flex img-fluid' />
            </div>


        </div>
    )
}

export default AcercadeNosotros