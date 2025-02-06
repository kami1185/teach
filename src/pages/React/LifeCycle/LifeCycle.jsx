import React, { useEffect, useState } from 'react'
import { Counter } from './TestLifeCycle'
import lifecyle from '../../../assets/react/lifecycle.jpg'
import { AccordionJS } from '../../../components'
import Mounting from './Mounting'
import { Updating } from './Updating'
import { Unmounting } from './Unmounting'
import { FocusableInput } from '../Tests/TextInput'
import { TodoList } from '../Tests/TodoList'

const lifecyclePhases = [
    {
      title: 'Mounting Phase',
      component: <Mounting/>
    },
    {
      title: 'Updating Phase',
      component: <Updating/>
    },
    {
      title: 'Unmounting Phase',
      component: <Unmounting/>
    }
  ]

// const LifeCycle = () => {
  export class LifeCycle extends React.Component {
    
    constructor(props){
      super(props)
      this.state = {
        mount: true, 
        ignoreProp: 0,
        seed: 40
      }
    }

    Mount(){
      this.setState({mount: true})
    }

    Unmount = () => {
      this.setState({mount: false})
    }

    IgnoreProps = () => {
      this.setState({ignoreProp: Math.floor(Math.random() * 20)})
    }

    seedGenerator = () => {
      this.setState({seed: Number.parseInt(Math.random() * 20)})
    }


  // const [countDown, setCountDown] = useState(10);

  // useEffect(() => {
  //     //Implementing the setInterval method
  //     const interval = setInterval(() => {
  //       if(countDown > 1)
  //         setCountDown(countDown => countDown - 1);
  //     }, 1000);

  //     console.log('countDown:', countDown)

  //     //Clearing the interval
  //     return () => clearInterval(interval);
  // }, [countDown]);
  
  render() {

    const items = [ { text: 'Buy grocery', done: true },
      { text: 'Play guitar', done: false },
      { text: 'Romantic dinner', done: false }
    ];


    return (
      <>
          <h2>The React LifeCycle</h2>
          <p>A React component undergoes three different phases in its lifecycle, including mounting, 
              updating, and unmounting. 
          </p>
          <p>
              1. The mounting phase is when a new component is created and inserted into the DOM or, in other words, 
              when the life of a component begins. This can only happen once, and is often called “initial render.”
          </p>
          <p>
              2. The updating phase is when the component updates or re-renders. This reaction is triggered when the 
              props are updated or when the state is updated. This phase can occur multiple times, which is kind of the 
              point of React.
          </p>
          <p>
              3. The last phase within a component's lifecycle is the unmounting phase, when the component is removed 
              from the DOM.
          </p>
          <img src={lifecyle} alt="Lifecyle" />
          {
              lifecyclePhases.map((item,index) => (
                  <AccordionJS key={index} item={item} index={index}/>
              ))
          }
  
          {/* <Counter name={'Camilo'} id={666} type={'Developer'} number={countDown}/> */}

          <button disabled={this.state.mount} onClick={()=> this.Mount()}>Mount</button>
				  <button disabled={!this.state.mount} onClick={this.Unmount}>Unmount</button>
          <div>
            <button onClick={this.IgnoreProps}>Ignore Props</button>
            <p>{`IgnoreProp Value (Passed to Counter Component like prop)`} : {this.state.ignoreProp}</p>
          </div>
          <div>
            <button onClick={this.seedGenerator}>Seed Generator</button>
            <p>{`Seed Value (Passed to Counter Component like prop)`} : {this.state.seed}</p>
          </div>
          {this.state.mount ? <Counter ignoreprops={this.state.ignoreProp} seed={this.state.seed}/> : null}
    


          <FocusableInput focused={false} />

          <TodoList
            items={items}
            onListClick={(event) => console.log("List clicked!")}
            onItemClick={(item, event) => { console.log('Hola',item, event) }}
          />;
      </>
    )
  }
  
}
