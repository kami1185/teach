export default function Hoisting(){

    var x = 5;
    (function () {
        console.log("HOISTING X:", x); // no obtenemos '5' sino 'undefined'
        var x = 10;
        console.log("HOISTING X:", x); // 10
    })();


    var z = 1; // Inicializa x
    console.log(z + " HOISTING " + y); // '1 undefined'
    var y = 2; // Inicializa y
    console.log(z + " HOISTING " + y); // '1  2'

    return (
        <>
            <p>Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones 
                se mueven a la parte superior de su ámbito antes de la ejecución del código.
                Se refiere a un comportamiento específico de la forma en que las declaraciones de variables y funciones 
                se tratan durante la fase de compilación y ejecución del código en un entorno de JavaScript.</p>

            <p>Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de 
                variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en 
                realidad. 
                Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase 
                de compilación, pero quedan exactamente en dónde las has escrito en el código.</p>

            <h3>Hoisting con Funciones </h3>

            <p>Una de las ventajas de declarar funciones antes de ejecutar cualquier otro segmento de código es que 
                permite utilizar una función antes de declararla en el código, ejemplo:</p>

            <pre>
                <code>
                    {`
                        // 1. Primero declaramos la funcion antes de escribir otro segmento de codigo
                        function foo() {
                            console.log("Hola desde foo!");
                        }

                        // Otro segmento de codigo .....

                        // 2. Luego llamamos la funcion
                        foo(); // Output: "Hola desde foo!"
                    `}
                </code>
            </pre>


            <p>Otra ventaja es que podemos llamar a la función en el código, antes de que sea escrita. 
                Esto sucede por la manera en la que el CONTEXTO de ejecución trabaja en JavaScript, ejemplo:</p>

            <pre>
                <code>
                    {`
                        // 1. Llamamos la funcion
                        foo(); // Output: "Hola desde foo!"

                        // Otro segmento de codigo .....

                        // 2. declaramos la funcion despues
                        function foo() {
                            console.log("Hola desde foo!");
                        }
                    `}
                </code>
            </pre>

            <h3>Hoisting con Variables y Datos</h3>

            <p>La declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en 
                cualquier parte del código es igual a declararla al inicio del mismo. 
                La variable se eleva y pasa a declararse al comienzo de su CONTEXTO, en este caso la función que la 
                contiene.</p>

            <pre>
                <code>
                    {`
                        var x = 5;

                        (function () {
                            // Se está utilizando una variable que es declarada e inicializada después de usarla var x = 10;, el valor será undefined.
                            // console.log("HOISTING X:", x); representaria = var x; se moveria al inicio de la funcion sin ser inicializada 
                            console.log("HOISTING X:", x); // no obtenemos '5' sino 'undefined' 
                            //  var x = 10; representaria x = 10; asignar un valor 
                            var x = 10;
                            console.log("HOISTING X:", x); // 10
                        })();
            
                    `}
                </code>
            </pre>

            <p>JavaScript sólo utiliza el hoisting en declaraciones, no inicializaciones. Si está utilizando una 
                variable que es declarada e inicializada después (está después en el código) de usarla, el valor 
                será undefined.</p>

            <pre>
                <code>
                    {`
                        console.log(x); // Output: undefined
                        var x = 10;
                        console.log(x); // Output: 10
            
                    `}
                </code>
            </pre>
        </>
    )
}

 