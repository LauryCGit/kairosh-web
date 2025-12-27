import './AcercaDe.css';

import foto from '../../assets/cascos.png';
import carta from '../../assets/icons/letter.png';
import pdfcarta from '../../assets/CARTA DE KAIROSH 2026.pdf'

const AcercaDe = () => {
    return (
        <div id='acerca-de' className='seccion'>
            <div className='titulo'>
                <div className='fondo-titulo'>
                    <p className='titulo-seccion' translate="no" >Acerca de</p>
                </div>
                <p className='subtitulo-acercade'>
                Nuestro compromiso con la salud, seguridad y ambiente
                </p>
            </div>
             <div className='texto-imagen'>
                <div className='texto-seccion'>
                    <p>Somos una <strong>Firma Santacruceña de Consultoría Integral</strong> constituida por un equipo de larga trayectoria y experiencia laboral. Además, contamos con la participación multidisciplinaria de expertos en EIA (Evaluación de Impacto Ambiental) en la ejecución de estudios de gran envergadura ambiental.</p>
                    <br/>
                    <p>Nos enfocamos en <strong>prosperar la seguridad integral en los ámbitos laborales</strong>; dedicados a la disciplina higienista principalmente en la práctica de evaluaciones de los puestos laborales bajo contaminantes y medida del confort ambiental; asimismo, elaboramos matrices de riesgos e impactos ambientales, y todo tipo de estudio requerido en el marco legal aplicable y normativa internacional vigente en materia <strong>Salud Seguridad y Ambiente.</strong></p>
                    <div className="carta-presentacion">
                        <img className='carta' src={carta} alt="" />
                        <p>
                            <strong> KAIROSH </strong>
                            <a
                                href={pdfcarta}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            - Ver Carta de Presentación
                            </a>                     
                        </p>
                    </div>
                    
                </div>       
                <div className='contenedor-imagen'>
                    <img className='img-logo-texto' src={foto} alt="" />
                </div>

            </div>
          {/*<a href="https://www.flaticon.com/free-icons/envelope" title="envelope icons">Envelope icons created by Kiranshastry - Flaticon</a>*/}

        </div>
    );
}
 
export default AcercaDe;