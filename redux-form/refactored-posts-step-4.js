//Author Alexander Adu-Sarkodie
//TODO: Refactor form with HOC and lodash, and listoption methods
	//Create a config object of types, mapping the controllers
	// create an object dependencies for the types
	//Use redux Form Helper methods to pass object types and drill down to leaf nodes

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

//Taken from fields key  here:: export default reduxForm()
// Further we create a configuration object for fields
//Fabricate the attay into object
// values will be string
//const FIELDS = ['title','categories','content']
//the FIELDS configuraion will have TYPES related to the fields in the form
//The TYPES will be the names in the fields
//Each TYPE is an object with key/value pairs

const FIELDS = {

	title: {
		type: 'input',
		label: 'Title for post'
	},

	categories: {
		type: 'input',
		title: 'Enter some categories for this post'
	},

	content: {
		type: 'textarea',
		title: 'Post Contents'
	}

};

//Buiding a Blog Post
class PostsNew extends Component {

	onSubmit(props) {
		alert('Post Submitted');//test
	}
	//create a function to build re-usable dynamic template for the view content area of the form
	//We call it renderField. 
	//the 2 signatures are a type and field in the context here

	renderField(fieldConfig, field) {

		//We call on redux-form fieldHelber object
		//used for dynamic checking using props to check for each  field of the  fieldConfig type and map onto the content for it
		//and to help evaluate appropriate errors.
		const fieldHelper = this.props.fields[field];

		//return the dynamic view template. This is a high order component
		return(
			<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`}>
				<label>{fieldConfig.label}</label>
				<fieldConfig.type type="text" className="form-control"  {...fieldHelper} />
				<div className="text-help">
					{fieldHelper.touched ? fieldHelper.error : ''}
				</div>	
			</div>
		)
	}


	render(){
		const { fields: { handleSubmit } = this.props; //field lables and action(s). Stateless. title, categories and content have been removed

		//form with interpolation
		return (
			<form onSubmit={handleSubmit(props => this.onSubmit(props))} >
				<h3>Create A New post</h3>

				<!--Replace with reference to HOC (renderField):: Use _.map()-->
					{_.map(FIELDS, this.renderField.bind(this))}

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn-danger">Cancel</Link>
			</form>
		);
	}
}

//Validating fuuction
function validate(values) {
	const errors {};

	//Use lodash. each function to loop throughthe configuration object with TYPES
	_.each(FIELDS,(type, field)) => {

		//check the array of fields on each instance signature (values)
		if(!values[field]) {
			errors[field] = `Enter a ${field}`
		}
	}

	/*if(!values.title) {
		errors.title = 'Enter title';
	}

	if(!values.categories) {
		errors.categories = 'Enter categories';
	}

	if(!values.content) {
		errors.content = 'Enter content';
	}*/

	return errors;
}


//Migrating to global scope
export default reduxForm({
	form: 'PostsNews',
	//fields: ['title', 'categories', 'content'],
	//Enter the magic of lodash
	fields: _.keys(FIELDS),
	validate
})(PostsNews);
