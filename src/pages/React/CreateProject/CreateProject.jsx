import '../css/react.styles.scss'
import configProyect1 from '../../../assets/react/configProyect1.png'
import configProyect2 from '../../../assets/react/configProyect2.png'

const CreateProject = () => {
  return (
    <>
        <ul>
            <li>1. Instalamos il plugin de Vite para react: <strong>npm i -D @vitejs/plugin-react-swc</strong> 
            </li>
            <li>
                <p>2. Configuracion de Vite: creamos el file <strong>vite.config.js</strong> y agregamos el siguiente codigo:</p>
                <div className='container-img'>
                    <img className='image' src={configProyect1} alt="" />
                </div>
            </li>
            <li>3. Instalamos react: <strong>npm install react react-dom -E</strong> donde react es la biblioteca y react-dom 
                contiene los binding y E significa de estable
            </li>
            <li>4. Instalamos el Linter: <strong>npm install standard -D</strong></li>
            <li>
                <p>5. Configuramos el Linter en el archivo package.json agregando las siguientes lineas de codigo:</p>
                <div className='container-img'>
                    <img className='image' src={configProyect2} alt="" />
                </div>
            </li>
            <li>Instalamos los modulos: npm install</li>
            <li></li>
            <li></li>
        </ul>
    </>
  )
}

export default CreateProject