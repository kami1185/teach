import React from 'react'

const arrayFood = ['kebab','hamburguer', 'hot dog','french fries', 'ice cream', 'tacos', 'sandwich', 'pizza']

export class TestUpdatePhase extends React.Component {
	
}


// export class TestUpdatePhase extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			favoriteFood: this.randomFood(arrayFood)
// 		}
// 	}

//     randomFood(arr){
//         return arr[Math.floor(Math.random() * arrayFood.length)];   
//     }

//     // This method returns a boolean value that determines whether the component should update or not. 
//     // If this method returns true, the component will update, and if it returns false, the component will not update.
//     shouldComponentUpdate(nextProps, nextState) {
// 		// Only re-render if the favoriteFood state has changed
// 		console.log('shouldComponentUpdate: ',this.state.favoriteFood, nextProps.food)
// 		return this.state.favoriteFood !== nextProps.food;
// 		// return true
// 	}

//     getSnapshotBeforeUpdate(prevProps, prevState) {
// 		if(this.state.favoriteFood !== prevState.favoriteFood){
// 			console.log('getSnapshotBeforeUpdate: ',this.state.favoriteFood, prevState.favoriteFood)
// 			document.getElementById("div1").innerHTML = `Before the update, the favorite was ${prevState.favoriteFood}`;
// 			return `Before the update, the favorite was ${prevState.favoritefood}`
// 		}
// 		return null
// 	}
	
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		if(snapshot !== null){
// 			document.getElementById("div2").innerHTML = `The updated favorite food is ${this.state.favoriteFood}`;
// 		}
// 	}

//     render() {

// 		return (
// 			<div>
				
// 				<h3>Testing getSnapshotBeforeUpdate My Favorite Food is {this.state.favoriteFood}</h3>
// 				<h3>Testing componentDidUpdate My Favorite Food is {this.state.favoriteFood}</h3>
// 				<div id="div1"></div>
// 				<div id="div2"></div>

// 			</div>
// 		)
// 	}

// }