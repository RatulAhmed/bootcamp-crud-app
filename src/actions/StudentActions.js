export const EDIT_STUDENT_INFO = "EDIT_STUDENT_INFO";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const ADD_STUDENT = "ADD_STUDENT";

const editStudent = (modifiedStudent) => {
    return {
        type: EDIT_STUDENT_INFO,
        payload: modifiedStudent
    }
};

const removeStudent = (studentID) => {
    return {
        type: REMOVE_STUDENT,
        payload: studentID
    }
};

const addStudent = (newStudent) => {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
};

export const editStudentThunk = () => (dispatch) => {
    return dispatch(editStudent());
};

export const removeStudentThunk = () => (dispatch) => {
    return dispatch(removeStudent());
};

export const addStudentThunk = (newStudent) => (dispatch) => {
    return dispatch(addStudent(newStudent));
};
