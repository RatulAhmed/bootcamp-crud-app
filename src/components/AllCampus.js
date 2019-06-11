import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCampus, editCampus ,removeCampus } from '../actions/CampusActions';
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


const mapStates = (state, ownProps) => {

	return {

		value: state.campus
	}
}

const mapDispatch = (state, ownProps) => {

	return {

		addCampus: () => {
			dispatch({type: ADD_CAMPUS});
		},
		editCampus: () => {
			dispatch({type: EDIT_CAMUPUS});
			},
		removeCampus: () => {
			dispatch({type: REMOVE_CAMPUS});
			}
	};
}

export default connect(mapStates, mapDispatch)(AllCampus);
