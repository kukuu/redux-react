
//Author: Alexander Adu-Sarkodie
//Purpose: Applying http to REACT/REDUX
//Client: AXIOS
//Compatibility: Make http requests by dispatching actions! From V2.0: Only compatible with Axios >13.X


import { createStore, applyMiddleware } from 'redux'
import { reduxHttpMiddleware, GET } from 'redux-http-middleware'
import axios from 'axios'
 
// ACTIONS 
const getStatus = () => ({
  GET,
  url: 'https://github.com/kukuu/api/stock.json',
  onResponse: 'GET_STATUS_RESPONSE'
})
 
// REDUCER 
const reducer = (state, action) => {
  if(action.type === 'GET_STATUS_RESPONSE') console.log(`Stock status: ${action.payload.status}`)
}
 
// STORE 
const config = {
  client: axios
};

const store = createStore(
  reducer,
  applyMiddleware(
    reduxHttpMiddleware(config)
  )
)
 
// DISPATCH 
store.dispatch(getStatus())
 
// console output: good 
 