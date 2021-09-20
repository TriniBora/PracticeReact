import React, { Component } from 'react';

function EstadoAHijo(props) {
    return (
        <div>
            <h3>{ props.contadorHijo }</h3>
        </div>
    );
}

//Pasamos estados de padre a hijo como una props (un componente funcional no puede teenr estado, antes de los Hooks)
export default class Estado extends Component{
    constructor (props) {
        super( props );
        this.state = {
            contador:0,
        }

        setInterval( () => {
            //this.state.contador +=1 //esto es incorrecto, no puedo modificarlo directamente
            this.setState( {
                contador: this.state.contador + 1,
            })
        },1000)
    }
    render() {
        return (
            <>
                <div>
                    <h2>El State</h2>
                    <p>{ this.state.contador }</p>
                    <EstadoAHijo contadorHijo={ this.state.contador}/>
                </div>
            </>
        );
    }
}