import React from 'react'
import shouldComponentUpdate from '../../../assets/react/shouldComponentUpdate.png';

export const Updating = () => {
  return (
    <>
      <p>The Updating phase is triggered when component props or state change.</p>
      <p>Has the following methods: static getDerivedFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, and componentDidUpdate.</p>
      <ol>
        <li>
          <h2>The static getDerivedStateFromProps method</h2>
          <p>In the update phase, the first lifecycle method called is getDerivedStateFromProps.</p>
          <p>This method is useful if you have updated props and you want to reflect that in the component's state.</p>
          <p>This method is invoked in both the mounting and updating phases.</p>
        </li>
        <li>
          <h2>shouldComponentUpdate method</h2>
          <p>Once the static getDerivedStateFromProps method is called, the shouldComponentUpdate method is called next.</p>
          <img src={shouldComponentUpdate} alt="" />
          <p>It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether 
            the component should update or not. If this method returns true, the component will update, 
            and if it returns false, the component will not update.</p>
          <pre>
            {`
              class Header extends Component {
                  constructor(props) {
                      super(props);
                      this.state = { favoriteFood: 'rice' };
                  }
              
                  shouldComponentUpdate(nextProps, nextState) {
                      // Only re-render if the favoriteFood state has changed
                      return this.state.favoriteFood !== nextState.favoriteFood;
                  }
              
                  changeFood = () => {
                      this.setState({ favoriteFood: 'Pizza' });
                  }
              
                  render() {
                      return (
                          <div>
                            <h1>My Favorite Food is {this.state.favoriteFood}</h1>
                            <button type="button" onClick={this.changeFood}>Change food</button>
                          </div>
                      );
                  }
              }
            `}
          </pre>
        </li>
        <li>
          <h2>getSnapshotBeforeUpdate method</h2>
          
          <p>The getSnapshotBeforeUpdatelifecycle method stores the previous values of the state after the DOM is updated. </p>
          <p>This method gives you access to the previous props and state of the component before it's updated.</p>
          <p>It’s another method that’s rarely used.</p>
          <p>getSnapshotBeforeUpdate is called after the render method, and before componentDidUpdate.</p>
          <p>Whatever value is returned here is then passed on to another lifecycle method.</p>
          <p>The getSnapshotBeforeUpdate React lifecycle method doesn’t work on its own. It is meant to be used in 
            conjunction with the componentDidUpdate lifecycle method.</p>
            

        </li>
        <li></li>
        <li></li>
      </ol>
    </>
  )
}
