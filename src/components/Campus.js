import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADD_CAMPUS, EDIT_CAMPUS, REMOVE_CAMPUS, addCampus, editCampus ,removeCampus } from '../actions/CampusActions';
import store from '../Store';


class Campus extends Component {
	constructor() {
		super();

		this.state = {
			campusName: props.campusName,
			campusAddress: props.campusAddress,
			imageUrl : props.imageUrl,
			description: props.description,
			// Students props is an array 
			students: props.students
		}
		this.blankState = this.state;
	}


	render()
	{
		return(null);
	}
}

const mapStates = (state) => {

	return {

		value: state.campus
	}
}

const mapDispatch = (dispatch) => {

	return {

		addCampus: () => {
			dispatch({type: ADD_CAMPUS});
		},
		editCampus: () => {
			dispatch({type: EDIT_CAMPUS});
			},
		removeCampus: () => {
			dispatch({type: REMOVE_CAMPUS});
			}
	};
}

export default connect(mapStates, mapDispatch)(Campus);
