
// Author - Alexander Adu-Sarkodie
//Using redux-saga
//This is a counter based application

import 'runtime';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'logger-redux';
import { axios } from 'axios';

let middleware = applyMiddleware(logger);

let initialState = {
	counter:0,
}

//Create Reducer. Which takes 2 arguments satate and  actions. Returns payload
function state( state = initialState, acttion){
	switch(acttion.type){
		case 'INCREMENT'://Despaatching increment Action
		return Object.assign( {}, state , {
			counter: state.counter + 1
		});

		case 'DECREMENT'; //Despatching decrement action
		return Object.assign( {}, state , {
			counter: state.counter - 1
		});
		default:
			return state;
	}
}

//reducer=> state;
//applyMiddleware is de-constructed from above
let store = createStore( state , middleware);

//We attache the store to the window and then calls the dispatcher object
window.store = store;

//in the dispatch we call our Action creator functions
// Custom Dispatcher Object we attach to the window :  we attach the reducer to dispatch on the action type
window.dispatcher = {
	dispatchIncrement: () => {
		store.dispatch({ type: 'INCREMENT'})
	},
	dispatchDecrement: () => {
		state.dispatch({ type: 'DECREMENT'})
	}
}
//Run the following routines in the console. By iterating the following routines. Back and forwards
//1. dispatcher.dispatchIncrement()
//2. dispatcher.dispatchDecrement()

