import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from "./types"
import firebase from "firebase";

// prop is to make it dynamic
// make the prop into email, name etc.
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {

    // Authenticated User
    const { currentUser } = firebase.auth();

    // Satisfying redux thunk requirement
    return (dispatch) => {
        //Access Employee Records under a specific user
        // Backticks ES6
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            // Save to Firebase
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE })
            })
    }

}