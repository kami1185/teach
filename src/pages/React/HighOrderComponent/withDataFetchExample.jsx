import { useEffect, useState } from 'react'

// 1. Creates a High Order Component function 
// 2. Receives a component as an argument withDataFetchHighOrderComponent(WrapperComponent)
// 3. Return a function component WithDataFetch() 
// 4. WithDataFetch() will return WrapperComponent that was passed as an argument
// 5. Expport withDataFetchHighOrderComponent
// data fetching is done to an api to obtain a pokemon list

const withDataFetchHighOrderComponent = (WrapperComponent) => {

    // the props will be sent to the <WrapperComponent {...props}/>
    return function WithDataFetch(props){

        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const fetchData = async() =>{
            try {
                setLoading(true);
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
                const list = await response.json();
                setData(list)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        useEffect(() => {
          fetchData()
        }, [])
        
        // A WrapperComponent are passed props and all properties using ... {...{...props, data, error, loading} }
        // because it will create a new object
        return (
                <WrapperComponent {...{...props, data, error, loading} }/>
        )
    }
}

export default withDataFetchHighOrderComponent;