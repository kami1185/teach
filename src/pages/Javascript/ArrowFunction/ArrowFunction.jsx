import React, { useState } from 'react'
// import arrow_this from './../../../assets/javascript/ArrowFunction/arrow_this.webp';
import * as arrow_function from './ArrowFunctionExamples.js';

const ArrowFunction = () => {
    
    const [element, setElement] = useState(null);

    function Person(name) {
        //El constructor Persona() define `this` como una instancia de él mismo
        this.name = name;
        this.age = 0;
        //console.log('Function Normal this',this)
    
        setInterval(() => {
            //`this` hace referencia al objeto Persona()
            this.age = this.age + 1;
        }, 1000);
    }
    const per = new Person('Luisa');
    //console.log('Function Normal: ',per); //Print the edge value each second
    //console.log('Function Normal age property: ',per.age); //print age

    var objeto = {
        id: 42,
        contador: function contador() {
          setTimeout(() => {
            //console.log('Id: ',this.id + 10);
          }, 1000);
        }
    };

    console.log(objeto.id, objeto.contador())

    const handleArrow = () => {
        arrow_function.myFunctionArrow();
        //setElement(res);
    }

    const handleNormal = () => {
        arrow_function.myFunctionNormal();
        //setElement(res);
    }


    return (
        <section>
            <h2>Arrow Function</h2> 
            <ul>
                <li>
                    <h3>Contexto Léxico de this.</h3> 
                    <p>Las arrow function no vinculan su propio this, en otras palabras no tienen this, no son duenas
                        de la ejecucion de una funcion, en cambio heredan el ambito o contexto padre, a esto se le 
                        llama "lexical scoping" o "lexico de ambito o contexto".
                    </p>
                    <p>Una arrow function no hace el bind del valor THIS, no puede cambiar el valor de this.</p>
                    <p>Las arrow function tienen la capacidad de capturar el objeto this del contexto donde la arrow 
                        se ejecuta y así utilizarlo dentro de su bloque de sentencias.
                    </p> 
                    {/* <picture className='images'>
                        <source srcSet={arrow_this} sizes="(min-width:768px) 900px" />
                        <source media="(min-width: 800px)" srcSet={arrow_this}/>
                        <img src={arrow_this} alt="Flowers" style={{width: "100%"}}></img>
                    </picture> */}
                    <div>
                        <button onClick={handleArrow}>Arrow Function</button>
                        <p>{element}</p>
                        <button onClick={handleNormal}>Normal Function</button>
                        <p>{element}</p>
                    </div>
                    
                </li>
                <li>
                    <h3>Arrow Function como metodos</h3>
                </li>
            </ul>

            
        </section>
    )
}

export default ArrowFunction