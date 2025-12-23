import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import './Home.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5492974350391";
  const message = "Hola, quisiera más información sobre sus servicios.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <div className="widget">
      {!isOpen ? (
        <button className="whatsapp-button" onClick={() => setIsOpen(true)}>
            
          <FaWhatsapp className="whatsapp-icon" />
        </button>
      ) : (
        <div className="whatsapp-chat">
          <div className="whatsapp-header">
            <span>Chat de WhatsApp</span>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="whatsapp-body">
            <p>Hola 👋, ¿cómo podemos ayudarte?</p>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <button className="start-chat">Iniciar chat</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;