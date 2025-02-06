import React from 'react'
import reducer1 from '../../../assets/react/reducer1.png'
import reducer2 from '../../../assets/react/reducer2.png'

const Reducer = () => {
  return (
    <>
        <ol type="1">
            <li>Con el uso de Reducers se tiene una forma de manejar el estado de la aplicacion, en la cual se tienen
                un solo estado, unica verdad. Para manejar el estado con reducers se crea una función reducer que se 
                encarga de manejar todas las acciones que se envían mediante un dipatch y de calcular y retornar  
                el rnuevo estado. Transforma el estado mediante las acciones y calcula un nuevo estado!.
                Creacion de la funcion reducer:

                <img src={reducer1} alt="init state" />
                <img src={reducer2} alt="reducer function" />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </>
  )
}

export default Reducer