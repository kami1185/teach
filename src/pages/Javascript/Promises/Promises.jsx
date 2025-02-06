import { dividerClasses } from "@mui/material";
import { useCallback, useRef, useState } from "react";

export default function Promises(){

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const [error, setError] = useState(null)
    const refEle = useRef(null);

    function raisedSquareCallback(value){
        if(typeof value !== "number")
            return Promise.reject(`Error, the value ${value} is not a number`)
            return new Promise((resolve) => {
                setTimeout(()=>{
                    resolve({value, res: value*value});
                },2000)
            })
    }

    function main(){
        raisedSquareCallback(9)
            .then(res => {
                setResult(result=>[...result, `${res.value} * ${res.value} = ${res.res}`])
                return raisedSquareCallback(8)
            })
            .then(res => {
                setResult(result=>[...result, `${res.value} * ${res.value} = ${res.res}`])
                return raisedSquareCallback(7)
            })
            .then(res => {
                setResult(result=>[...result, `${res.value} * ${res.value} = ${res.res}`])
                return raisedSquareCallback(6)
            })
            .then(res => {
                setResult(result=>[...result, `${res.value} * ${res.value} = ${res.res}`])
                return raisedSquareCallback('string')
            })
            .catch(err=>setResult(result=>[...result, `${err}`]))
    }

    const example1 = () => {
        setResult([])
        main()
    }

    //*********************************************************************************************** */

    function example2(){
        refEle.current.value = "";
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // The API call was successful!
            // If the response is successful, get the JSON
            if (response.ok) {
                return response.json();
            }
            // Otherwise, throw an error
            throw response.status;
            // return response.json().then(function (json) {
            //     throw json;
            // });
        })  // This is the JSON from our response:
        .then((data) => { setResult2(data) })
        .catch((error) => { setError(error.message) })
    }

    let string = ''
    const addResult = (id) => {
        string += `${id} - `
        refEle.current.innerText = string
    }

    return (
        <>
            <p>Llamamos programación asíncrona cuando nuestro código debe esperar a que ocurra cierto procesamiento 
                que no está bajo nuestro control, como una peticion a una API externa, y luego continuar con la ejecución de 
                la siguiente tarea.</p>
            <p>Las promesas proporcionan una forma de escribir código asíncrono que es más legible y manejable que usar funciones 
                de devolución de llamada callback.</p>
            <p>Una Promise recibe una funcion con 2 parametros Resolve y Reject, new Promise((resolve, reject)) al contrario de una 
                Callback que recibe una funcion la cual sera llamada cuando una operacion asincrona termine</p>               
            <p>Una Promise retorna una instancia del objeto Promise</p>
            <p>Una Promise resuelve el problema de las Callback cuando queremos concatenar callback para realizar diferentes
                tareas que dependen de otras asi como el manejo de los errores ya que lo hariamos por cada iteraccion o 
                callback, esto lo resuelven las Promises.
                Una Promise es un objeto que representa un valor el cual no se sabe cuando estara disponible, ejemplo una 
                peticion http, acceder al localStorage donde realiza una operacion asincrona, mientras espera el codigo 
                sigue ejecutandose pero se deja preparado en la promesa que codigo ejecutar cuando se resuelva la Promesa,
                cuando el dato ya esta disponible JS vuelve a la promesa que quedo pendiente y ejecuta lo que se dejo preparado 
                y continua con el codigo. La IMPORTANCIA de las Promises es que maneja la asincronia de forma sencilla y eficiente.
            </p>
            <p>Una Promesa tiene tres estados, que son Pending, Fulfilled  y Rejected. </p>
            <ul>
                <li>Pending es el estado inicial de una Promesa. Significa que la operación aún debe cumplir la Promesa.</li>
                <li>Fulfilled representa la finalización exitosa de la operación asíncrona. En este punto, la Promesa tiene 
                    un valor, al que se puede acceder mediante el método then.</li>
                <li>Rejected indica la falla de la operación asíncrona de Promise. Se accede al error con el metodo catch</li>
            </ul>
            <h4></h4>
            
            <hr />
            <div className="columns-grid">
                <div>
                    <pre>
                        {`

function raisedSquareCallback(value){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({value, res: value*value});
        },0 | Math.random * 1000)
    })
}

raisedSquareCallback(9)
    .then(res => console.log('{res.value} * {res.value} = ',res.res))
raisedSquareCallback(8)
    .then(res => console.log('{res.value} * {res.value} = ',res.res))
raisedSquareCallback(7)
    .then(res => console.log('{res.value} * {res.value} = ',res.res))
                                
                        `}
                        </pre>
                        <button onClick={example1}>Test Example 2</button>
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
                            {`
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
    // The API call was successful!
    // If the response is successful, get the JSON
    if (response.ok) {
        return response.json();
    }
    // Otherwise, throw an error
    throw response.status;
    // return response.json().then(function (json) {
    //     throw json;
    // });
})  // This is the JSON from our response:
.then((data) => { setResult2(data) })
.catch((error) => { setError(error) });

                            `}
                        </pre>
                        <button onClick={example2}>Test Example 2</button>
                        <p id="string" ref={refEle}></p>
                        
                            
                        {result2 
                            ? result2.map(item => 
                                addResult(item.id)
                                // <p key={item.id}>{item.id}</p>
                                )
                            : <p>{error}</p>
                        }
                       
                        
                    </div>
                </div>
        </>
    )
}

// export default Promises