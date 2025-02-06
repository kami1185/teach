
    //let saludar;
    //console.log('HOISTING LET',saludar); // saludar is undefined
    //saludar = "HOLAAAAAAAAAA"
    // console.log(saludar);

export default function Variables(){
    return (
        <ul>
            <li>
                <h3>VAR</h3>
                <p>Las declaraciones de variables con VAR tienen un ámbito global o un ámbito de función/local, osea donde 
                estan disponibles para su uso.

                Ambito es global cuando una variable var se declara fuera de una función. 
                Esto significa que cualquier variable que se declare con var fuera de una función está 
                disponible para su uso en todo el codigo.

                Ambito local cuando se declara dentro de una función, está disponible y solo se puede acceder a 
                ella dentro de esa función.
                </p>
                
                <pre>
                    <code>
                        {`
                            var global = "global var declarated ";

                            function nuevaFuncion() {
                                var local = "local var declarated";
                            }
                            console.log(hola); // error: local is not defined
                            console.log(test); // global var declarated
                        `}
                    </code>
                </pre>

                <p>Las variables con var se pueden volver a declarar y modificar en el mismo ambito</p>

                <pre>
                    <code>
                        {`
                            var testing = "first declaration";
                            var testing = "second declaration";  // es un problema redefinir la variable, podria tomar valores distintos sin querer

                        `}
                    </code>
                </pre>

                <h3>Hoisting de var</h3>

                <p>Las variables con VAR se elevan a la parte superior de su ámbito y se inicializan con un valor de undefined.</p>

                <pre>
                    <code>
                        {`
                            var init;
                            console.log(init); // init is undefined
                            init = "init var"
                        `}
                    </code>
                </pre>

                
            </li>

            <li>
                <h3>LET</h3>
                <p>Let tiene un ambito o contexto de bloque de codigo delimitado por llaves {}, si la variable
                    esta declarada en un bloque let esta disponible solo dentro de ese bloque. </p>
                <pre>
                    <code>
                        {`
                            let init = "init declarated and inizializated";
                            let number = 4;
                        
                            if (number > 3) {
                                let hello = "let inside block";
                                console.log(hello);// "let inside bl"
                            }
                            console.log(hello) // hello is not defined   
                        `}
                    </code>
                </pre>

                <p>Let se puede modificar su valor pero no volver a declarse en su mismo ambito.</p>

                <pre>
                    <code>
                        {`
                            let init = "first declaration";
                            let init = "re-declaration"; // error: Identifier 'init' has already been declared 
                        `}
                    </code>
                </pre>

                <p>Pero se puede definir la misma variable en diferentes ambitos o contextos, esto se debe 
                    a que las variables son tratadas como variables diferentes porque estan en contextos distintos: </p>

                <pre>
                    <code>
                        {`
                            let init = "first declaration"; // different context 
                            let op = true
                            if(op){
                                let init = "re-declaration" // init is declarated in other context, inside if block
                                console.log(init) // second declaration
                            }
                            console.log(init) // first declaration, the init variable inside if block doesn't 
 
                        `}
                    </code>
                </pre>

                <h3>Hoisting de LET</h3>

                <p>Las variables con LET se elevan a la parte superior de su ámbito pero no se inicializan con un 
                    valor de undefined.
                    Si se usa una variable let antes de declararla, obtendrás un Reference Error.
                </p>
            </li>

            <li>
                
            </li>
        </ul>
    )
}
