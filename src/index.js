
import React from 'react';
import ReactDom from 'react-dom';
import BoxCon from './container/box-container'
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <BoxCon />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("result"))