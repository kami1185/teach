
// Tenemos la clase PrintElement la cual no es modificada pero extendemos su funcionalidad
// por medio de la herencia de clases con PrintFormatElement anadiendo el metodo printDataFormat

    export class PrintElement{
        constructor(element){
            this.element = element;
        }
        printData(text){
            this.element.innerHTML = text;
        }
    }

// Extendemos la funcionalidad de la clase con el metodo printDataFormat el cual llama al metodo printData
// de la clase padre que se mantiene inalterada.

    export class PrintFormatElement extends PrintElement{
        constructor(element){
            super(element)
        }

        printDataFormat(data){
            const text = data.reduce((ac, ele) => 
            ac + `<p>${ele.name}</p>`, '');
            super.printData(text)
        }
    }

// Extendemos la funcionalidad de la clase con el metodo printDataFormat la cual recibe una funcion que el metodo
// reduce ejecuta ya que es un callback

    export class PrintFunctionElement extends PrintElement{
        constructor(element,func){
            super(element)
            this.func = func;
        }

        printDataFormat(data){
            const text = data.reduce(this.func, '');
            super.printData(text)
        }
    }