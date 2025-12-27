import './Empresas.css';
import emp1 from '../../assets/empresas/emp1.jpg';
import emp2 from '../../assets/empresas/emp2.jpg';
import emp3 from '../../assets/empresas/emp3.png';
import emp4 from '../../assets/empresas/emp4.png';
import emp5 from '../../assets/empresas/emp5.jpg';
import emp6 from '../../assets/empresas/emp6.jpg';

export default function Empresas() {
    const logos = [emp1, emp2, emp3, emp4, emp5, emp6 ];

    return(
        <div id='empresas' className='seccion'>
            <p className="titulo-secundario">Empresas que confian en nosotros</p>

            <div className="carousel-empresas">  
                <div className="logos-track">
                    {logos.concat(logos).map((logo, i) => (
                    <div className="logo-item" key={i}>
                        <img src={logo} alt={`logo-${i}`} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
