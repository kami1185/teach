
export function This(){
    return (
        <>
            <h2>Que es This?</h2>
            <p>Es una palabra reservada en JavaScript que podemos utilizar para referirnos al contexto
                en el que se invoca, por lo que su valor implícito puede variar durante la ejecución del código.</p>
            <p>La keyword THIS hace referencia al objeto al que pertenece,
                obteniendo su valor en el momento en el que una función es invocada. 
                Esto implica dos conceptos clave:</p>

            <p>* La keyword this hace referencia a su “propietario”.</p>
            <p>* Su valor dependerá del lugar desde la cual sea invocada.</p>  

            <h3>En el contexto global</h3>
            <p>Cuando hacemos uso de this en el ámbito global, es decir fuera de cualquier función, 
                siempre hará referencia al objeto global. En el caso del navegador, hablamos del objeto window.</p>
            <p>console.log(this === window) // true  </p>

            <h3>En un método</h3>
            <p>Dentro de un método perteneciente a un objeto, this hace referencia al “propietario” de dicho método.</p>
            
            
            <h3>BIND</h3>
            <p>El método bind() crea una nueva función que, al ser invocada, asigna a this el valor que se le pasa por parámetro.</p>
            <p>fun.bind(thisArg[, arg1[, arg2[, ...]]])</p>

            
            <h3>CALL</h3>
            <p>El método call(), a diferencia de bind(), ejecutará la función directamente sin necesidad de tener 
                que crear una nueva. Por lo demás, la sintaxis es prácticamente la misma:</p>
            <p>function.call(thisArg[, arg1[, arg2[, ...]]])</p>            

            <h3>APPLY</h3>
            <p>El método apply() únicamente se diferencia del método call() en la forma en la que se le pasan los argumentos, 
                puesto que éste los acepta en forma de array:</p>
            <p>fun.apply(thisArg[, argsArray])</p>

        </>
    )
}

