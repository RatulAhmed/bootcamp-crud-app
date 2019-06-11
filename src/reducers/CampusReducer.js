// may need to change name of campusReducer when combining reducers
function campusReducer(state = {
	campus: [
	{
		campusName: "Hunter College",
		campusAddress: "68th and Lex",
		description: "A college",
	},
	{
		campusName:"Baruch College",
		campusAddress: "Something street",
		description: "Another college"
	}
	],
}, action) {
	switch(action.type) {
		case "ADD_CAMPUS": {
			break;
		}
		case "EDIT_CAMPUS": {
			break;
		}
		case "REMOVE_CAMPUS": {
			break;
		}
		default:
			return state;
	}
}


export default campusReducer;
