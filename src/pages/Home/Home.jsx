import AcercaDe from '../../components/AcercaDe/AcercaDe';
import Servicios from '../../components/Servicios/Servicios';
import Contacto from '../../components/Contacto/Contacto';
import Equipo from '../../components/Equipo/Equipo';
import Galeria from '../../components/Galeria/Galeria';
import Empresas from '../../components/Empresas/Empresas';
import './Home.css';
import Chat from './Chat';

import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
    

const Home = () => {

    const images = [ foto1, foto2, foto3, foto4, foto5 ];

    return ( 
        
        <div className='contenido'>
            <AcercaDe/>
            <Equipo/>
            <Servicios/>
            <Galeria images={images}/>
            <Empresas/>
            <Contacto/>
               
            <Chat/>
            
        </div>
        
    );
}
 
export default Home;