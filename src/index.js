
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import reducers from './reducers/'
import BoxCon from './container/box-container;
import './index.css';

let store = creatStore(reducers, applyMiddleware(thunk))

class App extends React.Component{
    render(){
        return(
            <div>
                <BoxCon />
            </div>
        )
    }
}

ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("result")
)