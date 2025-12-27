import higiene from '../../assets//icons/higiene.png';
import seguridad from '../../assets/icons/seguridad.png';
import ambiente from '../../assets/icons/ambiente.png';
import gestion from '../../assets/icons/gestion.png';
import especiales from '../../assets/icons/especiales.png';

import './ServiciosTodos.css';

export default function ServiciosTodos() {

    const datosServicios = [
        {
            titulo: "Servicios de Higiene Industrial",
            icono: higiene,
            subtitulo:"Garantizar ambientes de trabajo seguros y saludables.",
            texto: [
                "Estudios anuales bajo protocolos de las resoluciones de la Superintendencia de Riesgos del Trabajo (SRT).",
                "Análisis del confort térmico, mediciones de contaminantes y agentes peligrosos con instrumental calibrado y certificado. Evaluación de niveles de iluminación salubres. Controles de exposición a ruidos excesivos.",
                "Revisiones de ingeniería como la instalación de sistemas de ventilación para eliminar contaminantes como el polvo, ruido, vibraciones, etc."
            ],
        },
        {
            titulo: "Servicios de Seguridad y Salud Ocupacional",
            icono: seguridad,
            subtitulo:"Protegemos a las personas y fortalecemos la cultura preventiva",
            texto: [
                "Programas de Seguridad Laboral, Programas de Higiene Industrial, Programa de Ergonomía y Salud Ocupacional. Planificación y ejecución de programas de promoción de la salud, seguridad y ambiente.",
                "Asesoramiento en la selección de elementos y equipos de protección personal (EPP), prácticas laborales como mantener limpios los espacios de trabajo y organizar descansos regulares para la prevención de los Trastornos musculoesqueléticos (TME).",
                "Programa de Capacitación y formación para todo el personal, en todos sus niveles operativos y jerárquicos. Organización de Simulacro de emergencias.",
                "Desarrollo de planes de emergencias y evacuación, adaptados a las particularidades de las instalaciones y sus ocupantes. Planos de Evacuación en tamaño A3 y A2, ploteados. Estudios de cargas de fuego y protecciones contra incendios."
            ],
        },
        {
            titulo: "Servicios de Medio Ambiente",
            icono: ambiente,
            subtitulo:"",
            texto: [
                "Informe para la obtención del certificado de aptitud ambiental (C.A.M.), Memoria Descriptiva y Estudio de Aspectos Ambientales para un proyectode obra o de actividad productiva, que requiera autorización, permiso, concesión, habilitación o aprobación de la Autoridad de Aplicación Ambiental Municipal.",
                "Estudios de Evaluación de Impacto Ambiental (E.I.A.) de nuevos proyectos. Representación técnica ante autoridades provinciales santacruceñas. Gestión de residuos peligrosos. Matrices ambientales. Plan de mejoramiento ambiental, gestión y protección del medio ambiente.",
                "Evaluación de Impacto Sonoro"
            ],
        },
        {
            titulo: "Servicios de Gestión",
            icono: gestion,
            subtitulo:"",
            texto: [
                "Manual de procedimientos y asesoramiento en la implementación de sistemas de gestión QHSE calidad, salud seguridad y ambiente: Optimización de procedimientos y cumplimiento de estándares internacionales.",
                "Evaluación de riesgos e Identificación de Peligros en el desarrollo de las distintas actividades ejecutantes. Mapas de Riesgos. Matrices de Riesgos e Impactos Ambientales. Plan anual de Prevención de Riesgos. RGRL. RAR.",
                "Seguimiento y monitoreo continuo de las condiciones laborales, ambientales y de gestión, en la actualización de procedimientos y control de los indicadores."
            ],
        },
        {
            titulo: "Servicios Especiales",
            icono: especiales,
            subtitulo:"",
            texto: [
                "Asistencia de Personal Técnico en Obra o Yacimientos",
                "Personal Prevencionista en Rosters 14x14, 21x7, etc.",
                "Supervisión de tareas de Izajes y elevación de personal",
                "Trabajos en Alturas",
                "Servicio en Obras de Demolición o Excavación",
                "Espacios confinados",
                "Gerenciamiento y auditorías internas",
                "Investigación de accidentes y peritajes",
                "Trabajos de campo, relevamientos e inspecciones"
            ],
        },
        ];

    const numeroWhatsapp = "2974350391";
       
    return(
        <div className='contenido todos-servicios'>
            <div className='titulo-servicios'>
                    <div className='fondo-titulo-servicios'>
                        <p className='titulo-seccion-servicios'>Servicios</p>
                    </div>
                    <p className='subtitulo'>Especializados en la protección del entorno y el bienestar organizacional</p>
            </div>
            {datosServicios.map((servicio, i) => {
                const mensaje = `Hola! Quisiera solicitar asesoramiento sobre el servicio de ${servicio.titulo}.`;
                const whatsappLink = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

                return(
                    <div className="servicio-detalle" key={i}> 
                        <div className="header-servicio">
                            <img src={servicio.icono} alt={`Icono de ${servicio.titulo}`} className="icono-servicio" />
                            <div className='header-titulo'>
                                <h5 className="titulo-servicio">{servicio.titulo}</h5>
                                <p className='' hidden>{servicio.subtitulo}</p>
                            </div>
                        </div> 
                        <ul className="texto-servicio">
                            {servicio.texto.map((item, i) => (
                            <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button className="btn-asesoramiento">
                            <a className=""
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                Solicitar Asesoramiento
                            </a>  
                        </button>
                             
                    </div> 
                );
            })}
        </div>
    );
};
