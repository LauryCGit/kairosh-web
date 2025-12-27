
import './Servicios.css';
import higiene from '../../assets//icons/higiene.png';
import seguridad from '../../assets/icons/seguridad.png';
import ambiente from '../../assets/icons/ambiente.png';
import gestion from '../../assets/icons/gestion.png';
import especiales from '../../assets/icons/especiales.png';
import {CardServicio} from './CardServicio'; 
import { Link } from 'react-router-dom';

export default function Servicios() {


    const serviciosData = [
    {
        titulo: "Higiene",
        icono: higiene,
        items: [
        "Ergonomía",
        "Ventilación",
        "Iluminación",
        "Ruido",
        "Vibraciones",
        "Estrés térmico",
        "Confort ambiental",
        ],
    },
    {
        titulo: "Seguridad",
        icono: seguridad,
        items: [
        "Programas de seguridad",
        "Planes de capacitación",
        "Organización de simulacros",
        "Matriz IPER & IIAA",
        "Procedimientos de trabajo seguro",
        "Planes de emergencia",
        "Planos de evacuación",
        "Selección de EPP",
        "Estudio de carga de fuego",
        "Protecciones contra incendios",
        ],
    },
    {
        titulo: "Ambiente",
        icono: ambiente,
        items: [
        "Gestión de residuos",
        "Representante Técnico Ambiental en Provincia",
        "Evaluación de impacto ambiental",
        "Estudio de impacto sonoro",
        "Contaminación ambiental",
        "Plan de mejoramiento ambiental",
        "Jornadas de capacitación y educación ambiental",
        ],
    },
    {
        titulo: "Gestión",
        icono: gestion,
        items: [
        "Asesoramiento en la implementación de Sistemas de Gestión",
        "Evaluación de Riegos",
        "Seguimiento y monitoreo de las condiciones laborales"
        ],
    },
    {
        titulo: "Especiales",
        icono: especiales,
        items: [
        "Servicio en Obras",
        "Mineria Roster 14*14",
        "Yacimientos Hidrocarburíficos",
        "Establecimientos públicos",
        "Institutos, Comercios, Centros de Salud, etc",        
        ],
    },
    ];
    return (  
        <div id='servicios' className='seccion'>
            <div className='titulo'>
                <div className='fondo-titulo'>
                    <p className='titulo-seccion'>Servicios</p>
                </div>
                <p className='subtitulo'>Especializados en la protección del entorno y el bienestar organizacional</p>
            </div>

            <div className="tarjetas-servicios">
                {serviciosData.map((servicio, i) => (
                    <CardServicio
                        key={i}
                        titulo={servicio.titulo}
                        icono={servicio.icono}
                        items={servicio.items}
                        height={servicio.height}
                    />
                ))}
            </div>
            <button className="btn-ver-servicios">
                <Link to="/todos-servicios">Ver todos los servicios</Link>
            </button>
            
        </div>

    );
}
 