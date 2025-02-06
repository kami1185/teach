
export default function exercises(){

    const log = console.log


    

    


    const counter = (() => {
        let privateCounter = 0;
        log('Closure: ',privateCounter)
        function changeBy(val) {
            privateCounter += val;
        }
      
        return {
            increment() {
                changeBy(1);
            },
      
            decrement() {
                changeBy(-1);
            },
        
            value() {
                return privateCounter;
            },
        };
    })();

    log('Counter Value: ',counter.value())
    log('Counter Value: ',counter.increment())
    log('Counter Value: ',counter.value())

    function iniciar() {
        var nombre = "Mozilla"; // La variable nombre es una variable local creada por iniciar.
        function mostrarNombre() {
          // La función mostrarNombre es una función interna, una clausura.
          log(nombre); // Usa una variable declarada en la función externa.
        }
        mostrarNombre();
    }
    iniciar();

    function makeAdder(x) {
        log('x: ',x)
        return function (y) {
            log('y: ',y)
            return x + y;
        };
    }
      
    const add5 = makeAdder(5);
    const add10 = makeAdder(10);
    
    console.log(add5(2)); // muestra 7
    console.log(add10(2)); // muestra 12

    //******************************************************************************** */

    // serie fibonacci usando memoization
    // suma de los ultimos valores
    // 0 1 1 2 3 5 8 13 21 ........
    // 0 1 2 3 4 5 6 7  8
    let n1=0, n2=1, next
    function fibonacci(n){
        for(let i=0; i<=n; i++){
            log(`${i} = ${n1}`)
            next = n1 + n2;
            n1= n2;
            n2 = next;   
        }
    }
    
    fibonacci(4)

    let values = {}
    function memoizationFibo(callback){

        return function(n){
            if(!values[n])
            {
                values[n] = callback(n)
            }
            log(values)
            return values[n]
        }

    }
    
    let acc = 0;
    function fibonacciRecursiva(n){
        acc ++;
        if(n <= 1) return n;
        return fibonacciRecursiva(n-1) + fibonacciRecursiva(n-2)
    }
    // const fibonacciRecursiva = memoizationFibo((n)=>{
    //     acc ++;
    //     if(n <= 1) return n;
    //     return fibonacciRecursiva(n-1) + fibonacciRecursiva(n-2)
    // })
        
    let c = memoizationFibo(fibonacciRecursiva)
    log('fibo: ', c(8))
    log('calls: ', acc)
    // let n = 7
    // log('fibonacci di: ',fibonacciRecursiva(n))
    // log('calls: ', acc)
    //******************************************************************************** */

    
    const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto'

    const fetchApi = async () => {

        try {
            const response = await fetch(URL_API)
            if(!response.ok)
                throw new Error("Error fetching pokemos")
            const json = await response.json()
            return json
        } catch (error) {
            return error.message
        }
        
    }

    fetchApi().then(data => log(data)).catch(error => log(error))

    //******************************************************************************** */

    //Implementar una solucion para optimizar las llamadas en caso que sean repetitivas
    // Solucion usar la Memoization para evitar repetir nuevamente el calculo:

    const memoization = (callback) => {
        let result = {}
        return function(limit){
            if(!result[limit]){
                log('Pasa')
                result[limit] = callback(limit)
            }
            return result[limit] 
        }
    }

    // const sumNumbers = (limit) => {
    //     let sum = 0;
    //     for ( let i=0; i < limit; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }

    const sumNumbers = memoization((limit) => {
        let sum = 0;
        for ( let i=0; i < limit; i++){
            sum += i;
        }
        return sum;
    })


    log(sumNumbers(100000000))
    log(sumNumbers(100000000))
    //******************************************************************************** */

    // const obj = {
    //     name: 'Camilo',
    //     hello: () => {return obj.name}
    // }
    // obj.name = 'Andres'
    // log(obj.hello())

    // //******************************************************************************** */

    // const citiesList = [
    //     "Rome",
    //     "London",
    //     "Paris",
    //     "Bogota",
    //     "Rome",
    //     "Palermo",
    //     "London",
    //     "Tokio",
    //     "Paris",
    //     "Rome",
    //     "Bogota",
    //     "Lima",
    //     "Palermo",
    //     "Lima",
    //     "Rome",
    //     "Tokio",
    //     "Bogota",
    //     "London"
    // ]

    // let cities = {}
    // citiesList.map((item)=>(
    //     cities[item] = cities[item] ? cities[item] += 1 : 1
    // ))
    // log(cities)

    // let sortCities = Object.keys(cities)
    //     .map(city => ({
    //         city, times: cities[city], 
    //     }))
    //     .sort((a,b) => b.times - a.times)

    // log(sortCities)


    // //******************************************************************************** */

    // // Las variables globales son las que están a disposición para utilizar en todo el código, esto quiere decir, 
    // // que no tienen alcance. La palabra clave (var) es utilizada para declarar una variable u objeto local. 
    // // Si la palabra clave (var) es omitida, se declara como variable global.
    // var miVariableGlobal = null
    // function crearTexto(){
    //     miVariableGlobal = 'Hola mundo'
    //     return miVariableGlobal
    // }
    // crearTexto()
    // console.log('Variable global: ', miVariableGlobal)
    // miVariableGlobal = 123456
    // console.log('Variable global: ', miVariableGlobal)
    // //******************************************************************************** */

    // function calculo(x) { return (!x); }
    // log(calculo(undefined))  // output true

    // var libro = {
    //     titulo:'Las Legiones Malditas',  
    //     autor:'Santiago Posterguillo',
    //     informacion:function (){ return this.titulo + " escrito por " + this.autor; }
    // }

    // log(typeof(libro.informacion))

    //******************************************************************************** */

    // log(document.getElementById("titulo").innerHTML)
    //log(document.getElementById("campo").value)

    return (
        <div>
            <ul>
                <li>
                    <p>Crea un Objecto con un metodo Hello que imprima Hello{`<nombre>`}</p>
                    <pre>
{` 
const obj = {
    name: 'Camilo',
    hello: () => {return obj.name}
}
obj.name = 'Andres'
log(obj.hello())
`}
                    </pre>
                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </ul>

        </div>
    )
}
