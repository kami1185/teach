import React, { useEffect } from 'react';
import Prism from 'prismjs'
import 'prismjs/themes/prism.css';
import ColorSnippetCode from '../../../components/ColorSnippetCode/ColorSnippetCode';

const Operators = () => {

    const sampleCode = `
        console.log(1 + "2"); // "12" (1 se convierte a "1")
        console.log(true + "3"); // "true3" (true se convierte a "true")
        console.log(null + "4"); // "null4" (null se convierte a "null")
        console.log(undefined + "5"); // "undefined5" (undefined se convierte a "undefined")
    `;

    return (
        <div>

            <h2>1. Operadores adicionales</h2>

            <ul>
                <li>
                    <p>Operador l&oacute;gico AND: <var>&amp;&amp;</var>&nbsp;</p>
                </li>
                <li>
                    <p>Operador l&oacute;gico OR: <var>||</var>&nbsp;</p>
                </li>
                <li>
                    <p>Operador l&oacute;gico NOT: <var>!</var>&nbsp;</p>
                </li>
                <li>
                    <p>El operador de m&oacute;dulo: <var>%</var>&nbsp;</p>
                </li>
                <li>
                    <p>El operador de igualdad: <var>==</var></p>
                </li>
                <li>
                    <p>El operador de igualdad estricta: <var>===</var></p>
                </li>
                <li>
                    <p>El operador de desigualdad: <var>!=</var></p>
                </li>
                <li>
                    <p>El operador de desigualdad estricta: <var>!==</var></p>
                </li>
                <li>
                    <p>El operador de asignaci&oacute;n de suma: <var>+=</var>&nbsp;</p>
                </li>
                <li>
                    <p>El operador de asignaci&oacute;n de concatenaci&oacute;n: <var>+=</var> (es el mismo que el anterior. Abordaremos m&aacute;s profundamente esto m&aacute;s adelante)</p>
                </li>
            </ul>

            {/* OPERADOR && AND*/}
            <h3>El operador l&oacute;gico AND en JavaScript:<var>&amp;&amp;</var></h3>
            <p>El <strong>operador l&oacute;gico AND</strong> se usa, por ejemplo, para confirmar si m&uacute;ltiples comparaciones devolver&aacute;n verdadero.</p>
            <p>En JavaScript, este operador consta de dos s&iacute;mbolos de et juntos:<var>&amp;&amp;</var>.</p>
            <p>Digamos que tiene la tarea de crear un c&oacute;digo que verifique si la variable <var>currentTime</var> est&aacute; entre las <var>9 a. m.</var> y las <var>5 p. m.</var>. El c&oacute;digo debe ser verdadero&nbsp;en console.log si&nbsp;<var>currentTime &gt; 9</var>&nbsp;<strong>y</strong>&nbsp;si&nbsp;<var>currentTime &lt; 17</var>.</p>
            <p>Aqu&iacute; hay una soluci&oacute;n:</p>

            <div>
                <div>var&nbsp;currentTime&nbsp;=&nbsp;10;</div>
                <div>console.log(currentTime&nbsp;&gt;&nbsp;9&nbsp;&amp;&amp;&nbsp;currentTime&nbsp;&lt;&nbsp;17);</div>
            </div>

            <p>Ahora, la pregunta es, &iquest;cu&aacute;l ser&aacute; el resultado de <var>console.log(true &amp;&amp; true)</var>?</p>
            <p>Para comprender la respuesta, debe conocer el comportamiento del operador l&oacute;gico <var>&amp;&amp;</var>.</p>
            <p>El operador l&oacute;gico <var>&amp;&amp;</var> devuelve un &uacute;nico valor: el booleano <var>true</var> o <var>false</var>, sobre la base de las siguientes reglas:</p>
            <ul>
                <li>
                    <p>Devuelve <var>true</var> si tanto los valores a su derecha como a su izquierda se eval&uacute;an como verdaderos.&nbsp;</p>
                </li>
                <li>
                    <p>Devuelve <var>false</var> en todas las dem&aacute;s instancias.</p>
                </li>
            </ul>
            <p>En otras palabras:</p>
            <p data-text-variant="body1"><var>console.log(true &amp;&amp; true)</var>&nbsp;generar&aacute;:&nbsp;<var>true</var>&nbsp;</p>
            <p><var>console.log(true &amp;&amp; false)</var> generar&aacute;: <var>false</var>&nbsp;</p>
            <p><var>console.log(false &amp;&amp; true)</var> generar&aacute;: <var>false</var>&nbsp;</p>
            <p><var>console.log(false &amp;&amp; false)</var> generar&aacute;: <var>false</var></p>

            {/* OPERADOR || OR */}
            <h3>El operador l&oacute;gico OR en JavaScript: <var>||</var></h3>
            <p>El operador l&oacute;gico OR en JavaScript consta de dos s&iacute;mbolos de tuber&iacute;a juntos:<var>||</var>.</p>
            <p>Se usa cuando desea verificar si al menos una de las comparaciones dadas se eval&uacute;a como <var>true</var>.</p>
            <p>Considere la siguiente tarea: Debe escribir un programa en JavaScript que devuelva <var>true</var> si el valor de la variable <var>currentTime</var> no est&aacute; entre <var>9</var> y <var>17</var>. Dicho de otra manera, su c&oacute;digo necesita console.log <var>true</var> si el valor de la variable <var>currentTime</var> es menor que <var>9</var> o mayor que <var>17</var>.</p>
            <p>Aqu&iacute; hay una soluci&oacute;n:</p>
            <div>
                <div>console.log(currentTime&nbsp;&lt;&nbsp;9&nbsp;||&nbsp;currentTime&nbsp;&gt;&nbsp;17);</div>
            </div>
            <p>Aqu&iacute; est&aacute;n las reglas de c&oacute;mo el operador <var>||</var> eval&uacute;a los valores dados:</p>
            <p><var>console.log(true || true)</var> generar&aacute;: <var>true</var></p>
            <p><var>console.log(true || false)</var> generar&aacute;: <var>true</var></p>
            <p><var>console.log(false || true)</var> generar&aacute;: <var>true</var></p>
            <p><var>console.log(false || false)</var> generar&aacute;: <var>false</var></p>
            <p>El operador l&oacute;gico OR siempre devolver&aacute; <var>true</var>, excepto cuando ambos lados se eval&uacute;en como <var>false</var>. En otras palabras, para que el operador l&oacute;gico OR devuelva <var>false</var>, los resultados de ambas comparaciones <strong>deben</strong> devolver false.</p>
            <p>Volviendo al ejemplo de verificar <var>currentTime &lt; 9&nbsp;</var>o&nbsp;<var>currentTime &gt; 17</var>, esto tiene sentido: la &uacute;nica vez que obtendr&aacute; <var>false</var> es cuando el valor almacenado en la variable <var>currentTime</var> es mayor que <var>9</var> y menor que <var>17</var>.</p>

            {/* OPERADOR ! NOT */}
            <div>
                <h3>El operador l&oacute;gico NOT: !</h3>
                <p>En JavaScript, el s&iacute;mbolo del operador l&oacute;gico NOT es el signo de exclamaci&oacute;n: <var>!</var>.</p>
                <p>Puede imaginarse el operador <var>!</var> como un interruptor, que cambia el valor booleano evaluado de <var>true</var> a <var>false</var> y de <var>false</var> a <var>true</var>.</p>
                <p>Por ejemplo, si asigno el valor booleano de <var>true</var> a la variable <var>petHungry</var>:</p>
                <p><var>var petHungry = true;</var></p>
                <p>entonces puedo registrar en la consola el hecho de que la mascota ya no tiene hambre usando el operador <var>!</var> para dar vuelta el valor booleano almacenado dentro de la variable <var>petHungry</var>, de la siguiente manera:</p>
                <p><var>console.log("Pet is hungry: ", !petHungry)</var></p>
                <p><var>console.log(petHungry);</var></p>
                <p>Este es el resultado del c&oacute;digo anterior:</p>
                <div>
                    <div>Pet&nbsp;is&nbsp;hungry:&nbsp;false</div>
                    <div>true</div>
                </div>
            </div>

            {/* OPERADOR MODULO %  */}
            <div>
                <h3>El operador de m&oacute;dulo: %</h3>
                <div>El operador de m&oacute;dulo es otro operador matem&aacute;tico en JavaScript. Devuelve el resto de la divisi&oacute;n.</div>
                <br />
                <div>Para demostrar c&oacute;mo funciona, imagine que un peque&ntilde;o restaurante que tiene 4 sillas por mesa y un total de 5 mesas, de repente recibe 22 comensales.</div>
                <br />
                <div>&iquest;Cu&aacute;ntos comensales no podr&aacute;n sentarse en el restaurante?</div>
                <br />
                <div>Puede usar el operador de m&oacute;dulo para resolver esto.</div>
            </div>

            {/* OPERADOR DE IGUALDAD, == */}
            <div>
                <h3>El operador de igualdad, <var>==</var></h3>
                <p>El operador de igualdad comprueba si dos valores son iguales, permitiendo coerción de tipos.</p>

                <p>La coerci&oacute;n juega un papel importante en el operador de igualdad no estricta (<code>==</code>). Esto significa que, si los valores tienen tipos diferentes, el operador intentará convertirlos al mismo tipo antes de realizar la comparación. El operador de igualdad estricta (<code>===</code>) no realiza coerci&oacute;n y compara los valores <em>y</em> los tipos.</p>
                

                <p data-sourcepos="5:1-5:20"><strong>Conceptos Clave:</strong></p>
                <ul data-sourcepos="7:1-10:0">
                    <li data-sourcepos="7:1-7:165"><strong>Coerci&oacute;n de tipo:</strong> Antes de comparar, JavaScript intenta convertir los operandos a un tipo com&uacute;n. Esta conversi&oacute;n se rige por un conjunto de reglas complejas.</li>
                    <li data-sourcepos="8:1-8:104"><strong>Comparaci&oacute;n por valor (primitivos):</strong> Para n&uacute;meros, cadenas y booleanos, <code>==</code> compara sus valores.</li>
                    <li data-sourcepos="9:1-10:0"><strong>Comparaci&oacute;n por referencia (objetos):</strong> Para objetos (incluidos arrays), <code>==</code> compara si las referencias apuntan al mismo objeto en memoria. No compara la estructura interna del objeto.</li>
                </ul>
                
                <h3><strong>C&oacute;mo funciona la coerci&oacute;n en <code>==</code></strong></h3>
                <p>El operador <code>==</code> sigue un conjunto de reglas espec&iacute;ficas para convertir los valores antes de compararlos. Estas reglas son definidas por la especificaci&oacute;n de JavaScript (ECMAScript). Aqu&iacute; est&aacute;n las reglas m&aacute;s importantes:</p>
                <ol>
                    <li>
                        <p><strong>Si ambos valores tienen el mismo tipo</strong>:</p>
                        <ul>
                            <li>La comparaci&oacute;n se realiza directamente, sin coerci&oacute;n.</li>
                            <li>Ejemplo:
                                <div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>5</span> == <span>5</span>); <span>// true</span> </code></div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>"hello"</span> == <span>"hello"</span>); <span>// true</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>Si uno de los valores es <code>null</code> y el otro <code>undefined</code></strong>:</p>
                        <ul>
                            <li>Se consideran iguales.</li>
                            <li>Ejemplo:
                                <div >
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>null</span> == <span>undefined</span>); <span>// true</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>Si uno de los valores es un <code>Number</code> y el otro una <code>String</code></strong>:</p>
                        <ul>
                            <li>La cadena se convierte en un n&uacute;mero y luego se comparan los valores num&eacute;ricos.</li>
                            <li>Ejemplo:
                                <div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>5</span> == <span>"5"</span>); <span>// true (la cadena "5" se convierte en el n&uacute;mero 5)</span> </code></div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>0</span> == <span>""</span>); <span>// true (la cadena vac&iacute;a se convierte en 0)</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>Si uno de los valores es un <code>Boolean</code></strong>:</p>
                        <ul>
                            <li>El valor booleano se convierte en un n&uacute;mero (<code>true</code> se convierte en <code>1</code> y <code>false</code> en <code>0</code>).</li>
                            <li>Ejemplo:
                                <div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>true</span> == <span>1</span>); <span>// true (true se convierte en 1)</span> <span>console</span>.<span>log</span>(<span>false</span> == <span>0</span>); <span>// true (false se convierte en 0)</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>Si uno de los valores es un <code>Object</code> y el otro un tipo primitivo (<code>String</code>, <code>Number</code>, etc.)</strong>:</p>
                        <ul>
                            <li>El objeto se convierte a un valor primitivo utilizando su m&eacute;todo interno <code>ToPrimitive</code>.
                                <ul>
                                    <li>Por defecto, los objetos se convierten a cadenas (llamando al m&eacute;todo <code>toString</code> o <code>valueOf</code> del objeto).</li>
                                </ul>
                            </li>
                            <li>Ejemplo:
                                <div>
                                    <div dir="ltr"><pre className="language-javascript"><code><span>console</span>.<span>log</span>([<span>1</span>, <span>2</span>] == <span>"1,2"</span>); <span>// true (el array se convierte en la cadena "1,2")</span> </code></pre></div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<code> {} </code>== <span>"[object Object]"</span>); <span>// true (el objeto vacio {} se convierte en la cadena predeterminada)</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>Casos especiales con valores "falsy"</strong>:</p>
                        <ul>
                            <li>Algunos valores como <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, y <code>false</code> son considerados "falsy" (falsos en un contexto booleano), lo que puede producir resultados confusos.</li>
                            <li>Ejemplo:
                                <div >
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>0</span> == <span>false</span>); <span>// true (0 se convierte en false)</span> </code></div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>""</span> == <span>false</span>); <span>// true (la cadena vac&iacute;a se convierte en false)</span> </code></div>
                                    <div dir="ltr"><code><span>console</span>.<span>log</span>(<span>null</span> == <span>false</span>); <span>// false (null no es igual a false)</span> </code></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>

                <p><strong>Tipos de coerci&oacute;n:</strong></p>
                <p>Hay dos tipos principales de coerci&oacute;n en JavaScript:</p>
                <ul>
                    <li><strong>Coerci&oacute;n a cadena (String):</strong> Ocurre cuando se usa el operador <code>+</code> con una cadena. JavaScript convierte el otro operando a una cadena y luego los concatena.</li>
                    <li><strong>Coerci&oacute;n a n&uacute;mero (Number):</strong> Ocurre en operaciones aritm&eacute;ticas (excepto <code>+</code> con cadenas), comparaciones (excepto <code>===</code> y <code>!==</code>), y en contextos donde se espera un n&uacute;mero (como en funciones matem&aacute;ticas).</li>
                    <li><strong>Coerci&oacute;n a booleano (Boolean):</strong> Ocurre en contextos booleanos, como en las condiciones de sentencias <code>if</code>, <code>while</code>, <code>for</code>, y con los operadores l&oacute;gicos <code>&amp;&amp;</code>, <code>||</code>, <code>!</code>.</li>
                </ul>
                <p><strong>Ejemplos:</strong></p>
                <p><strong>Coerci&oacute;n a cadena:</strong></p>


                <ColorSnippetCode code={`
                    console.log(1 + "2"); // "12" (1 se convierte a "1")
                    console.log(true + "3"); // "true3" (true se convierte a "true")
                    console.log(null + "4"); // "null4" (null se convierte a "null")
                    console.log(undefined + "5"); // "undefined5" (undefined se convierte a "undefined")
                `} language="javascript" />

                <p><strong>Coerci&oacute;n a n&uacute;mero:</strong></p>

                <ColorSnippetCode code={`
                    console.log("5" - 3); // 2 ("5" se convierte a 5)
                    console.log("10" * "2"); // 20 ("10" y "2" se convierten a 10 y 2)
                    console.log("20" / 5); // 4 ("20" se convierte a 20)
                    console.log("hello" * 5); // NaN ("hello" no se puede convertir a un número)
                    console.log(true + 1); // 2 (true se convierte a 1)
                    console.log(false + 1); // 1 (false se convierte a 0)
                    console.log(null + 0); // 0 (null se convierte a 0)
                    console.log(undefined + 1); // NaN (undefined se convierte a NaN)
                `} language="javascript" />

                <p><strong>Coerci&oacute;n a booleano:</strong></p>

                <ColorSnippetCode code={`
                    if (0) {
                    console.log("Esto no se ejecuta");
                    }

                    if ("hello") {
                    console.log("Esto se ejecuta");
                    }

                    if (null) {
                        console.log("Esto no se ejecuta")
                    }

                    if (undefined) {
                        console.log("Esto no se ejecuta")
                    }

                    if (NaN) {
                        console.log("Esto no se ejecuta")
                    }
                `} language="javascript" />



                <p>Por ejemplo, esta comparaci&oacute;n devuelve <var>true</var>: <var>5 == 5</var>. De hecho, es cierto que 5 es igual a 5.</p>
                <p>Aqu&iacute; hay un ejemplo del operador de igualdad que devuelve <var>false</var>: <var>5 == 6</var>. De hecho, es cierto que 5 no es igual a 6.</p>
                <p>Adem&aacute;s, incluso si uno de los valores comparados es del tipo de n&uacute;mero y el otro es del tipo de cadena, el valor devuelto sigue siendo <var>true</var>: <var>5 == "5"</var>.</p>
                <p>Esto significa que el operador de igualdad compara solo los valores, pero no los tipos.</p>



            </div>

        </div>
    )
}

export default Operators