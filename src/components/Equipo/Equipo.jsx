import './Equipo.css';
import { FaLinkedin } from "react-icons/fa";

const Equipo = () => {
    return ( 
    
        <div id='equipo' className='seccion'>
            <div translate="no">
                <p className="titulo-secundario">Nuestro Equipo</p>
                <p className="subtitulo-secundario">Profesionales detras de Kairosh</p>
            </div>
            <div className="staff">
                <div className="staff-item">
                    <p className="nombre-staff">Lic. Patricia Hernández</p>
                    <p>Licenciada en Higiene y Seguridad en el Trabajo</p>
                    <button className='btn-linkedin'>
                        <a href="https://www.linkedin.com/in/patricia-hernandez-38b42765/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-icon">
                            <FaLinkedin />
                            <span className='btn-texto'>Ver Perfil</span>
                                                   
                        </a>
                    </button>
                </div>
                <div className="staff-item">
                    
                    <p className="nombre-staff">Tec. Karina Vásquez</p>
                    <p>Tecnica en Seguridad e Higiene</p>
                    <button className='btn-linkedin'>
                        <a href="https://www.linkedin.com/in/karina-vasquez-15b52a158/"
                        target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-icon">
                                <FaLinkedin />
                                <span className='btn-texto'>Ver Perfil</span>
                               
                        </a>
                    </button>
                </div>
                <div className="staff-item">
                    
                    <p className="nombre-staff">Consultores</p>
                    <p>Kinesiologos, Medicos Laborales, Psicologos, Biologos, Ambientalistas, Bromatologos, Bioquimicos, Electricista, entre otros.</p>
                    
                </div>
            </div>
            
        </div>
    
    );
}
 
export default Equipo;