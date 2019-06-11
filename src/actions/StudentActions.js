export const EDIT_STUDENT_INFO = "EDIT_STUDENT_INFO";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const ADD_STUDENT = "ADD_STUDENT";

export const editStudentInfo = (modifiedStudent) => {
    return {
        type: EDIT_STUDENT_INFO,
        payload: modifiedStudent
    }
}

export const removeStudent = (studentID) => {
    return {
        type: REMOVE_STUDENT,
        payload: studentID
    }
}

export const addStudent = (newStudent) => {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
}

export const addStudentThunk = (newStudent) => (dispatch) => {
    return dispatch(addStudent(newStudent));
};
