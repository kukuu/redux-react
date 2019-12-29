import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a feature...</div>);
        }
        return (
            <div className="container-1">
                <div className="box-2">
                    <img src={this.props.user.thumbnail} />
                </div>
                 <div className="box-1">
                    <p>{this.props.user.description}</p>
                    <p>{this.props.user.colour}</p>
                    <p>{this.props.user.seats}</p>
                </div> 
            </div>
        );
    }
}




// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);

