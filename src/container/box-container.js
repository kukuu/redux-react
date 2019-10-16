import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/'
import Box from '../component/box';

class BoxCon extends React.Component{
    render(){
        return(
            <div>
                <Box />
            </div>
        )

    }
}

const mapDispatchToProps = (state) => {
    return state;
};

export default connect(mapDispatchToProps, actionCreators )(BoxCon);