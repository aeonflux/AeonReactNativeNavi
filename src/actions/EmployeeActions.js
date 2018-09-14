import {
    EMPLOYEE_UPDATE
} from "./types"
// prop is to make it dynamic
// make the prop into email, name etc.
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}