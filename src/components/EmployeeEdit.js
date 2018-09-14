import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from "./common";
import EmployeeForm from "./EmployeeForm";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave } from "../actions";
import _ from 'lodash';
import Communications from "react-native-communications";

class EmployeeEdit extends Component {
    // component level state
    state = { showModal: false };

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

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    render() {
        <Card>
            <EmployeeForm></EmployeeForm>
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Save Changes
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress={this.onTextPress.bind(this)}>
                    Text Schedule
                </Button>
            </CardSection>
            <CardSection onPress={() => this.setState({ showModal: !this.state.showModal })}>
                <Button>
                    Fire Employee
                </Button>
            </CardSection>
            {/* Must be triggered once fire employee is invoked */}
            <Confirm
                visible={this.state.showModal}
            >
                Are you sure you want to delete this?
            </Confirm>
        </Card >
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(null, { employeeUpdate, employeeSave })(EmployeeEdit);
