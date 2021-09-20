import React, { Component } from 'react';

export default class Padre extends Component {
    //2do tipo comunicacion
    state = {
        contador: 0,
    }

    //este metodo lo ejecuta el hijo, no el padre
    incrementarContador = ( event ) => {
        this.setState( {
            contador: this.state.contador + 1,
        })
    }

    render() {
        return ( <>
            <h2>Comunicación entre Componentes</h2>
            <Hijo mensaje="Mensaje para el hijo nro 1"/>
            <Hijo incrementarContador={ this.incrementarContador} mensaje="Mensaje desde el hijo"/>
        </>);

    }
}

//1era comunicación, unidireccional de padre a hijo(mensaje)
function Hijo(props) {
    return (
        <>
            <h3>{ props.mensaje }</h3>
            <button onClick={ props.incrementarContador }>+</button>{/*el hijo ahora modifica el estado del padre a través de un evento personalizado (incrementar el contador)*/}
        </>
    );

}