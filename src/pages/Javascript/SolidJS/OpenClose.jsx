import React, { useRef, useState } from 'react'
import { SingleFetchResponsability } from './SingleResponsabilityPrinciple'
import { PrintFormatElement, PrintFunctionElement } from './OpenCloseExample';

import openClose1 from '../../../assets/javascript/Solid/openclosePrinciple1.webp';
import openClose2 from '../../../assets/javascript/Solid/openclosePrinciple2.webp';

const url = 'https://jsonplaceholder.typicode.com/users';

const OpenClose = () => {

  const ref = useRef([]);

  const fetchData = () => {
    const res = new SingleFetchResponsability(url);
    const data = res.get();
    return data;  
    // retorna una promesa, en la funcion que invova a esta funcion debemos manejar la promesa ya sea con async await
    // o con then

  }

  const handlePrint = async (ele) => {
    const data = await fetchData();    
    console.log('DATAAAA FETCH: ',data)
    const print = new PrintFormatElement(getUseRefElement(ele));
    print.printDataFormat(data);
  }

  const handleFormatPrint = async (ele) => {
    const data = await fetchData();   
    console.log('DATA FETCH: ',data)
    const print = new PrintFunctionElement(getUseRefElement(ele), (ac, ele) => {
      return ac + `<p> <span><strong>${ele.name} - </strong></span> <span>${ele.email}</span></p>`});
    print.printDataFormat(data);
  }



  const getUseRefElement = (ele) => {
    const element = ref.current[ele];
    return element;
  }

  return (
    <section>
      <p>Estable que una funcion, modulo o clase debe estar abierta para su extension pero cerradas para su modificacion.</p>
      <p>Un ejemplo del principo es la Herencia en Javascript la cual nos permite realizar un cambio, modificando 
        la nueva clase, no la clase padre.</p>
      <p>Al aplicar el principio abierto/cerrado, nos aseguramos de que cada vez que queremos agregar una nueva funcionalidad, sólo necesitamos añadir una nueva subclase o funcion...</p>
      <section className='columns-grid'>
        <section>
          <img className='singlePrinciple' src={openClose1} alt="Multi Responsability" />
          <p>La clase PrintElement es abierta para extender su funcionalidad pero cerrada para modificaciones.</p>
          <p>Usando herencia de clases con Extends en JS, se crea la clase PrintFormatElement extendiendo la funcionalidad
            de la clase padre con el metodo printDataFormat</p>
          <button onClick={() => handlePrint('print')}>Open/close</button>
          <div ref={(element) => ref.current['print'] = element} id='data'></div>
        </section>
        <section>
          <img className='singlePrinciple' src={openClose2} alt="Single Responsability" />
          <p>Otro ejemplo creando una clase para extender la funcionalidad de la clase padre.</p>
          <p>El metodo printDataFormat recibe una funcion la cual el metodo reduce ejecuta y formata el texto.</p>
          <button onClick={() => handleFormatPrint('func')}>Open/close</button>
          <div ref={(element) => ref.current['func'] = element} id='data2'></div>
        </section>
      </section>
    </section>
  )
}

export default OpenClose