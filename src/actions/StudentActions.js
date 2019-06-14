import axios from 'axios';

export const EDIT_STUDENT_INFO = "EDIT_STUDENT_INFO";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const ADD_STUDENT = "ADD_STUDENT";
export const FETCH_STUDENTS = "FETCH_STUDENTS";

const editStudent = (id, modifiedStudent) => {
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

const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
};

export const fetchStudentsThunk = () => (dispatch) => {
    return axios
        .get('http://localhost:5434/api/v1/students')
        .then(res => {console.log(res.data)})
        .then(students => dispatch(fetchStudents(students)))
        .catch(err => console.log(err));
}

export const editStudentThunk = (id, modifiedStudent) => (dispatch) => {
    return axios
        .put(`http://localhost:5434/api/v1/students/${id}`, {modifiedStudent})
        .then(dispatch(editStudent(modifiedStudent)))
        .catch(err => console.log(err))
};

export const removeStudentThunk = (id) => (dispatch) => {
    return axios
        .delete(`http://localhost:5434/api/v1/students/${id}`)
        .then(dispatch(removeStudent(id)))
        .catch(err => console.log(err));
};

export const addStudentThunk = (newStudent) => (dispatch) => {
    return axios
        .post('http://localhost:5434/api/v1/students/', {newStudent})
        .then(res => {console.log(res.data)})
        .then(dispatch(addStudent(newStudent)))
        .catch(err => console.log(err));
};
