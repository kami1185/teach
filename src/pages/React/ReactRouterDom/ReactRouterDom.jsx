import reactRouter from '../../../assets/react/reactRouterDom.png'
import reactRouter1 from '../../../assets/react/reactRouterDom1.png'
import reactRouter2 from '../../../assets/react/reactRouterDom2.png'
import '../css/react.styles.scss'

const ReactRouterDom = () => {


    return (
        <>
            <ul>
                <li>Instalamos React Router v6: npm install react-router-dom</li>

                <li>
                    <p>Importamos BrowserRouter de react router y envolvemos toda la applicacion. De esta forma es mas
                        limpio, escalable y legible el codigo sin agregar las rutas. </p>
                    <div className='container-img'>
                        <img className='image' src={reactRouter1} alt="" />
                    </div>
                </li>
                <li>
                    <p>Creamos una carperta routes y dentro un componente RoutesApp.</p>
                    <p>Definimos el wrapper Routes {'<Routes></Routes>'}</p>
                    <p>Dentro de {'<Routes>'} definimos cada ruta con el path y el elemento a 
                        renderizar {'<Route contiene un path={‘login’} y el elemento a cargar element={<Login />} />'} . </p>
                    <p>Si definimos el path="/", {`<Route path=” / ” element={<Home />} /> `} sera la pagina inicial, tratara 
                        de cargar el componente Home</p>
                    <p>Si definimos el path="/*", {`<Route path=”dashboard/* ” element={<Dashboard />} />`} significa que dashboard
                        contiene mas rutas por ejemplo dashboard/graphics.</p>
                    <p>si definimos el path=”*”, {`<Route path=”*” element={<ComponentNotFound />} /> `}  
                        significa que la ruta no existe, mostramos el componente {`<ComponentNotFound />`} mostrando 
                        que la pagina no se existe. </p>
                    <div className='container-img'>
                        <img className='image' src={reactRouter} alt="" />
                    </div>
                </li>
                <li>
                    <p>En App definimos e componente RoutesApp: </p>
                    <div className='container-img'>
                        <img className='image' src={reactRouter2} alt="" />
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>

        </>
    )
}

export default ReactRouterDom