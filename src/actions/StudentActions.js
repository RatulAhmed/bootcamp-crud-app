export function editStudentInfo(modifiedStudent) {
    return {
        type: "EDIT_STUDENT_INFO",
        payload: modifiedStudent
    }
}

export function removeStudent(studentID) {
    return {
        type: "REMOVE_STUDENT",
        payload: studentID
    }
}

export function addStudent(newStudent) {
    return{
        type: "ADD_STUDENT",
        payload: newStudent
    }
}
