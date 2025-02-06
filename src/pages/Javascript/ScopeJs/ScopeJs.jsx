import React from 'react'

export default function ScopeJs(){
  return (
    <ul>
        <li>
          <h3><strong>Scope</strong></h3>
          <p>
            Scope in JavaScript refers to the context or environment in which variables are declared and 
            can be accessed.
          </p>
          <p>
            It determinates the visibility and lifetime of a variable, determining where in your code a particular
            variable is valid and accessible.
          </p>
        </li>
        <li>
          <h3><strong>Global Scope</strong></h3>
           <p>
              Use global scope only for variables that genuinely need to be accessed 
              throughout your application. Global variables should be rare exceptions and carefully managed.
            </p>
        </li>
        <li>
          <h3><strong>Local and Block Scope</strong></h3>
          <p>
            Embrace local and block scope to keep variables isolated and contained. 
            Use local scope within functions and block scope for variables within specific code blocks like loops 
            and conditional statements.
          </p>
        </li>
        <li>
          <h3><strong>Closures</strong></h3>
          <p>
            Utilize closures for encapsulating data and behavior when necessary. 
            Closures provide a powerful way to create self-contained units of functionality and are particularly 
            valuable for data privacy and modularity.
          </p>
        </li>
        
        <li>Scope es el alcance o ambito de una variable; el como y cuando puedo usar la variable.</li>
        <li>El scope de una variable hace referencia al lugar donde va a vivir esta, o podrá ser accesible.</li>
        <li>Hay 3 tipos de Scope: GLOBAL, LOCAL, BLOQUE</li>
        
    </ul>

  )
}

