import { useState } from 'react';
import '../../css/stylesCode.scss';

export default function Callback(){

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);

    //************************************* Example 1: ******************************************************

    //recibe un valor (value) y una funcion a ejecutar (callback)
    function raisedSquareCallback(value, callback){
        setTimeout(()=>{
            setResult(result=>[...result,'Async task completed!']);
            // recibe un valor y la funcion a ejecutar, la multiplicacion y seria la callback a resolver:
            callback(value, value*value);
        },0 | Math.random() * 2000)
    }

    const example1 = () => {
        setResult([]);
        // enviamos el valor a calcular y una funcion anonima en la cual el callback nos devuelve el valor 
        // y el resultado del valor elevado al cuadrado, y recibimos esos argumentos en la funcion anonima
        raisedSquareCallback(0,(value,res)=> {
            setResult(result=>[...result,'Init Callback']);
            setResult(result=>[...result,`${value} * ${value} = ${res}`]);
            // se puede invocar nuevamente la Callback, ESTO FORMA UN CALLBACK HELL QUE SE DEBE EVITAR
            raisedSquareCallback(1,(value,res)=> {
                setResult(result=>[...result,`${value} * ${value} = ${res}`]);
                raisedSquareCallback(2,(value,res)=> {
                    //console.log(`${value} * ${value} = ${result}`)
                    setResult(result=>[...result,`${value} * ${value} = ${res}`]);
                })
            })
        })
    }

    //************************************* Example 2: ******************************************************
    function doAsyncTask(dni,callback) {
        setResult2(result2=>[...result2,' 2. Get number (123456).']);
        setTimeout(function () {
            setResult2(result2=>[...result2,'4. Async Task completed.']);
            callback(dni); // Llamada al callback después de completar la tarea.
        }, 2000);
    }
        
    function onTaskComplete(dni) {
        setResult2(result2=>[...result2,`5. Callback: Task completed! ${dni}`]);
    }
        
    const example2 = () => {
        setResult2([]);
        setResult2(result2=>[...result2,'1. Init Async Task...']);
        doAsyncTask("123456",onTaskComplete);
        setResult2(result2=>[...result2,'3. Task in progress...']); 
    }


    const doTask = (iterations, callback) => {
        const numbers = [];
      
        for (let i = 0; i < iterations; i++) {
          const number = 1 + Math.floor(Math.random() * 6);
          console.log(number)
          numbers.push(number);
          if (number === 6) {
            callback({
              error: true,
              message: "Se ha sacado un 6"
            });
            return;
          }
        }
      
        /* Termina bucle y no se ha sacado 6 */
        return callback(null, {
          error: false,
          value: numbers
        });
    }

    doTask(10, (err, res)=>{
        if(err){
            console.log("Se ha sacado un ", err.message);
            return;
        }
        console.log('Tiradas buenas: ', res.value)
    })

    return (
        <>
            <p>En JavaScript, un callback es una función que se pasa como argumento a otra función para que sea llamada 
                de nuevo (call back) en un momento posterior, después de que se haya completado una tarea asíncrona o algún 
                evento específico haya ocurrido. </p>
            <p>La Caracteristica de un Callback es esperar que una funcion asincrona termine para 
               que el callback pueda recibir un dato </p>
            <p>Javascript para trabajar la asincronia JS tiene diversos mecanismos como las Callback. JS llama a sus 
                funciones usando las Callback.
            </p>
            <p>Para evitar concatenar callback en tareas o procesos asincronos, se puede usar las Promises, o funciones 
                Asincronas Async Functions
            </p>
            <hr />
            <div className="columns-grid">
                <div>
                    <pre>
                        {/* <code> */}
{`
//recibe un valor (value) y una funcion a ejecutar (callback)

function raisedSquareCallback(value, callback){
    setTimeout(()=>{
        // console.log('Async task completed!') =>          Async task completed!
        // recibe un valor y la funcion a ejecutar (la funcion anonima (value,result)) 
        // que es la callback, pasando el valor y el resultado de la multiplicacion:
        callback(value, value*value);
    },0 | Math.random * 1000)
}

// enviamos el valor a calcular y una funcion anonima en la cual el callback nos 
// devuelve el valor y el resultado del valor elevado al cuadrado, y recibimos 
// esos argumentos en la funcion anonima

raisedSquareCallback(0,(value,result)=> {
    // console.log('Init Callback') =>               Init Callback
    // console.log(value * value = result) =>        0 * 0 = 0
    // se puede invocar nuevamente la Callback, ESTO FORMA UN CALLBACK HELL QUE 
    // SE DEBE EVITAR
    raisedSquareCallback(1,(value,result)=> {
        // console.log(value * value = result) =>     1 * 1 = 1
        raisedSquareCallback(2,(value,result)=> {
            // console.log(value * value = result) => 2 * 2 = 4
        })
    })
    // Para evitar concatenar callback en tareas o procesos asincronos,
    // se puede usar las Promises, o funciones Asincronas Async Functions
})
`}
                        {/* </code> */}
                    </pre>
                    <button onClick={example1}>Test Example 1</button>
                    <ul>
                        {
                            result.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <pre>
                        {/* <code> */}
{`
function doAsyncTask(dni,callback) {
    console.log( 2. Get number (123456));
    setTimeout(function () {
        console.log(4. Async Task completed);
        // Llamada al callback onTaskComplete después de completar la tarea:
        callback(dni); 
    }, 2000);
}
    
function onTaskComplete(dni) {
    console.log(5. Callback: Task completed! 123456');
}
    
console.log(1. Init Async Task..);
doAsyncTask("123456",onTaskComplete);
console.log(3. Task in progress..); 

`}
                        {/* </code> */}
                    </pre>  
                    <button onClick={example2}>Test Example 2</button>
                    <ul>
                        {
                            result2.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))
                        }
                    </ul>     
                </div>
            </div>
            
        </>
    )
}
