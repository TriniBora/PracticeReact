import React, { Component } from 'react';

//Eventos en ES6
export class EventosES6 extends Component{
    constructor ( props ) {
        super( props );
        this.state = {
            contador:0,
        }

        this.sumar = this.sumar.bind( this );//NO OLVIDAR!!!!!!
        this.restar = this.restar.bind( this );//NO OLVIDAR!!!!!!
    }

    sumar(evento) {
        // console.log( "Sumando" );
        this.setState( {
            contador: this.state.contador + 1,//no se hace esto solo!!! this es undefined, se bindea en el constructor para que ande
        })
    }

    restar(evento) {
        this.setState( {
            contador: this.state.contador - 1,//no se hace esto solo!!! this es undefined, se bindea en el constructor para que ande
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={ this.sumar}>+</button>
                    <button onClick={ this.restar}>-</button>
                </nav>
                <h3>{ this.state.contador }</h3>
            </div>
        );
    }
}


//Eventos en ES7 - PROPERTIES INITIALIZER
export class EventosES7 extends Component{
    state = {
        contador: 0,
    }

    //Arrow functions, el this ya hereda el contexto de la clase a la que pertenece, evitamos bindear
    sumar = (evento => this.setState( {
        contador: this.state.contador + 1,
    }))

    restar = (evento => this.setState( {
            contador: this.state.contador - 1,
    }))

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={ this.sumar}>+</button>
                    <button onClick={ this.restar}>-</button>
                </nav>
                <h3>{ this.state.contador }</h3>
            </div>
        );
    }
}