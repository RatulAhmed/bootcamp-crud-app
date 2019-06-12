import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_CAMPUS, EDIT_CAMPUS, REMOVE_CAMPUS, addCampus, editCampus ,removeCampus } from '../actions/CampusActions';
import store from '../Store';

class AllCampus extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		console.log(this.props);
		return ( null )
		}
};


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

export default connect(mapStates, mapDispatch)(AllCampus);
