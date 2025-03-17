import { useState, useEffect } from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'

import disputa from '../assets/images/disputa.jpg'
import estadio from '../assets/images/estadio.jpg'
import lesion from '../assets/images/lesion.jpg'
import entrenador from '../assets/images/entrenador.jpg'
import derbi from '../assets/images/derbi.jpg'
import promesas from '../assets/images/promesas.jpg'
import premier from '../assets/images/premier.png'


function Partidos() {

  const [Equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch('/Equipos.json')
      .then(response => response.json())
      .then(data => {
        setEquipos(data);
      });
  }, []);



  return (
    <main className='main-partido'>
      <section className=' padded partido' >
        <div className="container text-center text-white">
          <div className="row justify-content-center">
            <div className="col-md-9 match text-align-center">
              <h3 className="texto-partido d-flex justify-content-center ">SIGUIENTE PARTIDO</h3>
              <div className='sig-match'>
                <img className='img-fluid d-inline-flex logo-club' src={logo1} alt="" />
                <h2 className='texto-clubs display-5 d-inline-flex'>MANCHESTER UNITED</h2>
                <div className='display-5 d-inline-flex simbolos'><b>- : -</b> </div>
                <h2 className='texto-clubs display-5 d-inline-flex'>LEICESTER CITY</h2>
                <img className='img-fluid d-inline-flex logo-club' src={logo2} alt="" />
              </div>
              <p className='lead'>FEBRERO 7, 2525, OLD TRAFFORD</p>
              <p className='fs-3'>3:00pm</p>
            </div>
          </div>
        </div>
      </section>

      <div className='padded-partidos pasados'>
        <div className="text-center">
          <div className="row d-flex justify-content-center">
            {/* Primer Cuadro */}
            <div className="col-md-3 cuadros text-center justify-content-center ms-2 me-2 mb-3">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid logos' src={logo1} alt="United Logo" />
                </div>
                <div className="col">
                  <p className='texto-pasados mb-3'>PREMIER LEAGUE</p>

                  <div className="row d-flex numeros  mt-3">
                    <div className="col">
                      <p className='marcador'>0 </p>
                    </div>
                    <div className="col">
                      <p className='simbolo-pasado'>:</p>
                    </div>
                    <div className="col">
                      <p className='marcador'>2</p>
                    </div>
                  </div>
                  <p className='fecha-pasada'>Febrero 02, 2525</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    Crystal Palace
                  </h4>
                  <img className='img-fluid logos' src={logo3} alt="" />
                </div>
              </div>
            </div>

            {/* Segundo Cuadro */}
            <div className="col-md-3 cuadros text-center justify-content-center ms-2 me-2 mb-3">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid logos' src={logo1} alt="United Logo" />
                </div>
                <div className="col">
                  <p className='texto-pasados mb-3'>EUROPA LEAGUE</p>

                  <div className="row d-flex numeros  mt-3">
                    <div className="col">
                      <p className='marcador'>2 </p>
                    </div>
                    <div className="col">
                      <p className='simbolo-pasado'>:</p>
                    </div>
                    <div className="col">
                      <p className='marcador'>0</p>
                    </div>
                  </div>
                  <p className='fecha-pasada'>Enero 30, 2525</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    FCSB
                  </h4>
                  <img className='img-fluid logos' src={logo4} alt="" />
                </div>
              </div>
            </div>

            {/* Tercer Cuadro */}
            <div className="col-md-3 cuadros text-center justify-content-center ms-2 me-2 mb-3">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid logos' src={logo1} alt="United Logo" />
                </div>
                <div className="col">
                  <p className='texto-pasados mb-3'>PREMIER LEAGUE</p>

                  <div className="row d-flex numeros  mt-3">
                    <div className="col">
                      <p className='marcador'>1 </p>
                    </div>
                    <div className="col">
                      <p className='simbolo-pasado'>:</p>
                    </div>
                    <div className="col">
                      <p className='marcador'>0</p>
                    </div>
                  </div>
                  <p className='fecha-pasada'>Enero 26, 2525</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    Fulham
                  </h4>
                  <img className='img-fluid logos' src={logo5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container padded mt-4">
        <div className="row">

          <div className="col-md-8">
            <h3 className="fw-bold text-uppercase fs-1">Recent Club News</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="news-card">
                  <span className="badge bg-danger position-absolute">PLAYERS</span>
                  <img src={disputa} className="img-fluid img-new" />
                  <div className="p-3">
                    <small className="text-muted">October 14, 2522</small>
                    <h5 className="fw-bold">Premier League Showdown: Top Teams Clash in Weekend Battle</h5>
                    <p>National league football stadiums serve as iconic symbols of passion...</p>
                    <span className="text-muted">⚽ 333 | 💬 0</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="news-card">
                  <span className="badge bg-danger position-absolute">STADIUM</span>
                  <img src={estadio} className="img-fluid img-new" />
                  <div className="p-3">
                    <small className="text-muted">September 10, 2522</small>
                    <h5 className="fw-bold">Transfer Rumors Swirl as Deadline Day Approaches</h5>
                    <p>National league football stadiums serve as iconic symbols of passion...</p>
                    <span className="text-muted">⚽ 231 | 💬 0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row small-news">
              <div className="col-md-3 mb-2">
                <img src={lesion} className="img-fluid Snews" />
                <p><small><strong>August 5, 2521</strong></small></p>
                <p>Injury woes continue for star striker ahead of crucial match</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={entrenador} className="img-fluid Snews" />
                <p><small><strong>July 7, 2521</strong></small></p>
                <p>Managerial shake-up: Surprise appointment at title contender</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={derbi} className="img-fluid Snews" />
                <p><small><strong>June 4, 2521</strong></small></p>
                <p>VAR controversy strikes again in thrilling derby match</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={promesas} className="img-fluid Snews" />
                <p><small><strong>June 4, 2521</strong></small></p>
                <p>Young Talent Shines: Breakout Stars Making Wavesin EPL</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase fs-1"><img src={premier} alt="Premier League" />Premier League</h3>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="text-white">
                  <tr>
                    <th className='table-recurso'></th>
                    <th className='table-recurso'>Club</th>
                    <th className='table-recurso'>PJ</th>
                    <th className='table-recurso'>G</th>
                    <th className='table-recurso'>E</th>
                    <th className='table-recurso'>P</th>
                    <th className='table-recurso'>GF</th>
                    <th className='table-recurso'>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {Equipos.filter(team => team.id === 1).map((team) => (
                    <tr key={team.id}>
                      <td className='table-champions'>1</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 2).map((team) => (
                    <tr key={team.id}>
                      <td className='table-champions'>2</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}


                  {Equipos.filter(team => team.id === 3).map((team) => (
                    <tr key={team.id}>
                      <td className='table-champions'>3</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}


                  {Equipos.filter(team => team.id === 4).map((team) => (
                    <tr key={team.id}>
                      <td className='table-champions'>4</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 5).map((team) => (
                    <tr key={team.id}>
                      <td className='table-europa'>5</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 6).map((team) => (
                    <tr key={team.id}>
                      <td>6</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 7).map((team) => (
                    <tr key={team.id}>
                      <td>7</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 8).map((team) => (
                    <tr key={team.id}>
                      <td>8</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 9).map((team) => (
                    <tr key={team.id}>
                      <td>9</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 10).map((team) => (
                    <tr key={team.id}>
                      <td>10</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 11).map((team) => (
                    <tr key={team.id}>
                      <td>11</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 12).map((team) => (
                    <tr key={team.id}>
                      <td>12</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 13).map((team) => (
                    <tr key={team.id}>
                      <td>13</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 14).map((team) => (
                    <tr key={team.id}>
                      <td>14</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 15).map((team) => (
                    <tr key={team.id}>
                      <td>15</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 16).map((team) => (
                    <tr key={team.id}>
                      <td>16</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 17).map((team) => (
                    <tr key={team.id}>
                      <td>17</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 18).map((team) => (
                    <tr key={team.id}>
                      <td className='table-descenso'>18</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 19).map((team) => (
                    <tr key={team.id}>
                      <td className='table-descenso'>19</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                  {Equipos.filter(team => team.id === 20).map((team) => (
                    <tr key={team.id}>
                      <td className='table-descenso'>20</td><td><img src={team.escudo} alt={team.nombre} width="25" height="25" />{team.nombre}</td>
                      <td>{team.jpartidos}</td>
                      <td>{team.ganados}</td>
                      <td>{team.empatados}</td>
                      <td>{team.perdidos}</td>
                      <td>{team.golesafavor}</td>
                      <td><b>{team.puntos}</b></td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Partidos;