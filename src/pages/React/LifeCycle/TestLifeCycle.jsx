import React from 'react'
import './css/lifecycle.scss'

const arrayFood = ['kebab','hamburguer', 'hot dog','french fries', 'ice cream', 'tacos', 'sandwich', 'pizza']

export class Counter extends React.Component {

	// 1. ******************************************************************************** 
	// First  called during the mounting phase.
	// This method is mostly used for initializing the state of the component and binding 
	// We dont have access to the instance of the object
	// event-handler methods within the component.
	constructor(props){
		console.log('1. Constructor', props)
		super(props);
		this.state = {
			count: 0,
			seed: 0,
			show_update: false
		}
	}

	IncrementCount() {
		this.setState({count: this.state.count + 1});
	}

	DecrementCount = () => {
		this.state.count > 1 ? this.setState({count: this.state.count - 1}) : null
	}

	// This method allows you to modify the state value with any props value.
	// This method is invoked in both the mounting and updating phases.
	// This method is CALLED every other method
	// We used the seed prop passed from LifeCycle Component
	static getDerivedStateFromProps(props, state) {
		// Check if a seed exists
		console.log('---------------------------------------------------')
		if(props.seed && state.seed != props.seed ){
			console.log(`. getDerivedStateFromProps - modify state values ${props.count} ${props.seed}`)
			return {
				seed: props.seed,
				count: props.seed
			}
		}
		console.log('. getDerivedStateFromProps - null')
		
		return null
	}

	// 2. ******************************************************
	// Is the last lifecycle method called in the mounting phase.
	// It’s called right after the component is rendered or mounted to the DOM.
	componentDidMount(){
		console.log('. componentDidMount')
		console.log('---------------------------------------------------')
		//this.setState({show_update: false});
	}

	shouldComponentUpdate(nextProps, nextState) {
		
		if(nextProps.ignoreprops && this.props.ignoreprops !== nextProps.ignoreprops){
			console.log(`. shouldComponentUpdate - NO RENDER 
						NextProps: ${nextProps.ignoreprops}, 
						NextState: ${nextState.count}, 
						this.props.: ${this.props.ignoreprops}, 
						this.props.seed: ${this.props.seed}`)
						
			return false
		}

		console.log(`. shouldComponentUpdate - RENDER 
					NextProps ignoreprops: ${nextProps.ignoreprops}, 
					NextState count: ${nextState.count}, 
					NextProps.ignoreprops: ${nextProps.ignoreprops}, this.props.ignoreprops: ${this.props.ignoreprops}, 
					NextProps.seed: ${nextProps.seed}, this.props.seed: ${this.props.seed}`)
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState){
		
		if(prevState.seed && prevState.seed === this.state.count){
			console.log(' TRUE - No Render')
			return true
		}

		if(prevState.count !== this.state.count){
			console.log(`. getSnapshotBeforeUpdate: 
							Previous Props ignoreprops: ${prevProps.ignoreprops}, 
							Previous Props seed: ${prevProps.seed}, 
							Previous state count: ${prevState.count}, Actually state: ${this.state.count}
							Previous state seed: ${prevState.seed}, Actually seed: ${this.state.seed}` )
			return true
		}
		console.log(`. getSnapshotBeforeUpdate`)
		return null
	}

