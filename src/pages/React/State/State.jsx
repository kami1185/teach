import React from 'react'

const State = () => {
  return (
    <>
        <h3>What is the State in React:</h3>
        <p>
            State of a component is an object that holds some information that may change over the lifetime 
            of the component. 
            The important point is whenever the state object changes, the component re-renders. 
            It is always recommended to make the state as simple as possible and minimize the number of stateful components.
        </p>
        
        <h3>What does setState do?</h3>
        <p>
            setState() schedules an update to a component’s state object. When state changes, the component responds
            by re-rendering.
            It updates the component's state, triggering a re-render to reflect the new state in the user interface. 
            The setState method accepts an object representing the new state or an updater function that provides 
            the new state based on the previous state.
        </p>

        <h3>What is the difference between state and props?</h3>
        <p>
            While both hold information that influences the output of render, they are different in one important way:
            props get passed to the component (similar to function parameters) whereas state is managed within the 
            component (similar to variables declared within a function).
        </p>

    </>
  )
}

export default State