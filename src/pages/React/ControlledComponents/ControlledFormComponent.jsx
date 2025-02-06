import React, { useState } from 'react'

const ControlledFormComponent = () => {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        setName('');
    }

    return (
        <>
            <h2>Controlled Form Component</h2>
            <form >
                <fieldset>
                    <div>
                        <p >Uncontrolled Form - traditional HTML form reloading page:</p>
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder='Name' name='name' />
                    </div>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>

            {/* transform this form into a controlled version:
            1. It needs to create some local state for the input text:
                const [Name, setName] = useState(""); 
            */}

            {/* 2. It needs to hook up that stage to the text input via two props:
                *value prop to turn the input into a controlled one
                *onChange to receive all the changes and update the state 
                <input type="text" placeholder='Name' name='name' onChange={e => setName(e.target.value)}/>
            */}

            {/* 3. The control the submission of the form it uses the onSubmit prop in the form tag */}

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name2">Name:</label>
                        <input 
                            id='name2'
                            type="text" 
                            placeholder='Name' 
                            name='name2' 
                            onChange={e => setName(e.target.value)}/>
                    </div>
                    <button disabled={!name} id='submit2' type='submit'>Submit</button>
                </fieldset>
            </form>
            
        </>
    )
}

export default ControlledFormComponent