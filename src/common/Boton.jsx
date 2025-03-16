import React, { useState, useEffect } from 'react';
import icono from '../assets/images/futbol-icon.png';

function Boton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300); // Aparece cuando baja 200px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div 
            className="go-top" 
            onClick={handleClick} 
            style={{ display: visible ? 'flex' : 'none' }}
        >
            <img src={icono} alt="Icono" />
            GO TOP
        </div>
    );
}

export default Boton