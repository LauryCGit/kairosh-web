import './Header.css';
import Menu from '../Menu/Menu';
import logo_kairosh from '../../assets/logos/KairoSHblanco.png';
import logo_k from '../../assets/logos/K-LogoB.png';

const Header = () => {
    return ( 

        <div className='container-header'>
            <Menu/>
            <div className='logos'>
              <img className='logoK' src={logo_k} alt="Kairosh" />
              <div className="textos-logo">
                <img  src={logo_kairosh} alt="KAIROSH" className='logoblanco' translate="no"/>
                <p className='subtitulo-descripcion'>Consultora en Salud, Seguridad y Ambiente</p>
              </div>
            </div>
            {/* as={RouterLink} to="/"*/}
          
        </div>
        
    );
}
 
export default Header;