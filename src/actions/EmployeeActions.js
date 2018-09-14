import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
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

export const employeesFetch = () => {
    // Authenticated User
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            // Fetch Data from Database
            // Watches the data automatically
            .on('value', snapshot => {
                // snapshot = object that describes the data
                //snapshot.val() = actual data
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            })

    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    // Specifying uid = Update Existing Record

    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/$(currentUser.uid)/employees/$(uid)`)
            .set({ name, phone, shift })
            .then(() => {
                // Reset Form
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
            })
    }
}