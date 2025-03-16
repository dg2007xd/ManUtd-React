import { useState, useEffect } from "react";
import contactoimg from '../assets/images/contactoimg.jpg'


function Equipo() {

    const positions = ["Arquero", "Defensa", "Centrocampista", "Delantero"];
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("/Plantilla.json") // Reemplaza con la URL real del JSON
            .then((response) => response.json())
            .then((data) => {
                const sortedPlayers = data.sort((a, b) => a.dorsal - b.dorsal);
                setPlayers(sortedPlayers);
            })
            .catch((error) => console.error("Error cargando los datos:", error));
    }, []);

    return (
        <section style={{ backgroundColor: "#ebebeb" }}>
            <div className='text-center'>
                <img src={contactoimg} className='d-block w-100 banners2' alt="" />
                <div className='carousel-text d-block'>
                    <h2 className='texto-banner'><b>EQUIPO</b></h2>
                    <div className='d-flex col justify-content-center'>
                        <p className='texto-corto'>HOME | </p>
                        <p className='texto-corto2'>EQUIPO</p>
                    </div>
                </div>
            </div>


            <div className="container padded">
                {positions.map((position) => (
                    <div key={position}>
                        <h2 className="texto-posicion mt-5 mb-4">{position.toUpperCase()}</h2>
                        <div className="jugadores-container" style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                            {players
                                .filter((player) => player.posicion === position)
                                .map((player) => (
                                    <div
                                        key={player.dorsal}
                                        className="jugadores-img img-fluid"
                                        style={{

                                            borderRadius: "10px",
                                            backgroundImage: `url(${player.imagen})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div className="jugadores-overlay">
                                            <div
                                                className="position-absolute bottom-0 start-0 p-2 text-white nombres"
                                                style={{
                                                    width: "100%",
                                                    fontSize: "35px",
                                                    zIndex: "2"
                                                }}
                                            >
                                                <span
                                                    className="d-block "
                                                    style={{
                                                        fontSize: "1.5rem",
                                                        borderBottom: "2px solid #C81617",
                                                        width: "20px",
                                                    }}
                                                >
                                                    {player.dorsal}
                                                </span>
                                                <span className="text-uppercase">{player.nombre}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Equipo;