/////////////////////////////// Arrow functions as methods  ///////////////////////////

// With normal functions the scoped is bound to the global one by default.
export function myFunctionNormal(){
    //console.log('THIS NORMAL FUNCTION: ', this);
}
myFunctionNormal(); //output: 
// Window {window: Window, self: Window, document: document....

// ARROW FUNCTION do not have their own this, they inherit it from the 
// parent scope, the global one.
export const myFunctionArrow = () => {
    //console.log('THIS ARROW FUNCTION: ', this);    
}
myFunctionArrow(); //output: 
// Window {window: Window, self: Window, document: document....

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

export function scopeThis(){
    const myObject = {
        myMethod: () => {
            console.log('Lexical Scoping arrow functions as methods',this);
        }
    };

    return myObject;

}
const a = scopeThis()
a.myMethod()

//myObject.myMethod()//Window {window: Window, self: Window, document: document....

//const myMethod = myObject.myMethod;
//myMethod() //Window {window: Window, self: Window, document: document....


export const myObjectB = {
    myArrowFunction: null,
    id: 123,
    myMethod: function () {
        this.myArrowFunction = () => { 
            //console.log('Arrow functions as methods A',this,this.id) 
        };
    },
    myMethodB: function() {
         //console.log('Arrow functions as methods B',this,this.id);
    },
    myMethodC: () => {
        ()=>  {
            //console.log('Arrow functions as methods C',this,this.id);
        }
    },
    myMethodD: function () {
        () => { 
            //console.log('Arrow functions as methods D',this,this.id) 
        }
    }
};
//myObjectB.myArrowFunction() // this === myObject

myObjectB.myMethod() // this === myObject
myObjectB.myArrowFunction() // this === myObject
myObjectB.myMethodB()
myObjectB.myMethodC()
myObjectB.myMethodD()

const myArrowFunction = myObjectB.myArrowFunction;
myArrowFunction() // this === myObject

////////////////////////////////////// El problema de `this` Antes ////////////////////////////////////

export function PersonaA(nombre) {
    //El constructor Persona() define `this` como una instancia de él mismo
    this.nombre = nombre;
    this.edad = 0;
    let cont = 0;

    setInterval(function () {
    //La función anónima define `this` como una instancia de ella misma

        if(cont === 5)
                return
        
        cont++;
        this.edad++;
        //console.log('Function normal persona A: ',this.edad);
    }, 1000);
}
var jonA = new PersonaA('Jonathan');
//console.log('Persona A',jonA.cont); //Imprime la edad en 0 por cada segundo que pasa


//La solución al problema de `this` Ahora
export function Persona(nombre) {
    //El constructor Persona() define `this` como una instancia de él mismo
    this.nombre = nombre;
    this.edad = 0;

    setInterval(() => {
        //`this` hace referencia al objeto Persona()
        
        if(this.edad === 5)
            return

        this.edad++;
        //console.log('Arrow Function: ',this.edad);
    }, 1000);
}
const jon = new Persona('Jonathan');
//console.log(jon); //Imprime el valor de edad más uno por cada segundo que pasa
//console.log(jon.edad); //Imprime la edad


export const persona = {
    nombre: "Juan",
    edad: 35,
    altura: 1.78,
    // mostrarDatosA: () => {`Me llamo ${this.nombre} tengo ${this.edad} y mido ${this.altura}`},
    // mostrarDatosB: () => `Me llamo ${this.nombre} tengo ${this.edad} y mido ${this.altura}`,
    // mostrarDatosC: () => {console.log('Arrow functions as methods C',this,this.nombre)},
    mostrarDatosD: function() {() => {
        console.log('Arrow functions as methods C',this,this.nombre)
    }}
}
// console.log(persona.mostrarDatosA());
// console.log(persona.mostrarDatosB());
// console.log(persona.mostrarDatosC());
//console.log(persona.mostrarDatosD());