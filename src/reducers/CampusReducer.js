import {EDIT_CAMPUS, ADD_CAMPUS, REMOVE_CAMPUS} from '../actions/CampusActions';

function campusReducer(state = {
	campus: [
	{
		campusName: "Hunter College",
		campusAddress: "68th and Lex",
		description: "A college",
		imageUrl: "/.jpg",
		id: 1
	},
	{
		campusName:"Baruch College",
		campusAddress: "Something street",
		description: "Another college",
		imageUrl: '.jpg',
		id: 2
	}
	],
}, action) {
	switch(action.type) {
		case ADD_CAMPUS: {
			return {
				...state,
				campus: state.campus.concat(action.payload)
			}
		}
		case EDIT_CAMPUS: {
			let newState = state.campus;
			for(let i = 0; i < newState.length; i++){
				if(newState[i].id === action.payload.id)
					newState[i] = action.payload;
			}
			return {
				...state,
				campus:newState
			}
		}
		case REMOVE_CAMPUS: {
			let newState = state.campus;
			return {
				...state,
				campus: newState.filter(val => val.id != action.payload)
			};
		}
		default:
			return state;
	}
}


export default campusReducer; 
