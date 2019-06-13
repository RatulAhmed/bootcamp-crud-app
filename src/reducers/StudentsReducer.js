import {EDIT_STUDENT_INFO, ADD_STUDENT, REMOVE_STUDENT} from '../actions/StudentActions';

function studentReducer(state = {
    students: [
        {
            firstName: 'James',
            lastName: 'Corden',
            email: 'jcorden@gmail.co.uk',
            gpa: '1.9',
            campus: 'CBS Studios',
            img: '../../../anonymous.jpg',
            id: 0,
        },
        {
            firstName: 'Karanveer',
            lastName: 'Singh',
            email: 'karansingh98123@gmail.com',
            gpa: 3.3,
            campus: 'Hunter College',
            img: '../../../anonymous.jpg',
            id: 1,

        },
        {
            firstName: 'John',
            lastName: 'Wick',
            email: 'mydoghasbeenmurdered@hotmail.com',
            gpa: 4.0,
            campus: 'Conitnental',
            img: '../../../anonymous.jpg',
            id: 2,
        },
    ],
}, action) {

    switch(action.type) {
        case EDIT_STUDENT_INFO: {
            let newState = state.students;

            for(let i = 0; i < newState.length; i++){
                if(newState[i].id == action.payload.id)
                    newState[i] = action.payload;
            }

            return {
                ...state,
                students: newState
            }
        }
        case REMOVE_STUDENT: {
            let newState = state.students;

            console.log("state before remove ", newState);

            newState = newState.filter(val => val.id != action.payload);

            console.log("state after remove is ", newState);

            return {
                ...state,
                students: newState
            }
        }
        case ADD_STUDENT: {
            return {
                ...state,
                students: state.students.concat(action.payload)
            };
        }
        default:
            return state;
    }
}

export default studentReducer;
