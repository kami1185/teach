import { useRef } from "react"
import img1 from '../../../assets/javascript/closures/1.jpg'
import img2 from '../../../assets/javascript/closures/2.jpg'
import img3 from '../../../assets/javascript/closures/3.jpg'
import img4 from '../../../assets/javascript/closures/4.jpg'
import img5 from '../../../assets/javascript/closures/5.jpg'
import img6 from '../../../assets/javascript/closures/6.jpg'
import img7 from '../../../assets/javascript/closures/7.jpg'

const Closure = () => {
    
    const log = console.log

    //***************************************************************************************** */
    const refImg = useRef()
    const refList = useRef()

    // array de funciones:
    const imgs = [
        ()=>refImg.current.src = img1,
        ()=>refImg.current.src = img2,
        ()=>refImg.current.src = img3,
        ()=>refImg.current.src = img4,
        ()=>refImg.current.src = img5,
        ()=>refImg.current.src = img6,
        ()=>refImg.current.src = img7,
    ]
    
    // Se crea un closure para mostrar las imagenes que las contiene un array y que se ejecutan como funciones
    function setImage(data){
        let arr = data
        let i = 0;
        return function(){
            if(i >= arr.length)
                i = 0;
            // Usamos () para ejecutar la funcion que se encuentra en el array 
            arr[i++]();
        } 
    }

    const nextImg = setImage(imgs);
    const handleChange = () => {
        nextImg();
    }
    //************************************************************************************** */
    

    const country_cities = [
        {   country: "Italy",
            capital: "Rome" 
        }, {
            country: "England",
            capital: "London"
        }, {
            country: "France",
            capital: "Paris"
        }, {
            country: "Colombia",
            capital: "Bogota"
        }, {
            country: "Japan",
            capital: "Tokio"
        }, {
            country: "Peru",
            capital: "Lima"
        }, {
            country: "Germany",
            capital: "Berlin"
        }, {
            country: "Rusia",
            capital: "Moscow"
        }, {
            country: "Spain",
            capital: "Madrid"
        }, {
            country: "Argentina",
            capital: "Buenos Aires"
        }, {
            country: "Portugal",
            capital: "Lisbon"
        },
    ]
    console.table(country_cities)
    // Se crea un closure para mostrar los datos del objeto paginando dependiendo el valor que se envia.
    // le pasamos el array, el numero de la paginacion y la funcion de retorno con un array con los objetos
    // definidos por el rango

    function loadArray(data, pag, callback){
        let i = 0;
        let arr = data;
        return ()=>{
            if(i >= data.length) return
            let list = []
            for(let k=0; k < arr.length && k < pag; k++){
                if(i >= data.length) {
                    log('return')
                    return callback(list)
                    //return
                }
                list.push(arr[i++]) 
            }
            return callback(list)
        }
    }

    function showPagination(list){
        refList.current.innerHTML += list.reduce((acc, e)=>{

            return acc +`<div style={{display: "flex"}}>
                    <p>Country: ${e.country}</p>
                    <p>Capital: ${e.capital}</p>
                </div> `

            
        },"") // inicializamos con vacio ""
    }

    const fn = loadArray(country_cities, 2, showPagination)
    // BUTTON NEXT 
    const handlePagination = () => {
        fn();
    }

    const fictionalCharacter = {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        age: 35,
        address: {
          addressLine1: '221B Baker Street',
          addressLine2: '',
          city: 'London',
          country: 'United Kingdom',
          postalCode: 'NW1 6XE'
        }
    }
      
    // Deep copy upto level 1
    let clonedFictionalCharacter = { ...fictionalCharacter };
    
    clonedFictionalCharacter.firstName = 'John';
    clonedFictionalCharacter.lastName = 'Watson';
    
    console.log('1 Original    : ',fictionalCharacter);
    console.log('1 Copy Shallow: ',clonedFictionalCharacter);
    
    // Shallow copy for nested address object
    fictionalCharacter.address.country = 'USA';
    
    console.log('2 Original    : ',fictionalCharacter);
    console.log('2 Copy Shallow: ',clonedFictionalCharacter);

    return (
        <>
            <ul>
                <li>Un Closure es una funcion que tiene un estado siendo el estado los datos informacion
                    que puede mantener y modificar, es parecido a un objeto que se puede ejecutar</li>
                <li>
                    una clausura permite acceder al ámbito de una función exterior desde una función interior.
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div style={{display:"grid", justifyContent: "center"}}>
                <div style={{width:"400px", height:"350px"}}>
                    <img style={{objectFit: "fill", width: "100%", height: "auto"}} ref={refImg} alt="" />
                </div>

                <button  onClick={handleChange}>change image</button>
            </div>
            <div>
                <div style={{display:"grid"}} ref={refList}>
                </div>
                <button onClick={handlePagination} >next</button>
            </div>
            
        </>
    )
}

export default Closure;