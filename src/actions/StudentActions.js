export const EDIT_STUDENT_INFO = "EDIT_STUDENT_INFO";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const ADD_STUDENT = "ADD_STUDENT";

const editStudent = (modifiedStudent) => {
    return {
        type: EDIT_STUDENT_INFO,
        payload: modifiedStudent
    }
};

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
};

const addStudent = (newStudent) => {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
};

export const editStudentThunk = (modifiedStudent) => (dispatch) => {
    return dispatch(editStudent(modifiedStudent));
};

export const removeStudentThunk = (id) => (dispatch) => {
    return dispatch(removeStudent(id));
};

export const addStudentThunk = (newStudent) => (dispatch) => {
    return dispatch(addStudent(newStudent));
};
