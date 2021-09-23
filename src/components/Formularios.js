import React, { useState } from 'react';

//UNA VARIABLE DE ESTADO POR CADA INPUT
// export default function Formularios() {
//     const [ nombre, setNombre ] = useState( "" );
//     const [ sabor, setSabor ] = useState( "" );
//     const [ lenguaje, setLenguaje ] = useState( "" );
//     const [ terminos, setTerminos ] = useState( false );

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("El formualrio se ha enviado")
//     }

//     return (
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={ handleSubmit}>
//                 {/*ELEMENTOS TEXT O TEXTAREA*/ }
//                 <label htmlFor="nombre">Nombre: </label>
//                 <input
//                     type="text"
//                     id="nombre"
//                     name="nombre"
//                     value={ nombre }
//                     onChange={ ( e ) => setNombre( e.target.value ) } />

//                 {/*ELEMENTOS RADIO*/ }
//                 <p>Elige tu sabor JS favorito:</p>
//                 <input
//                     type="radio"
//                     id="vanilla"
//                     name="sabor"
//                     value="vanilla"
//                     defaultChecked
//                     onChange={ ( e ) => setSabor( e.target.value ) } />
//                 <label htmlFor="vanilla">Vanilla</label>
//                 <input
//                     type="radio"
//                     id="react"
//                     name="sabor"
//                     value="react"
//                     onChange={ ( e ) => setSabor( e.target.value ) } />
//                 <label htmlFor="react">React</label>
//                 <input
//                     type="radio"
//                     id="angular"
//                     name="sabor"
//                     value="angular"
//                     onChange={ ( e ) => setSabor( e.target.value ) } />
//                 <label htmlFor="angular">Angular</label>

//                 {/*ELEMENTOS SELECT*/ }
//                 <p>Elige tu lenguaje de programación favorito:</p>
//                 <select
//                     name="lenguaje"
//                     defaultValue=""
//                     onChange={ ( e ) => setLenguaje( e.target.value ) } >
//                     <option value="">---</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">GO</option>
//                     <option value="rb">Ruby</option>
//                 </select>
//                 <br />
//                 {/*ELEMENTOS CHECKBOX*/ }
//                 <label htmlFor="terminos">Acepto términos y condiciones</label>
//                 <input
//                     type="checkbox"
//                     id="terminos"
//                     name="terminos"
//                     onChange={ ( e ) => setTerminos( e.target.checked ) } />
//                 <br />
//                 <input
//                     type="submit"/>
//                 </form>
//         </>
//     );
// }

//UNA SOLA VARIABLE DE ESTADO PARA TODOS LOS INPUT
export default function Formularios() {
    const [ form, setForm ] = useState( {} );

    const handleChange = (e) => {
        setForm( {
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChecked = (e) => {
        setForm( {
            ...form,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formualrio se ha enviado")
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={ handleSubmit}>
                {/*ELEMENTOS TEXT O TEXTAREA*/ }
                <label htmlFor="nombre">Nombre: </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={ form.nombre }
                    onChange={ handleChange} />

                {/*ELEMENTOS RADIO*/ }
                <p>Elige tu sabor JS favorito:</p>
                <input
                    type="radio"
                    id="vanilla"
                    name="sabor"
                    value="vanilla"
                    defaultChecked
                    onChange={ handleChange } />
                <label htmlFor="vanilla">Vanilla</label>
                <input
                    type="radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={ handleChange } />
                <label htmlFor="react">React</label>
                <input
                    type="radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={ handleChange } />
                <label htmlFor="angular">Angular</label>

                {/*ELEMENTOS SELECT*/ }
                <p>Elige tu lenguaje de programación favorito:</p>
                <select
                    name="lenguaje"
                    defaultValue=""
                    onChange={ handleChange } >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                {/*ELEMENTOS CHECKBOX*/ }
                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    onChange={ handleChecked } />
                <br />
                <input
                    type="submit"/>
                </form>
        </>
    );
}
