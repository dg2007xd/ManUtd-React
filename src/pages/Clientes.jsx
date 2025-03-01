import { useEffect, useState } from "react";

function Clientes() {
    //Empleando Hooks: useEffect,useState

    const [ListaClientes, setListaClientes] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])


    /*
       function leerServicio(){}
    */

    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/proveedores.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaClientes(data)//Se actualiza el estado de la variable clientes
            })
    }

    const drawTable = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="titulo-rojo">Código</th>
                        <th className="titulo-rojo">Empresa</th>
                        <th className="titulo-rojo">Contacto</th>
                        <th className="titulo-rojo">Cargo</th>
                        <th className="titulo-rojo">Ciudad</th>
                        <th className="titulo-rojo">País</th>
                        <th className="titulo-rojo">Dirección</th>
                        <th className="titulo-rojo">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaClientes.map(item =>
                        <tr key={item.idproveedor}>
                            <td>{item.idproveedor}</td>
                            <td>{item.nombreempresa}</td>
                            <td>{item.nombrecontacto}</td>
                            <td>{item.cargocontacto}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.pais}</td>
                            <td>{item.direccion}</td>
                            <th>{item.telefono}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    return (
        <>
            <header id="page-header">
                <div className="container text-center titulo-cliente">
                    <h1>Clientes</h1>
                </div>
            </header>
            <section className="padded-clientes">
                <div className="container">
                    {drawTable()}
                </div>
            </section>
        </>
    )
}

export default Clientes