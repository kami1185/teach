import React from 'react'
import context1 from '../../../assets/react/context1.png'
// import context2 from '../../../assets/react/context2.png'
// import context3 from '../../../assets/react/context3.png'

const Context = () => {
  return (
    <div>
        <ul>
            <li>El Context esta separado de el arbol de componentes y se puede leer el estado que 
                almacena el Context desde cualquier componente evitando pasar las props a los componentes
                hijos desde el componente padre. 
                
                <p>Es necesario envolver nuestra aplicacion o los componentes 
                que tendran acceso a ese estado mediante un Provider.</p>

                La logica para usar el Context es 
                <p>1. Crear el Context.</p>
                <p>2. Proveer el Context, que parte de la aplicacion puede acceder al context.</p>
                <p>3. Consumir el Context, usado useContext.</p> 

                <p>Para Usar Context, crear una carpeta Context en el proyecto donde se crean todos los 
                contexts.</p>

                <p>React sugiere por cada funcionalidad global en la aplicacion se crea un contexto, 
                da mayor escalabilidad</p>
                
            </li>
            <li>
                <strong>1. Crear el Context</strong>
                <p>Se crea un contexto definiendo y exportando una variable asignando el context: </p>
                <p><strong> export const CartContext = createContext();</strong></p>
                <p>Se exporta el context export default CartContext;</p>
            </li>
            <li> 
                <strong>2. Creacion del Provider:</strong>

                <p>Es un componente de React que renderiza lo que va a mostrar osea el children </p>
                <p>Cuando creamos un contexto, context crea un componente provider que contiene  
                los componentes que necesitan los valores del context y un componente consumer 
                que accede a este dato desde el componente final.</p>
                
                <p><strong>{`export default function CartProvider({children})`}</strong></p>

                <p>Dentro de la funcion Provdier definimos la logica usando funciones y variables de estado.....</p>

                <p>Creamos un objeto donde pasamos todos las variables de estado y funciones que se van a compartir en el provider value={'data'}</p>

                
                <code> return &#60;CartContext.Provider value={'data'}&#62;{'children'}&#60;/CartContext.Provider&#62;</code>
            

            </li>
            <li>
                <strong>3. Consumo del Provider:</strong>
            </li>
            <li>
                <div className='container-img'>
                    <img className='image' src={context1} alt="" />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Context