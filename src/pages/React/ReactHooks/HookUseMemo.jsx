import { useMemo, useState } from 'react'

const HookUseMemo = () => {

  const [count, setCount] = useState(0)
  const [pow, setPow] = useState(0)

  const res = useMemo(() =>{ 
    console.log('pow')
    return count > 1 && Math.pow(count, pow)
  },[pow])

  // const res = count > 1 && Math.pow(count, pow + 1)
  // console.log('pow ',res)

  const handlePow = (e) => {
    setPow(e.target.value)
  }

  const handleCount = () => {
    setCount(prev => prev + 1)
    console.log('count: ',count)
  }

  return (
    <>
      <strong>Hook UseMemo</strong> 
      <ul>
        <li>
          UseMemo memoiza un valor, para no tener que volver a calcular dependiendo de las 
          dependencias, el valor se calcula solo cuando cambia el estado de las dependencias.
        </li>
        <li>
          useMemo() es un hook de react que acepta 2 argumentos; el calculo u operacion a resolver y las dependencias 
          en un array:
          <p><strong>const memoizedRes = useMemo(function, [dependencies])</strong></p>
        </li>
        <li>
          Durante el primer render useMemo(calculo, dependencies) invoca el calculo o la operacion, memoiza el resultado,
          y retorna el resultado al componente.
        </li>
        <li>
          Si las dependecias declaradas en el array no cambian durante los proximos renderings, useMemo() no invoca el 
          calculo, retorna el resultado memoizado.
        </li>
        <li>
          Si las dependecias cambian durante el re-rendering, useMemo() invoca el calculo, memoiza el nuevo valor, 
          y lo retorna al componente.
        </li>
        <li>
          <div>


          </div>
        </li>
      </ul>

      <button onClick={handleCount}>count </button>
      {count}
      <input type="text" name="" id="" onChange={handlePow}/>
      {res}
    </>
  )
}

export default HookUseMemo