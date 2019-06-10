
// ACTION TYPES;
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";


// ACTION CREATORS
const addCampus = (campus) => {
	return {
		type: ADD_CAMPUS,
		payload: campus
	}
}


const editCampus = (campus) => {
	return {
		type:EDIT_CAMPUS,
		payload: campus
	}
}


// thunks would go here



// REDUCER
export default (state = {}, action = > {
	switch(action.type) {
		case ADD_CAMPUS:
			return action.payload;
		case EDIT_CAMPUS:
			return action.payload;
		default:
			return state;
	}
})