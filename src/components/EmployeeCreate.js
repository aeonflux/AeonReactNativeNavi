import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions"
import { Card, CardSection, Button } from "./common";
import employeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
    static navigationOptions = ({ screenProps }) => ({

        title: "Create Employee",
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

    onButtonPress() {
        //action creator

        const { name, phone, shift } = this.props;

        // Form Default Values
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })

        // Navigate Back to EmployeeList 
        this.props.navigation.navigate("EmployeeList");
    }






    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}></EmployeeForm>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Create
                      </Button>
                </CardSection>
            </Card>
        )
    }
}



const mapStatetoProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStatetoProps, { employeeUpdate, employeeCreate })(EmployeeCreate);

