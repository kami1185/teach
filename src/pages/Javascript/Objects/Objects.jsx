import React from 'react'

const Objects = () => {

    const original = { a: 1, b: { c: 2 } };
    const copy = Object.assign({}, original);
    copy.a = 10
    copy.b.c = 30;

    const original2 = { a: 1, b: { c: 2 } };
    const copySpread = {...original2}
    copySpread.a = 10
    copySpread.b.c = 30

    const original3 = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(original3));
    deepCopy.a = 10
    deepCopy.b.c = 30;

    let user = {
        name: "John",
        age: 30,
        funtion(){
            console.log('Funciton object')
        },
        getData(){
            console.log(`${this.name} is ${this.age} years old`)
        },
        functions: {
            genere: 'male',
            exec: function test(){return 3>5;}
        }
    };

      
    let clone = Object.assign(user, {name:"camilo",tel:123});
    console.log('original : ',user)
    console.log('clone    : ',clone)
    let clone2 = Object.assign({}, user);
    clone2.tel = 789
    clone2.email = 'asde@gmail.com'
    clone2.functions.genere = "femile"
    console.log('clone2    : ',clone2)

    let clone3 = Object.assign({}, user)
    let clone4 = {...user}
    console.log('compare original with Object.assign({}, user) ', JSON.stringify(user) === JSON.stringify(clone3))
    console.log('compare user = Object.assign({}, user) ', user === clone3)

    console.log('compare user = {...user} ', user === clone4)
    console.log('JSON.stringify(user) ', JSON.stringify(user))
    console.log('JSON.parse(JSON.stringify(user)) ', JSON.parse(JSON.stringify(user)))
    console.log('user: ', user)
    
    let clone5 = JSON.parse(JSON.stringify(user))
    clone5.functions.genere = 'Binary'
    console.log('clone JSON.parse(JSON.stringify(user)): ', clone5)
    
    // let clone6 = structuredClone(user);
    // console.log('structuredClone(user): ', clone6)

    //******************************************************************** */

    function Obj(name, age){
        this.name = name
        this.age = age
        this.tel = 1321
    }

    const newObj = new Obj('Vamos!',39)
    console.log('new Obj(stringa,39)',newObj.name, newObj.tel)

    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    console.log( new A() == new B() ); // true

    function Obj2(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
        this.sum = function sum(){
            return (this.num1 + this.num2)
        }
        this.mul = function mul(){
            return (this.num1 * this.num2)
        }
    }

    const test = new Obj2(5,3);
    console.log('Sum: ',test.sum())
    console.log('Mul: ', test.mul())

    //******************************************************************** */
    
    console.log('1e500 numero que sobre pasa los 64 bits:', 1e500 );

    let num = 255;
    console.log('Num to string: num = 255; num.toString(16 en base 16)', num.toString(16) );  // ff
    console.log('Num to string: num = 255; num.toString(2)', num.toString(2) );   // 11111111
    console.log('Num to string: num = 255; num.toString()', num.toString() );   // 11111111

    console.log( 9999999999999999);

    console.log( +"100px" );
    
    //******************************************************************** */
    //Comparando strings


    let str2 = 'Hola';
    // STRING ES UN TIPO DE DATO PRIMITIVO E INMUTABLE, NO SE PUEDE CAMBIAR, SOLO REASIGNAR SU VALOR:
    //str2[0] = 'h'; // error
    //alert(str2[0]); // no funciona


    function ucFirst(str){
        if (!str) return str;
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr
    }
    console.log(ucFirst('camilo'))

    // Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.
    function checkSpam(str){
        let a = 'viagra'
        let b = 'XXX'
        let str2 = str.toLowerCase()
        return str2.includes(a.toLowerCase()) || str2.includes(b.toLowerCase())
    }

    console.log(checkSpam('compra ViAgRA ahora'))
    console.log(checkSpam('xxxxx gratis'))
    console.log(checkSpam("coneja inocente"))

    // Truncar el texto
    // Crea una función truncate(str, maxlength) que verifique la longitud de str y, 
    // si excede maxlength – reemplaza el final de str con el carácter de puntos suspensivos "…", 
    // para hacer su longitud igual a maxlength.
    function truncate(str,maxlength){
        let strlength = str.length;
        return strlength > maxlength ? str.slice(0,maxlength) + '...' : str
    }

    console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20) )
    console.log(truncate("Hola a todos!", 20)) 

    // Extraer el dinero
    // Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y luego el número.
    // Crea una función extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva.
    function extractCurrencyValue(value){
        return +value.slice(1)
    }
    console.log( extractCurrencyValue('$120'));


    //******************************************************************** */

    // Arrays
    let fruits = ["Apple", "Orange", "Pear"];

    // ************* Métodos que trabajan sobre el final del array: ***************

    // **POP
    // Extrae el último elemento del array y lo devuelve:
    console.log('["Apple", "Orange", "Pear"] fruits.pop() Delete last element: ', fruits.pop() );
    console.log('["Apple", "Orange"] ', fruits)

    // **PUSH 
    // ADICIONA UN ELEMENTO AL FINAL DEL ARRAY:
    //El llamado a fruits.push(...) es igual a fruits[fruits.length] = ....
    console.log('fruits.push(grapes) = fruits[fruits.length] Add Element in the end array', fruits.push('grapes'))
    console.log('["Apple", "Orange", "grapes"]', fruits)

    // ************* Métodos que trabajan con el principio del array: ***************

    // **SHIFT
    // Extrae el primer elemento del array y lo devuelve:
    console.log('["Apple", "Orange", "grapes"], fruits.shift() Delete the first Element ', fruits.shift() );
    console.log('["Orange", "grapes"] ', fruits)

    // **UNSHIFT
    // Agrega el elemento al principio del array:
    console.log('["Orange", "grapes"], fruits.unshift(Apple) Add first Element in array ', fruits.unshift('Apple') );
    console.log('["Apple","Orange", "grapes"] ', fruits)

    let fruits2 = []; // crea un array
    fruits2[50] = 5; // asigna una propiedad con un índice mucho mayor que su longitud
    console.log('fruits2 = [] se asigna: fruits2[50] = 5 ',fruits2)
    fruits2.age = 25; // crea una propiedad con un nombre arbitrario
    console.log('fruits2.age = 25 ',fruits2.age)
    console.log('fruits2.length ',fruits2.length)

    // Tratemos 5 operaciones de array.

    // Crear un array styles con los items “Jazz” y “Blues”.
    // Agregar “Rock-n-Roll” al final.
    // Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
    // Quitar el primer valor del array y mostrarlo.
    // Anteponer Rap y Reggae al array.
    // El array durante el proceso:

    // Jazz, Blues
    // Jazz, Blues, Rock-n-Roll
    // Jazz, Classics, Rock-n-Roll
    // Classics, Rock-n-Roll
    // Rap, Reggae, Classics, Rock-n-Roll

    const music = ['Jazz', 'Blues']
    music.push('Rock-n-Roll')
    music[Math.floor((music.length-1) / 2)] = 'Classics'
    console.log(music)
    music.shift()
    music.unshift('Rap', 'Reggae')
    console.log(music)

    // ¿Cuál es el resultado y por qué?:

    let arr = ["a", "b"];
    arr.push(function() {
        console.log( this );
    })
    arr[2]();

    // Subarray máximo

    // La entrada es un array de números, por ejemplo arr = [1, -2, 3, 4, -9, 6].
    // La tarea es encontrar, dentro de ’arr’, el subarray de elementos contiguos que tenga la suma máxima.
    // Escribe la función getMaxSubSum(arr) que devuelva el resultado de tal suma.
    // Por ejemplo:
    // getMaxSubSum([-1, 2, 3, -9]) == 5 (la suma de items resaltados)
    // getMaxSubSum([2, -1, 2, 3, -9]) == 6
    // getMaxSubSum([-1, 2, 3, -9, 11]) == 11
    // getMaxSubSum([-2, -1, 1, 2]) == 3
    // getMaxSubSum([100, -9, 2, -3, 5]) == 100
    // getMaxSubSum([1, 2, 3]) == 6 (toma todo)

    function getMaxSubSum(array){
        let sum = 0
        for(let i=0; i < array.length; i++){
            if(array[i] > 0 && array[i+1] > 0){
                sum = array[i] + array[i+1]
            }
        }
    }

    const array = [1, -2, 3, 4, -9, 6]
    getMaxSubSum(array)


    //******************************************************************** */
    
    let id1 = Symbol("id");
    let id2 = Symbol("id");
    let id3 = id1
    console.log(id1 === id2); 


    
    let user4 = { // pertenece a otro código
        name: "John"
    };
    // Un Objeto en un if siempre retorna true
    let ver = user4 ? true : null
    console.log('Un Objeto en un if siempre retorna true if(obj) true: ',ver)

    let id = Symbol("id");
    user4[id] = 1;
    console.log('Symbol object: ', user4[id] ); //
    
    user4["id"] = 3
    user4.id = 4
    console.log('Symbol object id: ', user4[id], user4.id, user4["id"] ); //

    let user5 = new Date()
    let user6 = Number(132)

    console.log(user5)
    console.log(+user5)
    console.log(user6+200)

    let user7 = {
        name: "John",
        money: 1000,
      
        [Symbol.toPrimitive](hint) {
          console.log(`sugerencia: ${hint}`);
          return hint == "string" ? `{name: "${this.name}"}` : this.money;
        }
    };
      
      // demostración de conversiones:
    console.log(user7); // sugerencia: string -> {name: "John"}
    console.log(+user7); // sugerencia: number -> 1000
    console.log(user7 + 500); // sugerencia: default -> 1500



    //******************************************************************** */

    let user2 = { name: "John" };
    let admin = { name: "Admin" };

    function sayHi() {
        console.log( this.name );
    }

    // usa la misma función en dos objetos
    user2.f = sayHi;
    admin.f = sayHi;

    // estos llamados tienen diferente "this"
    // "this" dentro de la función es el objeto "antes del punto"
    user2.f(); // John  (this == user)
    admin.f(); // Admin  (this == admin)

    admin['f']();

    let user3 = {
        firstName: "Ilya",
        sayHi() {
          let arrow = () => console.log(this.firstName);
          arrow();
        }
    };
    user3.sayHi(); // Ilya

    //******************************************************************** */

    function functionVar(){
        for(var i=0; i < 5; i++){
            setTimeout(() => {
                console.log('Using Var: ',i)
            }, 1000);
        }
    }

    function functionLet(){
        for(let i=0; i < 5; i++){
            setTimeout(() => {
                console.log('Using Let: ',i)
            }, 1000);
        }
    }

    const cat = {};
    const dog = {};

    console.log('Using == comparing if(cat == dog)', cat == dog )
    console.log('Using == comparing if(cat === dog)', cat === dog )

    const cat2 = {
        name: 'camilo',
        ['full name']: 'andres duarte',
    };
    const dog2 = {
        name: 'jhon'
    };

    const copiaCat2 = cat2
    copiaCat2.name = 'luz'

    console.log(copiaCat2 == cat2)
    console.log(copiaCat2 === cat2)

    console.log(dog2 === cat2)

    console.log(Object.is({}, {}));
    console.log(Object.is(cat2, copiaCat2));
    
    cat2['name'] = 'kathe'
    console.log(cat2.name);

    cat2['full name'] = 'jhson smith'
    console.log(cat2);
    console.log(cat2['full name']);

    function foo(){
        console.log('entra en foo')
    }
    function bar(){
        console.log('entra en bar')
    }

    if(foo() && bar()){
        console.log('pasa if')
    }

    const x = {
        a: 'minuscula'
    }
    const y = x;
    y.a = 'MAYUSCULA'
    console.log(x.a)

    functionVar()
    functionLet() 

    ////////////////////////////////////////////////////////////////////////////////////

    var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    const a = {};
    for(let i = 0; i < arr1.length; i++){
        let val = arr1[i]
        if(a[val])
            a[val] += 1
        else 
            a[val] = 1
    }
    console.log(a)

    // 7. Write a JavaScript program to sort the items of an array.
    // Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    // Sample Output : -4,-3,1,2,3,5,6,7,8

    var arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    let res = arr2.sort()
    console.log(res)

    function pow(x, n) {
        console.log(n)
        if (n == 1) {
          return x;
        } else {
            let res = x * pow(x, n - 1);
            console.log(x,n - 1, pow(x, n - 1), res)
            return res
        }
    }
    console.log('Recursion: ', pow(2, 3) ); // 8

    ///////
    // Spread operator in string works like split function:
    const str = "String with spread operator"
    console.log('String with spread operator [..string] ', [...str])

    ///////////////////////////////////////////////////////
    // Operator “nullish coalescing” ?? antes de ejecutar el transpilador
    let height = null;
    height = height ?? 100;
    console.log('Operator “nullish coalescing”: ', height)
    // después de ejecutar el transpilador
    //height = (height !== undefined && height !== null) ? height : 100;

    return (
        <div>
            
            <h2>Objects, Fundamentals and Advanced Techniques</h2>

            {
                <>                
                    <div>{`{ a: 1, b: { c: 2 } }`}</div>
                    <div>Original a: {original.a}</div>
                    <div>Original c: {original.b.c}</div>
                    <div>{`const copy = Object.assign({}, original);`}</div>
                    <div>{`copy.a = 10
                        copy.b.c = 30;`}
                    </div>
                    <div>Copy a: {copy.a}</div>
                    <div>Copy c: {copy.b.c}</div>
                    <br/>

                    <div>{`{ a: 1, b: { c: 2 } }`}</div>
                    <div>Original a: {original2.a}</div>
                    <div>Original c: {original2.b.c}</div>
                    <div>Copy a: {copySpread.a}</div>
                    <div>Copy c: {copySpread.b.c}</div>
                    <br/>

                    <div>{`{ a: 1, b: { c: 2 } }`}</div>
                    <div>Original a: {original3.a}</div>
                    <div>Original c: {original3.b.c}</div>
                    <div>Copy a: {deepCopy.a}</div>
                    <div>Copy c: {deepCopy.b.c}</div>

                    <div>{
                              
                        }
                    </div>
                
                </>
            }
            
        </div>
    )
}

export default Objects
