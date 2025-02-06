
const DataTypes = () => {
    return (
        <div>
            <h2>Tipo de Datos</h2>

            <h3>Primitivos</h3>

            <p>Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "valores primitivos".</p>

            <ul>
                <li>
                    <h4>Null</h4>
                    <p>Representa ausencia intencional de cualquier valor.</p>
                </li>
                <li>
                    <h4>Undefined</h4>
                    <p>Se refiere a una variable que no ha sido aun asignado un valor, tiene el valor undefined.</p>
                </li>
                <li>
                    <h4>BigInt</h4>
                    <p>Se usa para un rango largo de numeros</p>
                </li>
                <li>
                    <h4>Symbol</h4>
                    <p>Se usa como un unico indentificador</p>
                </li>
                <li>
                    <h4>Number</h4>
                    <p>Representa numero enteros y decimales.</p>
                </li>
                <li>
                    <h4>String</h4>
                    <p>Es una coleccion de caracteres encerrados en comillas simples o dobles.s</p>
                </li>
                <li>
                    <h4>Boolean</h4>
                    <p>Se usa para verificar si el valor es true o false</p>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default DataTypes