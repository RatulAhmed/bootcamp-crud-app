
export const ADD_CAMPUS = "ADD_CAMPUS"
export function addCampus(newCampus) {
    return {
        type: "ADD_CAMPUS",
        payload: newCampus
    }
}

export const EDIT_CAMPUS = "EDIT_CAMPUS"
export function editCampus(modifiedCampus) {
    return {
        type: "EDIT_CAMPUS",
        payload: modifiedCampus
    }
}

export const REMOVE_CAMPUS = "REMOVE_CAMPUS"
export function removeCampus(campusID) {
    return{
        type: "REMOVE_CAMPUS",
        payload: campusID
    }
}
