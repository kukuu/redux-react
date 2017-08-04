
//Author: Alexander Adu-Sarkodie
//Purpose: Applying http to REACT/REDUX
//Client: AXIOS
//Compatibility: Make http requests by dispatching actions! From V2.0: Only compatible with Axios >13.X


import { createStore, applyMiddleware } from 'redux'
import { reduxHttpMiddleware, GET } from 'redux-http-middleware'
import axios from 'axios'
 
// ACTIONS 
// Takes an objet as argument with 3 keys: 'http verb', 'url', and a call back 'onResponse'
const getStatus = () => ({
  GET,
  url: 'https://github.com/kukuu/api/stock.json',
  onResponse: 'GET_STATUS_RESPONSE'
})
 
// REDUCER => takes 2 arguments::state and action 
//action has 2 attribute dependencies: type (requuired), and payload which s optional
const reducer = (state, action) => {
  if(action.type === 'GET_STATUS_RESPONSE') {
    console.log(`Stock status: ${action.payload.status}`)
  }
}
 
// STORE 
const config = {
  client: axios
};

//createStore takes a series of arguments: reducer, applyMiddleware. ApplyMiddleware as a function
//injects the http middleware 'reduxHttpMiddleware', which attaches the config as a signature dependency
//the signature- 'config' is passed by the AXIOS client in the chain as a module dependency.
const store = createStore(
  reducer,
  applyMiddleware(
    reduxHttpMiddleware(config)
  )
)
 
// DISPATCH 
store.dispatch(getStatus())
 
// console output: good 
 
