import React from 'react'

import micuenta from '../assets/images/mi-cuenta-banner.jpg'

function MiCuenta() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <section>
            <div className='text-center'>
                <img src={micuenta} className='d-block w-100 banners2' alt="" />
                <div className='carousel-text d-block'>
                    <h2 className='texto-banner'><b>MI CUENTA</b></h2>
                    <div className='d-flex col justify-content-center'>
                        <p className='texto-corto'>HOME | </p> 
                        <p className='texto-corto2'>MI CUENTA</p>
                    </div>
                </div>
            </div>

            <div className='login-container'>
                <h2 className='login-title'>LOGIN</h2>
                <form className='login-form'>
                    <label>USUARIO O CORREO ELECTRÓNICO *</label>
                    <input type='text' required />
                    
                    <label>CONTRASEÑA *</label>
                    <div className='password-input-container'>
                        <input type={passwordVisible ? 'text' : 'password'} required />
                        <span onClick={() => setPasswordVisible(!passwordVisible)} className='password-toggle'>
                            {passwordVisible ? <i class="bi bi-eye-slash"></i>  : <i class="bi bi-eye"></i>}
                        </span>
                    </div>
                    
                    <div className='remember-me-container'>
                        <input type='checkbox' id='rememberMe' />
                        <label htmlFor='rememberMe'>RECUERDAME</label>
                    </div>
                    
                    <button type='submit' className='login-button'>INICIAR SESIÓN</button>
                </form>
                <p className='forgot-password'>¿Ha olvidado su contraseña?</p>
            </div>


        </section>
  )
}

export default MiCuenta