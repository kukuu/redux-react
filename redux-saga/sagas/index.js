// Author - Alexander Adu-Sarkodie
//Composing  redux-saga middleware


import '../runtime';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//saga function, calls action and dispatches
//function* - generator function from es6 (manages asynchronous side efects. Stop, start, recall, execute)
//es6  syntax

function* fetchUsers(){

	// call(), calls and executes an asynchronous function, and waits for response. 
	//Takes 2 arguments an array (Context and method on the context)
	//the context in square brackets infers self referencing (this). 
	//It can be removed together with the array square brackets, and then just the second parameter will hold
	//it becomes the context.. You can also use the apply function. In this case it will read
	//apply(axios, axios.get, [args...])
	const users = yield call([axios, axios.get],'http://localhost:3050/users' );//execution will stop executing until it is returned
	
	//call the next put effect()
	yield.put({type: 'FETCH_USERS_SUCCESS', payload: users.data})

}

export function* fetchUserWatcher(){

	// redux saga effect =>  takeEvery(). Takes a pair of arguments. ACTION, and the callback
	yield takeEvery('FETCH_USERS', fetchUsers);
}
