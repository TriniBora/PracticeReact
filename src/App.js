import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import Estado from './components/Estado';
import './App.css';
import Formularios from './components/Formularios';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
          <Componente msg='Hola soy un componente funcional expresado desde una prop' />
          <hr/>
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={ 19 }
            booleano={ true }
            arreglo={ [ 1, 2, 3 ] }
            objeto={ { nombre: "Trinidad", apellido: "Boragini", edad: 43 } }
            funcion={ num => num * num }
            elementoReact={ <i>Esto es un elemento React</i> }
            componenteReact={ <Componente msg="Soy un componente pasado como prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <Formularios />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Seguidores"/>

        </section>
      </header>
    </div>
  );
}

export default App;
