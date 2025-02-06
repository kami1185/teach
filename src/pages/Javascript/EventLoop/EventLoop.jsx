import { useState } from "react";
import Slider from "../../../components/Slider/Slider";


export default function EventLoop(){

    const [message, setMessage] = useState([]);

    function showDate(){
        setTimeout(()=>{
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            //console.log('1. today')
            setMessage(message => [...message, `1. ${today}`]);
        },0);
    }

    function greeting(){
        //console.log('2. Hello ')
        setMessage(message=>[...message, '2. Hello']);
    }

    function goodBye(){
        //console.log('3. Bye ')
        setMessage(message=>[...message, '3. Bye']);
    }

    async function getData(url = "") {
        // Default options are marked with *
        const response = await fetch(url);
        return response.json(); // parses JSON response into native JavaScript objects
    }
      
    // Primero se ejecuta la funcion greeting
    // luego por Prioridad Event Loop controla las micro task queue de las Promesas antes que el setTimeout
    // luego de resolver las Promesas continua

    function main(){
        showDate()
        greeting()
        
        Promise.resolve('Promise #1').then(msg => {
            //console.log('4. Promise #1')
            setMessage(message => [...message, `4. ${msg}`]);
        });
        Promise.resolve('Promise #2').then(msg => {
            //console.log('5. Promise #2')
            setMessage(message => [...message, `5. ${msg}`])
        });
        getData("https://randomuser.me/api/?results=20").then((data) => {
            //console.log(data); // JSON data parsed by `data.json()` call
            setMessage(message => [...message, `6. ${data}`])
        });
        goodBye();
    }

    const example1 = () => {
        setMessage([])
        main()
    }

    //*********************************************************************************************************/
    let interval;
    function Mathpow(){
        //console.log('1.')
        setMessage(message=>[...message,`1. ${Math.pow(10,10)}`]);
    }
    function Callback_SetInterval(){
        interval = setInterval(() => {
            //console.log('4.')
            setMessage(message=>[...message,`4 SetInterval`]);
            setTimeout(()=>{
                //console.log('5.')
                setMessage(message => [...message, `5. SetTimeout`]);
            },500);
        }, 1000);
    }
    function Message1(){
        setTimeout(()=>{
            //console.log('2.')
            setMessage(message => [...message, `2. Message`]);
        },0);
    }
    function Message2(){
        let a = 5;
        let b = 5;
        let c = (a*b);
        //console.log('3.')
        setMessage(message=>[...message,`3. ${a} * ${b} = ${c}`]);
    }
    
    function Callback_ClearInterval(){
        setTimeout(()=>{
            //console.log('6.')
            clearInterval(interval);
            setMessage(message => [...message, `6. clearInterval`]);
        },1100);
    }
    function Message3(){
        //console.log('7.')
        setMessage(message=>[...message,`7. Message`]);
    }

    function main2(){
        Mathpow()
        Message1()
        Message2()
        Callback_SetInterval()
        Callback_ClearInterval()
        Message3()
    }

    const example2 = () => {
        setMessage([])
        main2()
    }

    //*****************************************************************************************************


    return (
        <>
            <p>JavaScript es un lenguaje de un solo sub proceso o hilo Single Thread osea solo puede ejecutar una sola cosa 
                a la vez, lo cual evita problemas de concurrencia. Pero JS al ser de un solo hilo o single thread cuando 
                una peticion tarda mucho tiempo en procesar la solicitud el hilo principal puede quedar bloqueado. 
                JS para evitar el bloqueo trabaja bajo un modelo asincrono y no bloqueante y tiene un Event Loop de un solo hilo para 
                operaciones de entrada y salida gracias a esto es concurrente!.
            </p>
            <h4>Procesamiento Single Thread y Multi Thread</h4>
            <p>Los Thread son las unidades basicas de ejecucion cada proceso que realiza nuestro pc. Como JS es single thread
                el Event Loop es un ciclo continuo que controla CONSTANTEMENTE el call stack y la cola de tareas Task Queue.
                Se encarga de gestionar las funciones asincronas, Event Loop funciona con una pila = Stack Call y una cola =
                Task Queue: 
            </p>
            <h5>Call Stack: </h5><p> Es una estructura de dato tipo LIFO (Last in, First out) ultimo en llegar primero en salir, que registra en donde se encuentra la aplicacion, apila las 
                                    funciones de la aplicacion las ejecuta y las elimana del stack.
                                    El codigo sincrono se pone en esta pila y se ejecuta linea por linea, cuando encuentra un 
                                    callback o una promesa o una funcion asincrona, estas funciones las 
                                    pasa a una cola o lista especial Web Api mientras esperan el tiempo definido o lo que tarden
                                    en procesar. 
                                    </p>

            <h5>Task Queue: </h5><p> Es una lista que usa el metodo FIFO (First input, First output ) primero en 
                                     entrar primero en salir. Es la cola de tareas donde se van colocando funciones que han terminado 
                                     su tiempo de espera en Web Api. Comprueba que el Call Stack este vacio y le pasa las funciones 
                                     para ser ejecutadas. </p>

            <h5>Web Apis: </h5><p> Es la cola de funciones que pasan al stack, usa el metodo FIFO primero en 
                                     entrar primera en salir.
                                     Pone la siguiente tarea en el Call Stack si esta vacio. </p>
            
            <div className="container-slider">
                <Slider/>
            </div>
            
            <hr />
            <div className="columns-grid">
                <div>
                    <pre>
                        {`

setTimeout(()=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('1. today')
},0);

console.log('2. Hello ')

Promise.resolve('Promise #1').then(msg => {
    console.log('4. Promise #1')
});

Promise.resolve('Promise #2').then(msg => {
    console.log('5. Promise #2')
});

getData("https://randomuser.me/api/?results=20").then((data) => {
    console.log('6. data'); // JSON data parsed by 'data.json()' call
});

async function getData(url = "") {
    const response = await fetch(url);
    return response.json(); 
}
getData("https://randomuser.me/api/?results=20").then((data) => {
        console.log('6. data'); // JSON data parsed by 'data.json()' call
});

console.log('3. Bye ')

// First the greeting and goodBye functions are executed.
// Then by Priority Event Loop controls the micro
// task queue of the Promises before the setTimeout.
// After resolving the Promises continue with the 
// showDate function that contains the setTime.
                            
                        `}
                    </pre>
                    <button onClick={example1}>Test Example 2</button>
                    <ul>
                        {
                            message.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))
                        }
                    </ul>  
                </div>
                <div>
                    <pre>
                        {`
console.log('1. Math.pow(10,10)')

setTimeout(()=>{
    console.log('2. Message')
},0);

console.log('3. 5*5 = 25')

interval = setInterval(() => {
    console.log('4. Message')
    setTimeout(()=>{ //console.log('5. Message') },500);
}, 1000);

setTimeout(()=>{ 
    console.log('6. clearInterval')
    clearInterval(interval);
},1100);

console.log('7. Message')

                        `}
                    </pre>
                    <button onClick={example2}>Test Example 2</button>
                    <ul>
                        {
                            message.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))
                        }
                    </ul> 
                </div>
            </div>
            
        </>
    )
}


