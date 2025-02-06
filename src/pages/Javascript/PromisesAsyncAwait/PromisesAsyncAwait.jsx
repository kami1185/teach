
export default function PromisesAsyncAwait() {
    return (
        <>
            <h2>Diferencias entre Promises y AsyncAwait</h2>
            <section>
                <div>
                    <h3>Promises</h3>
                    <ul>
                        <li>
                            <p>Las promesas con .then() se procesan en paralelo, lo que hace que este método sea más 
                                rápido. Una Promesa continua con la ejecución no para el flujo de ejecucion.</p>
                        </li>
                        <li>
                            <p>Las Promesas pueden volverse difíciles de leer cuando hay muchas de ellas anidadas.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Async Await</h3>
                    <ul>
                        <li>
                            <p>Async/Await realiza el procesamiento secuencialmente. Async/Await para el flujo de 
                                ejecución hasta que se resuelve la promesa de await.</p>
                        </li>
                        <li>
                            <p>Async/Await proporciona una sintaxis más limpia y fácil de entender, especialmente cuando 
                            tienes que encadenar múltiples operaciones asincrónicas.</p>
                        </li>
                        <li>
                            <p>Async/Await facilita el manejo de errores con el bloque try...catch, lo que hace que el 
                                código sea más robusto y menos propenso a errores.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <h3>¿Cuándo usar uno u otro?</h3>
            <p>Promises: Útil cuando deseas un mayor control sobre el flujo de ejecución o cuando trabajas con código asincrónico de manera más manual. Pueden ser preferibles en situaciones donde necesitas encadenar Promises de manera específica.</p>
            <p>Async/Await: Recomendado para la mayoría de los casos, ya que ofrece una sintaxis más limpia y legible. Es especialmente útil cuando se trabaja con múltiples llamadas asincrónicas o cuando se necesita un manejo de errores más claro.</p>
            
        </>
    )
}

