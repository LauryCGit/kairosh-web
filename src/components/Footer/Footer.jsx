import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return ( 
        <div className='fondo-footer'>
            <div className='contenido-footer'>
                <div className="datos-empresa">
                    <p className='nombre-empresa' translate="no" >Kairosh</p>
                    <p className='descripcion-empresa'>Consultora en Salud, Seguridad y Ambiente</p>

                </div>
                <div className="datos-contacto">
                    <div className='dato-telefono'>
                        <p className='telefono'>297 4350391</p>
                        <p className='telefono'>297 5903377</p>
                        <p className='telefono'>297 4721936</p>
                        <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="Teléfono">
                            <path d="M0 0h48v48h-48z" fill="none"/>
                            <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" fill='white'/></svg>
                    </div>
                    <div className='dato-email'>
                        <a href="mailto:kairoshssa@gmail.com" className='email'>kairoshssa@gmail.com</a>
                        <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="Correo">
                        <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" fill='white'/></svg>
                    </div>
                    <div className='dato-direccion'>
                        <p className='direccion'>Caleta Olivia, Santa Cruz, Argentina</p>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="Ubicación">
                        <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill='white'/>
                        </svg>
                    </div>
                </div>

            </div>

            <p className='copy'>© 2024 Kairosh - Todos los derechos reservados</p>
            <p className='politica-privacidad'>
                <Link to="/politica-privacidad">Política de Privacidad</Link>
            </p>
        </div>
    );
}
 
export default Footer;