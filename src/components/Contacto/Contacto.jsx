import './Contacto.css';
import { useState } from "react";

const Contacto = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (e) => {

        e.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(e.target);
        formData.append("access_key", "81010c4f-e211-49e0-a8ad-fa1fb330d4b8");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return ( 
        <div id='contacto' className='seccion'>
            <div className='titulo'>
                <div className='fondo-titulo'>
                    <p className='titulo-seccion'>Contacto</p>
                </div>
                <p className='subtitulo'>
                Hablemos de cómo podemos mejorar la seguridad y el bienestar en tu organización</p>
            </div>
            <div className='contenido-contacto'>
                <div className='datos-contacto'>
                    <div className='item-dato'>
                        <div className="icon-dato">
                            <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h48v48h-48z" fill="none"/>
                            <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" fill='black'/></svg>
                            <p className='text-dato'>Teléfono:</p>
                        </div>
                        <div className='info'>
                            <a href="https://api.whatsapp.com/send?phone=2974350391&text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                            297 4350391 
                            </a>
                            <span> - </span>
                            <a href="https://api.whatsapp.com/send?phone=5492975903377&text=Hola,%20quisiera%20más%20información." target="_blank" rel="noopener noreferrer">
                            297 5903377
                            </a>
                            <span> - </span>
                            <a target="_blank" rel="noopener noreferrer">
                            297 4721936
                            </a>
                        </div>                       
                    </div>
                    <div className='item-dato'>
                        <div className="icon-dato">
                            <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" fill='black'/></svg>
                            <p className='email text-dato'>Email:</p>
                        </div>
                        <div className='info'>
                            <a href="mailto:kairoshssa@gmail.com" className='email'>kairoshssa@gmail.com</a>
                        </div>
                    </div>
                    <div className='item-dato'>
                        <div className="icon-dato">
                                                                                   
                            <svg height="24" version="1.1" viewBox="0 0 56.693 56.693" width="24" xmlns="http://www.w3.org/2000/svg" ><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/></g>
                            </svg>

                        <p className='text-dato'>LinkedIn:</p>
                        </div>
                        <div className='info'>
                            <a href="https://www.linkedin.com/in/kairosh-ssa/" target="_blank" rel="noopener noreferrer">Kairosh Consultora S.S.A.</a>
                        </div>
                    </div>
                    <div className='item-dato'>
                        <div className="icon-dato">
                            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill='black'/>
                            </svg>
                            <p className='text-dato'>Dirección:</p>
                        </div>
                        <div className='info'>
                            <p>Calle Prefectura Naval Nro 69 B° Golfo San Jorge</p>
                            <p>Caleta Olivia, Santa Cruz</p>
                        </div>
                        
                    </div>
                    <div className='item-dato' hidden>
                    <svg className="feather feather-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <p>Horario de Atención: </p>
                    </div>
                    
                   
                </div>
                <input type="hidden" name="subject" value="Nuevo Mensaje de Contacto"/>
                        <input type="hidden" name="from_name" value="Contacto" />
                <div className='form-contacto'>

                    <form onSubmit={onSubmit}>
                    <input type="hidden" name="subject" value="Nuevo Mensaje de Contacto"/>
                    <input type="hidden" name="from_name" value="Contacto Kairosh" />
                        <div className='input-box'>
                            <label htmlFor="">Nombre</label>
                            <input 
                                className='input-contacto' 
                                type="text" 
                                name="nombre" 
                                placeholder='Nombre' required/>
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Email</label>
                            <input 
                                className='input-contacto' 
                                type="email" 
                                name="email" 
                                placeholder='correo@ejemplo.com' required/>
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Mensaje</label>
                            <textarea 
                                className='input-contacto messaje' 
                                name="mensaje" 
                                placeholder='Mensaje' id="" required></textarea>
                        
                        </div>
                        
                        <button className='btn-contacto' type="submit">Enviar</button>
                    </form>
                    <span>{result}</span>
                </div>

            </div>
        
        </div>
    );
}
 
export default Contacto;