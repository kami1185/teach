import React from 'react'
import '../css/react.styles.scss'

function Mounting() {

    return (
        <>
            <p>In this phase the component is inserted into the DOM.</p>
            <p>To get through this phase, four lifecycle methods are called: Constructor, static GetDerivedStateFromProps, 
                Render, and ComponentDidMount.</p>
            <ol >
                <li>
                    <h2>constructor method</h2>
                    <p>Is the FIRST method called during the mounting phase.</p>
                    <p>This method is mostly used for initializing the state of the component and binding event-handler methods 
                        within the component.</p>
                    <p>The constructor method is not necessarily required. If you don't intend to make your component 
                        stateful (or if that state doesn’t need to be initialized) or bind any method, then it’s not 
                        necessary to implement.</p>
                    <p>YOU HAVE TO BE CAREFUL when you initialize state from props in constructor. Even if props changed 
                        to new one, the state wouldn't be changed because mount never happen again.
                        So getDerivedStateFromProps exists for that.</p>
                    
                        <pre>
                            {`
                                export class Counter extends React.Component {
                                    constructor(props) {
                                        super(props);
                                        this.state = {
                                            count: 0
                                        };
                                        this.setCount = this.setCount.bind(this);
                                    }

                                    setCount() {
                                        this.setState({count: this.state.count + 1});
                                    }

                                    render() {
                                        return (
                                            <div>
                                                <h1>Counter</h1>
                                                <button onClick={this.setCount}>Click to add</button>
                                                <p>Count: {this.state.count}</p>
                                            </div>
                                        )
                                    }
                                }
                            `}
                        </pre>

                    <p>the component's state is initialized within the constructor method to keep track of the count state. </p>
                    
                    <p>The setCount method, which is an event-handler attached to your button in this case, is bound within 
                        the constructor.</p>

                </li>
                <li>
                    <h2>static getDerivedStateFromProps method</h2>

                    <p>This method allows you to modify the state value with any props value.</p>
                    <p>The getDerivedStateFromProps method is a static method, which means it's called on the class itself, not on instances of the class.</p>
                    <p>Is called after the constructor and before render().</p>
                    <p>This method is called for every render cycle and provides an opportunity to update the component's
                        state based on changes in props before the initial render.</p>
                    <p>Accepts two arguments: props and state, and returns an object, or null if no change is needed.</p>
                    <p><strong>static getDerivedStateFromProps(props, state)</strong></p>
                    <p>These values are passed directly to the method, so there’s no need for it to have access to the 
                        instance of the class and thus is considered a static method.</p>
                    
                    <pre>
                        {`                    
                            class UserPreview extends React.Component {
                                constructor(props) {
                                    super(props);
                                    this.state = {
                                        ...
                                        fullname: ""
                                    };
                                }
                            
                                static getDerivedStateFromProps(props, state) {
                                    return {
                                        fullname: ${'props.firstname'} ${'props.lastname'}
                                    }
                                }
                            
                                render() {
                                    // ...
                                }
                            }
                        `}
                    </pre>
                </li>
                <li>
                    <h2>render method</h2>
                    <p>Is the only required method for a class-based React component.</p>
                    <p>It’s called after the getDerivedStateFromProps method and actually renders or inserts the HTML to the DOM.</p>
                    <pre>
                        {`
                            class SubmitButton extends React.Component {
                                render() {
                                    return (
                                        <button
                                            type="submit"
                                            style={this.props.styles}
                                        >
                                            {this.props.child}
                                        </button>
                                    );
                                }
                            }
                        `}
                    </pre>
                </li>
                <li>
                    <h2>componentDidMount method</h2>
                    <p>Is the last lifecycle method called in the mounting phase.</p>
                    <p>It’s called right after the component is rendered or mounted to the DOM.</p>
                    <p>This method allows you to make subscriptions like subscribing to the Redux store.</p>
                    <p>Allows to add side effects like sending network requests or updating the component's state.</p>
                    <p>You can also call the this.setState method right away.</p>
                    <p>A common use case is waiting until a component renders to start an animation, or Fetching Data 
                        from an external source.</p>
                    <pre>
                        {`
                            class NASACounter extends React.Component {
                                constructor(props) {
                                    super(props);
                                    this.state = {
                                        count: 10
                                    };
                                }
                                
                                componentDidMount() {
                                    const myTimer = setInterval(() => {
                                    this.state.count > 0
                                        ? this.setState({ count: this.state.count - 1 })
                                        : clearInterval(myTimer);
                                    }, 1000);
                                }
                                
                                render() {
                                    return (
                                    <div style={this.props}>
                                        <h1>
                                        NASA Countdown: <br /> {this.state.count || "🪐"} <br />
                                        {"⭐".repeat(this.state.count) || "🚀"}
                                        </h1>
                                        {this.state.count === 0 && <h2>LIFT OFF!!!</h2>}
                                    </div>
                                    );
                                }
                            }
                        `}
                    </pre>
                </li>
            </ol>
        </>
    )
}

export default Mounting