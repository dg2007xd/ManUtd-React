import React from 'react'
import equipo from '../assets/images/equipo-junto.jpg'
import imgManU from '../assets/images/MANCHESTER-UNITED.png'
import champions from '../assets/images/championscup.png'
import premier from '../assets/images/premiercup.png'
import clubworld from '../assets/images/clubworldcup.png'
import fa from '../assets/images/facup.png'
import estadio from '../assets/images/estadiofake.png'

function AcercadeNosotros() {
    return (
        <div className='text-center'>
            <img src={equipo} className='d-block w-100  banners2' alt="" />
            <div className='carousel-text d-block'>
                <h2 className='texto-banner'><b>ACERCA DE NOSOTROS</b></h2>
                <p className='d-inline-block texto-corto'>HOME | </p> <p className='d-inline-block texto-corto2'>ACERCA DE NOSOTROS</p>
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

            <div className="container-fluid hero-section padded">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <span className="champions-text">CHAMPIONS</span>
                            <p className="text-danger fw-bold small-text">WELCOME TO ARENA</p>
                            <h2 className="fw-bold">WE HAVE A WINNING SPIRIT WITH 45 YEAR OF CUP AND LEAGUE HISTORY</h2>
                            <p className="text-muted">
                                The impact of a football mentor transcends the game itself. Players often see their coaches as mentors and role models. The lessons learned on the field translate into valuable life skills.
                            </p>
                            <button className="btn btn-danger">READ MORE →</button>
                        </div>


                        <div className="col-md-6 text-center">
                            <img src={estadio} alt="Football Stadium" className="stadiofake"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcercadeNosotros