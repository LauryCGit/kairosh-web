import PropTypes from "prop-types";

export const CardServicio = ({ icono, titulo, items, height }) => {
  return (
    <div className="tarjeta-servicio" style={{ height }}>
      <img src={icono} alt={`Icono de ${titulo}`} className="icono-servicio" />
      <h5 className="titulo-servicio">{titulo}</h5>
      <ul className="servicios">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>                      
    </div>
  );
};

CardServicio.propTypes = {
  icono: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};