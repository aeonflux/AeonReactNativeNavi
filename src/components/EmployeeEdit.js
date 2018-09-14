import React, { Component } from 'react';
import { Card, CardSection, Button } from "./common";
import EmployeeForm from "./EmployeeForm";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave } from "../actions";
import _ from 'lodash';

class EmployeeEdit extends Component {
    static navigationOptions = ({ screenProps }) => ({

        title: "Edit Employee",
        headerStyle: {
            backgroundColor: "#f4511e"
        },
        // Disable back button
        headerLeft: null,
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    });

    componentWillMount() {
        //forward employee values to reducer
        // iterate every property and send it to reducer
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        // Save New Data to Firebase
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
        //  Navigate to Employee List Screen
        this.props.navigation.navigate("EmployeeList");
    }

    render() {
        <Card>
            <EmployeeForm></EmployeeForm>
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Save Changes
                </Button>
            </CardSection >
        </Card >
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(null, { employeeUpdate, employeeSave })(EmployeeEdit);
