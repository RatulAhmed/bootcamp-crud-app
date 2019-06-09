function reducer(state = {
    students: [
        {
            firstName: 'James',
            lastName: 'Corden',
            email: 'jcorden@gmail.co.uk',
            gpa: '1.9',
            campus: 'CBS Studios',
        },
        {
            firstName: 'Karanveer',
            lastName: 'Singh',
            email: 'karansingh98123@gmail.com',
            gpa: 3.3,
            campus: 'Hunter College'
        },
        {
            firstName: 'John',
            lastName: 'Wick',
            email: 'mydoghasbeenmurdered@hotmail.com',
            gpa: 4.0,
            campus: 'Conitnental'
        }
    ],
}, action) {

    switch(action.type) {
        case "EDIT_STUDENT_INFO": {
            break;
        }
        case "REMOVE_STUDENT": {
            break;
        }
        case "ADD_STUDENT": {
            break;
        }
        default:
            return state;
    }
}

export default reducer;
