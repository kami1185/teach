import React from 'react'

const AsyncAwait = () => {
  return (
    <section>
        <h2>Async Await</h2> 
        <ul>
            <li>
                <p>Las palabras clave async y await, simplifican la programación asíncrona, facilitando el flujo de escritura 
                    y lectura de código; por lo que es posible escribir código que funcione de forma asíncrona, pero que se lea 
                    y estructure de forma síncrona.
                </p>
            </li>
            <li>
                <p>La palabra clave async se utiliza antes de una función para indicar que la función devuelve una Promesa.
                    Luego, dentro de la función, puedes utilizar await para esperar la resolución de una Promesa antes de 
                    continuar.</p>
            </li>
            <li>
                <p>De esta forma, la ejecución de la función externa (la función async) se pausará hasta que se resuelva
                    la Promesa.</p>
            </li>
            <li>
                <p>La palabra clave await recibe una Promesa y la convierte en un valor de retorno
                    (o genera una excepción en caso de error). Cuando usamos await, JavaScript esperará hasta que 
                    finalice la Promesa. Si se completa con éxito (el término utilizado es fulfilled), 
                    el valor obtenido es retornado. Si la Promesa es rechazada (el término utilizado es rejected), 
                    se retorna el error arrojado por la excepción.</p>
            </li>
            <li>
                <p>Async/Await facilita el manejo de errores con el bloque try...catch, lo que hace que el código 
                    sea más robusto y menos propenso a errores.</p>
            </li>
        </ul>

        
    </section>
  )
}

export default AsyncAwait