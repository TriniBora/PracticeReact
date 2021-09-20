import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades( props ) {
    return (
        <div>
            {/* <h2>Propiedades</h2> */ }
            <h2>{ props.porDefecto }</h2>
            <ul>
                <li>{ props.cadena}</li>
                <li>{ props.numero}</li>
                <li>{ props.booleano ? "Verdadero" : "Falso" }</li>
                <li>{ props.arreglo.join(", ")}</li>
                <li>{ `${ props.objeto.nombre } ${ props.objeto.apellido }` }</li>
                <li>{ props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{ props.elementoReact}</li>
                <li>{ props.componenteReact}</li>

            </ul>
        </div>
    );
}

//Propiedades por defecto
Propiedades.defaultProps = {
    porDefecto: "Las Props"
};

//Características de las propiedades
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,//numero debe ser un number y además es requerido
};