	render() {
		console.log('. Render')
		return (
			<>
				<hr />

				<section className='lifecycle'>

					<section>
						<h2>Counter Component:</h2>
						<p>State: {this.state.count}</p>
						<button onClick={()=> this.IncrementCount()}>+</button>
						<button onClick={this.DecrementCount}>-</button>
					</section>
					<section className='componentPhase'>
						<h2>Life Cycle Methods</h2>
						
						<section className='border mountingComponent '> 
							<h2>Component Mounting the first time </h2>
							<div className='constructor border'>
								<h3>Constructor</h3>
								<p>{`ignoreprops: 0`}</p>
								<p>{`seed: 40 `}</p>
							</div>
							<div className='getDerivedStateFromProps border'>
								<h3>getDerivedStateFromProps</h3>
								<p>{`Get the seed prop: 40 `}</p>
							</div>
							<div className='render border'>
								<h3>Render</h3>

							</div>
							<div className='componentDidMount border'>
								<h3>componentDidMount</h3>

							</div>
						</section>

						<section className='border updatingComponent '> 
							<h2>Updating Component</h2>
							<div className='getDerivedStateFromProps border'>
								<h3>getDerivedStateFromProps</h3>
								<p>{`Get the seed prop: 40 `}</p>
							</div>
							<div className='shouldComponentUpdate border'>
								<h3>shouldComponentUpdate</h3>

							</div>
							{/* ${this.state.show_update ? 'show': 'hide'} */}
							<div className={`render border `}>
								<h3>Render</h3>

							</div>
							<div className='componentDidUpdate border '>
								<h3>componentDidUpdate</h3>

							</div>
						</section>
						
					</section>
				</section>
								
			</>
		)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('. componentDidUpdate')
		
		if(snapshot){
			console.log('. no render')
		}
		console.log('---------------------------------------------------')
	}

	componentWillUnmount(){
		console.log('. componentWillUnmount')
		console.log('---------------------------------------------------')
	}

	// // First  called during the mounting phase.
	// // This method is mostly used for initializing the state of the component and binding 
	// // event-handler methods within the component.
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		count: 0,
    //         id: 0,
	// 		profile: '',
    //         countDown: 10,
	// 		favoriteFood: ''
	// 	};

	// 	console.log(1, 'Mountig ***  Metodo Constructor Componente se inicializa, aun no esta en el DOM')

	// 	this.setCount = this.setCount.bind(this);
	// 	this.resetCount = this.resetCount.bind(this);
	// }

	// // This method allows you to modify the state value with any props value.
	// // This method is invoked in both the mounting and updating phases.
	// static getDerivedStateFromProps(props, state) {
	// 	return {profile: props.number };
	// }
	
	// // Is the last lifecycle method called in the mounting phase.
	// // It’s called right after the component is rendered or mounted to the DOM.
	// // It use to make network requests as soon as the component is mounted to the DOM, this is a perfect place to do 
	// componentDidMount() {
    //     const timer = setInterval(()=>{
    //         this.state.countDown > 0
    //         ? this.setState({countDown: this.state.countDown - 1})
    //         : clearInterval(timer)
    //     },1000);
    // }

    // setCount() {
	// 	this.setState({count: this.state.count + 1});
	// }

	// resetCount() {
	// 	this.setState({count: 0});
	// }

    // handleclick(num){
    //     this.setState({id: num});
    // }

	// handleChangeText(){
	// 	const food = arrayFood[Math.floor(Math.random() * arrayFood.length)];
	// 	console.log('Food: ', food)
	// 	this.setState({favoriteFood: food})
	// }

	// render() {

	// 	console.log(4, 'Mountig *** Metodo Render ')

    //     const { name, id } = this.props;
	// 	return (
	// 		<>
	// 			<h2>Counter {name}</h2>
	// 			<button onClick={this.setCount}>Click to add</button>
	// 			<p>Count: {this.state.count}</p>
    //             <button onClick={this.resetCount}>Reset Count</button>
    //             <p>Pass id to handle click function: {this.state.id}</p>
    //             <button onClick={this.handleclick.bind(this,id)}>Get Id</button>
	// 			<p>Profile: {this.state.profile}</p>
	// 			<div>
	// 				NASA Countdown: <br /> {this.state.countDown || "🪐"} <br />
    //                                 {"⭐".repeat(this.state.countDown) || "🚀"}
	// 			</div>

				
	// 			{/* <button onClick={this.handleChangeText.bind(this,123)}>Change Text:</button> */}
	// 			<button onClick={()=> this.handleChangeText()}>Change Text:</button>
	// 			{/* <button onClick={this.handleChangeText.bind(123)}>Change Text:</button> */}
	// 			<p>Testing shouldComponentUpdate Text : {this.state.favoriteFood}</p>

	// 			<TestUpdatePhase food={this.state.favoriteFood}/>

	// 		</>
	// 	)
	// }
}