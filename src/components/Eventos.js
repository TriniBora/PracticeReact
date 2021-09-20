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


//componente para evento personalizado
//1- como componente funcional estructurado
// function Boton(props) {
//     return ( <button onClick={ props.myOnClick}>Botón hecho componente</button>)
// }
//2 - como componente funcional expresado
// const Boton = ( props ) => <button onClick={ props.myOnClick }>Botón hecho componente</button>
//3. - como componente funcional expresado y con destructuring
const Boton = ( { myOnClick } ) => <button onClick={ myOnClick }>Botón hecho componente</button>


//Synthetic events, native event, personalized events
export class MasSobreEventos extends Component {

    handleClick = ( event, mensaje ) => {
        console.log( event );//Synthetic events of React
        console.log( event.nativeEvent );// native event of js
        console.log( event.target )//Synthetic events of React
        console.log( event.nativeEvent.target ); //native event of js
        console.log( mensaje );
    };

    render() {
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={ ( event ) => this.handleClick( event, "Hola, pasando parámetro desde un evento" ) }>Saludar</button>
                {/* evento personalizado]*/}
                {/*INCORRECTO!!!! <Boton onClick={(event)=> this.handleClick(event, "Hola, pasando parámetro desde un evento")}/>*/ }
                <Boton myOnClick={(event)=> this.handleClick(event, "Hola, desde un evento personalizado")}/>
            </div>


        );
    }
}