import { useRef } from 'react'
import { MultiResponsability, SingleFetchResponsability, SinglePrintResponsability } from './SingleResponsabilityPrinciple';
import multiResponsable from '../../../assets/javascript/Solid/singlePrinciple.webp';
import singleResponsable from '../../../assets/javascript/Solid/singlePrinciple2.webp';
import './solid.css';


const url = 'https://jsonplaceholder.typicode.com/users';

const SingleResponsability = () => {

          // const ref = useRef(null);
  const ref = useRef([]);

  // Toda la responsabilidad de obtener los datos e imprimir esta a cargo de la clase MultiResponsability:
  // No se esta aplicando el principio de Single Responsability:
  const handleMulti = async (ele) => {
    const element = getUseRefElement(ele);
    const singleRes = new MultiResponsability(url,element);
    const res = await singleRes.get();
    singleRes.printData(res)
  }

  // Hemos separado por clases la responsabilidad, la clase SingleFetchResponsability se encarga solo de
  // hacer la peticion fetch a la API y obtener los datos
  // La clase SinglePrintResponsability solo imprime los datos de la peticion fetch, asi no se sobrecarga
  // de responsabilidades la clase SingleFetchResponsability
  const handleSingle = async (ele) => {
    const element = getUseRefElement(ele);
    const singleRes = new SingleFetchResponsability(url);
    const res = await singleRes.get();

    const print = new SinglePrintResponsability(element);
    print.printData(res);
  }

  const getUseRefElement = (ele) => {
    const element = ref.current[ele];
    return element;
  }


  return (
    <>
      <p>Darle una sola responsabilidad a una funcion o Clase.</p>
      <p>Esto simplifica la comprensión, el mantenimiento y la modificación del código en el futuro.</p>
      <section className='columns-grid'>
        <section>
          <img className='singlePrinciple' src={multiResponsable} alt="Multi Responsability" />
          <p>La clase tiene 2 responsabilidades</p>
          <p>Hacer una peticion a la APi e imprimir los datos</p>
          <p>No se aplica el Principio</p>
          <p>Solucion dividir responsabilidades</p>
          <button onClick={() => handleMulti('multi')}>Multi Responsability</button>
          <div ref={(element) => ref.current['multi'] = element} id='data'></div>
        </section>
        <section>
          <img className='singlePrinciple' src={singleResponsable} alt="Single Responsability" />
          <p>Cada clase cumple con una responsabilidad especifica</p>
          <p>La primera hace la peticion a la API</p>
          <p>La segunda imprime los datos</p>
          <button onClick={() => handleSingle('single')}>Single Responsability</button>
          <div ref={(element) => ref.current['single'] = element} id='data2'></div>
        </section>
      </section>
    </>
  )
}

export default SingleResponsability