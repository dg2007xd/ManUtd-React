
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


function Partidos() {
  return (
    <main className='main-partido'>
      <section className=' padded partido' >
        <div className="container text-center text-white">
          <div className="row justify-content-center">
            <div className="col-md-9 match text-align-center">
              <h3 className="texto-partido d-flex justify-content-center ">SIGUIENTE PARTIDO</h3>
              <img className='img-fluid d-inline-flex logo-club' src={logo1} alt="" />
              <h2 className='texto-clubs d-inline-flex'>MANCHESTER UNITED</h2>
              <h2 className='display-5 d-inline-flex simbolos'><b>- : -</b> </h2>
              <h2 className='texto-clubs d-inline-flex'>LEICESTER CITY</h2>
              <img className='img-fluid d-inline-flex logo-club' src={logo2} alt="" />
              <p className='lead'>FEBRERO 7, 2025, OLD TRAFFORD</p>
              <p className='fs-3'>3:00pm</p>
            </div>
          </div>
        </div>
      </section>

      <div className='padded-partidos pasados'>
        <div className="container text-center">
          <div className="row">
            <div className="col cuadros container text-center justify-content-center ms-2 me-2">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid' src={logo1} alt="" />
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
                  <p className='fecha-pasada'>Febrero 02, 2025</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    Crystal Palace
                  </h4>
                  <img className='img-fluid' src={logo3} alt="" />
                </div>
              </div>
            </div>

            <div className="col cuadros container text-center justify-content-center ms-2 me-2">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid' src={logo1} alt="" />
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
                  <p className='fecha-pasada'>Enero 30, 2025</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    FCSB
                  </h4>
                  <img className='img-fluid' src={logo4} alt="" />
                </div>
              </div>
            </div>

            <div className="col cuadros container text-center justify-content-center ms-2 me-2">
              <div className="row">
                <div className="col team">
                  <h4 className='col'>
                    Man Utd
                  </h4>
                  <img className='img-fluid' src={logo1} alt="" />
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
                  <p className='fecha-pasada'>Enero 26, 2025</p>
                  <p className='fecha-pasada'>Old Trafford</p>
                </div>
                <div className="col team">
                  <h4 className='col'>
                    Fulham
                  </h4>
                  <img className='img-fluid' src={logo5} alt="" />
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
                    <small className="text-muted">October 14, 2022</small>
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
                    <small className="text-muted">September 10, 2022</small>
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
                <p><small><strong>August 5, 2021</strong></small></p>
                <p>Injury woes continue for star striker ahead of crucial match</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={entrenador} className="img-fluid Snews" />
                <p><small><strong>July 7, 2021</strong></small></p>
                <p>Managerial shake-up: Surprise appointment at title contender</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={derbi} className="img-fluid Snews" />
                <p><small><strong>June 4, 2021</strong></small></p>
                <p>VAR controversy strikes again in thrilling derby match</p>
              </div>
              <div className="col-md-3 mb-2">
                <img src={promesas} className="img-fluid Snews" />
                <p><small><strong>June 4, 2021</strong></small></p>
                <p>Young Talent Shines: Breakout Stars Making Wavesin EPL</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase fs-1">League Table</h3>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="text-white">
                  <tr className='table-danger'>
                    <th></th>
                    <th>Club</th>
                    <th>PJ</th>
                    <th>G</th>
                    <th>E</th>
                    <th>P</th>
                    <th>GF</th>
                    <th>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className='table-primary'>1</td><td>LIVERPOOL</td><td>27</td><td>19</td><td>7</td><td>1</td><td>64</td><td>64</td></tr>
                  <tr><td className='table-primary'>2</td><td>ARSENAL</td><td>26</td><td>15</td><td>8</td><td>3</td><td>51</td><td>53</td></tr>
                  <tr><td className='table-primary'>3</td><td>NOTTINGHAM FOREST</td><td>26</td><td>14</td><td>5</td><td>7</td><td>44</td><td>47</td></tr>
                  <tr><td className='table-primary'>4</td><td>MANCHESTER CITY</td><td>26</td><td>13</td><td>5</td><td>8</td><td>52</td><td>44</td></tr>
                  <tr><td className='table-warning'>5</td><td>NEWCASTLE</td><td>26</td><td>13</td><td>5</td><td>8</td><td>46</td><td>44</td></tr>
                  <tr><td>6</td><td>BOURNEMOUTH</td><td>26</td><td>12</td><td>7</td><td>7</td><td>44</td><td>43</td></tr>
                  <tr><td>7</td><td>CHELSEA</td><td>26</td><td>12</td><td>7</td><td>7</td><td>48</td><td>43</td></tr>
                  <tr><td>8</td><td>ASTON VILLA</td><td>27</td><td>11</td><td>9</td><td>7</td><td>39</td><td>42</td></tr>
                  <tr><td>9</td><td>BRIGHTON</td><td>26</td><td>10</td><td>10</td><td>6</td><td>42</td><td>40</td></tr>
                  <tr><td>10</td><td>FULHAM</td><td>26</td><td>10</td><td>9</td><td>7</td><td>38</td><td>39</td></tr>
                  <tr><td>11</td><td>BRENTFORD</td><td>26</td><td>11</td><td>4</td><td>11</td><td>47</td><td>37</td></tr>
                  <tr><td>12</td><td>TOTTENHAM</td><td>26</td><td>10</td><td>3</td><td>13</td><td>53</td><td>33</td></tr>
                  <tr><td>13</td><td>CRYSTAL PALACE</td><td>26</td><td>8</td><td>9</td><td>9</td><td>31</td><td>33</td></tr>
                  <tr><td>14</td><td>EVERTON</td><td>26</td><td>7</td><td>10</td><td>9</td><td>29</td><td>31</td></tr>
                  <tr><td>15</td><td>MANCHESTER UNITED</td><td>26</td><td>8</td><td>6</td><td>12</td><td>30</td><td>30</td></tr>
                  <tr><td>26</td><td>WEST HAM</td><td>26</td><td>8</td><td>6</td><td>12</td><td>30</td><td>30</td></tr>
                  <tr><td>17</td><td>WOLVES</td><td>26</td><td>6</td><td>4</td><td>16</td><td>36</td><td>22</td></tr>
                  <tr><td className='table-danger'>18</td><td>IPSWICH</td><td>26</td><td>3</td><td>8</td><td>15</td><td>24</td><td>17</td></tr>
                  <tr><td className='table-danger'>19</td><td>LEICESTER CITY</td><td>26</td><td>4</td><td>5</td><td>17</td><td>25</td><td>17</td></tr>
                  <tr><td className='table-danger'>20</td><td>SOUTHAMPTON</td><td>26</td><td>2</td><td>3</td><td>21</td><td>19</td><td>9</td></tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Partidos