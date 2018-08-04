
// Author - Alexander Adu-Sarkodie
//Using redux-saga
//This is a counter based application
//This script has been updated with a root saga 

import 'runtime';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'logger-redux';
import { createSagaMiddleware } from 'redux-saga';
import { axios } from 'axios';

import { rootSaga } from './sagas'

let sagaMiddleware = createSagaMiddleware();// Replicates the thunk
let middleware = applyMiddleware(logger, sagaMiddleware);

let initialState = {
	counter:0,
	users: []
}

//Create Reducer. Which takes 2 arguments state and  Actions 
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

		case 'FETCH_USERS_SUCCESS'; //Returning payload
		return Object.assign( {}, state , {
			users: action.payload
		});


		default:
			return state;
	}
}

let store = createStore( state , middleware);

//run the root saga middleware. Compose all the multiple watchers if more than one. 
sagaMiddleware.run(rootSaga);

//We attache the store to the window and then dispatch
window.store = store;

//in the dispatch we call our Action creator functions
// Custom Dispatcher Object we attach to the window :  we attach the reducer to dispatch on the action type
window.dispatcher = {
	dispatchIncrement: () => {
		store.dispatch({ type: 'INCREMENT'})
	},
	dispatchDecrement: () => {
		state.dispatch({ type: 'DECREMENT'})
	},
	fetchUser: () => {
		store.dispatch({ type: 'FETCH_USERS' })
	}
	
}

