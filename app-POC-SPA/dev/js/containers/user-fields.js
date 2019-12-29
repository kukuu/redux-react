import React, {Component} from 'react';

class userFields extends Component {

	state =  {
        return { form: { firstName: 'Ryan', lastName: 'Vice'} }
    },

    onChange(event) {
        this.state.form[event.target.name] = event.target.value;

        this.setState({form: this.state.form});
    },
    onSubmit(event) {
        event.preventDefault();
        
        alert('Form submitted. firstName: ' +
            this.state.form.firstName +
            ', lastName: ' +
            this.state.form.lastName);
            
    }

    render() {

       return (
            <form onSubmit={this.onSubmit}>
                <TextBox name='firstName' 
                    value={this.state.form.firstName}
                    onChange={this.onChange}/>
                <TextBox name='lastName'
                    value={this.state.form.lastName}
                    onChange={this.onChange}/>
                <button className='btn btn-success' 
                  type='submit'>Submit</button>
            </form>
        );
    }

}


class TextBox extends Component {

	render() {
        return (
            <input className='form-control' 
                name={this.props.name}
                type='text' 
                value={this.props.value}
                onChange={this.props.onChange}/>
        );
    }

}



    

