import React from 'react'
import withDataFetchHighOrderComponent from './withDataFetchExample'

const HighOrderComponent = ({data}) => {

    const list = data.results;

    return (
        <>
            <h2>Higher-Order Components</h2>
            <p>In React, a higher-order component is a function that takes a component as an argument 
                and returns a new component that wraps the original component.</p>

            <p>Allows you to add additional functionality to a component without modifying the component's code. </p>

            <p>Main characteristics:  </p>
            <ol>
                <li>Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.</li>
                <li>Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.</li>
                <li>Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.</li>
                <li>Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.</li>
                <li>Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.</li>
            </ol>

            <ul>
                {
                    list?.map(item => 
                        <li key={item.name}>{item.name}</li>
                    )
                }
            </ul>
        </>
    )
}

const HighOrderComponent2 = withDataFetchHighOrderComponent(HighOrderComponent)

export default HighOrderComponent2