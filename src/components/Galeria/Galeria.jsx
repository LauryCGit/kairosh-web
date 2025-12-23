import { useState } from "react";
import PropTypes from "prop-types";
import './Galeria.css';

export default function Galeria({images}) {

    const [current, setCurrent] = useState(0);
    const prev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    const next = () => {
        setCurrent((current + 1) % images.length);
    };
    const getLeftIndex = () => (current - 1 + images.length) % images.length;
    const getRightIndex = () => (current + 1) % images.length;
    
    return(
        <div className="seccion carousel-container">
            <button className="nav-button left" onClick={prev}>{"<"}</button>
            <div className="carousel">
                <img
                    src={images[getLeftIndex()]}
                    alt="left"
                    className="side left-img"
                />
                <img
                    src={images[current]}
                    alt="center"
                    className="center-img"
                />
                <img
                    src={images[getRightIndex()]}
                    alt="right"
                    className="side right-img"
                />
            </div>
            <button className="nav-button right" onClick={next}>{">"}</button>
        </div>
    );

}

Galeria.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Galeria.defaultProps = {
  images: [],
};