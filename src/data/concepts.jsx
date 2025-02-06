export const concepts = [
    {
        concept: 'Callbacks',
        definition: 'En JavaScript, un callback es una función que se pasa como argumento a otra función y que se invocará más tarde, generalmente después de que se haya completado una tarea asíncrona o algún evento específico haya ocurrido. En esencia, es una forma de especificar qué acción se debe tomar después de que ocurra cierto evento o proceso.',
        snippet: `
            function doAsyncTask(callback) {
                setTimeout(function () {
                console.log("Tarea asíncrona completada.");
                callback(); // Llamada al callback después de completar la tarea.
                }, 2000);
            }
            
            function onTaskComplete() {
                console.log("Callback invocado: Tarea terminada!");
            }
            
            console.log("Iniciando tarea asíncrona...");
            doAsyncTask(onTaskComplete);
            console.log("Tarea en progreso...");
        `
    },
    {
        concept: 'Hoisting',
        definition: 'Se refiere a un comportamiento específico de la forma en que las declaraciones de variables y funciones se tratan durante la fase de compilación y ejecución del código en un entorno de JavaScript.',
        snippet: `
            console.log(x); // Output: undefined
            var x = 10;
            console.log(x); // Output: 10

            foo(); // Output: "Hola desde foo!"
            function foo() {
              console.log("Hola desde foo!");
            }
        `
    }
]