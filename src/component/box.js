import React from 'react';

class Box extends React.Component{

    render(){
        return(
            <div className="wrapper">
                <div className="box" style= `${
                backgroundColor: this.props.color }` >
                    <button onclick = {() => {this.props.handleClick()}}> Change Colour </button>
                </div>
             </div>
        )
    }
}

export default Box;