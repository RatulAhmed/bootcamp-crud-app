export function addCampus(newCampus) {
    return {
        type: "ADD_CAMPUS",
        payload: newCampus
    }
}

export function editCampus(modifiedCampus) {
    return {
        type: "EDIT_CAMPUS",
        payload: modifiedCampus
    }
}

export function removeCampus(campusID) {
    return{
        type: "REMOVE_CAMPUS",
        payload: campusID
    }
}
