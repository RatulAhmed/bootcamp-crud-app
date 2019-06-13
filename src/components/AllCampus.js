import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_CAMPUS, addCampusThunk } from '../actions/CampusActions';
import store from '../Store';
import AllCampusView from './AllCampusView';

class AllCampus extends Component {

	constructor(props) {
		super(props);

		this.state = {
			campusName: "",
			campusAddress: "",
			imageUrl: "",
			description: "",
			addClick: false,
		}
	};

    handleOnChange = event => {

        this.setState ({
            [event.target.name]: event.target.value
        })
    };

    handleOnSubmit = () => {

        const newCampus = {
            campusName: this.state.campusName,
            campusAddress : this.state.campusAddress,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            campus: this.state.campus,
            id: this.props.campus.length + 1,
        };

        this.setState({
            addClick: !this.state.addClick
        });

        this.props.addCampus(newCampus);
    };

    updateAddClick = () => {
        this.setState({
            addClick: !this.state.addClick
        })
    };

    render() {
        return(
            <AllCampusView addClick={this.state.addClick} handleOnSubmit={this.handleOnSubmit}
            handleOnChange={this.handleOnChange} updateAddClick={this.updateAddClick}
            campusInfo={this.props.campus} />
        );
    }     	

};


const mapStates = (state) => {

	return {

		campus: state.campusReducer.campus
	}
}

const mapDispatch = (dispatch) => {

	return {

		addCampus: (newCampus) => {
			dispatch(addCampusThunk(newCampus));
		},
	}
}
export default connect(mapStates, mapDispatch)(AllCampus);
