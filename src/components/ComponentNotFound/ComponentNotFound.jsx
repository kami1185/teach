
import { ButtonHome } from '../Button'

const ComponentNotFound = () => {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    }

    return (
        <div style={styles}>
            <div>Error, page not found</div>
            <div>
                <ButtonHome/>
            </div> 
            
        </div>
    )
}

export default ComponentNotFound