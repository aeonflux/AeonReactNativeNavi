import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions"
import { Card, CardSection, Input, Button } from "./common";

class EmployeeCreate extends Component {
    static navigationOptions = ({ screenProps }) => ({

        title: "Employee Creation",
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
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="Name"
                            placholder="Jane"
                            value={this.props.name}
                            onChangeText={value => this.props.employeeUpdate({ prop: "name", value })}
                        ></Input>
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Phone"
                            placholder="555555"
                            value={this.props.phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: "phone", value })}
                        ></Input>
                    </CardSection>
                    <CardSection style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}> Shift </Text>
                        <Picker
                            selectedValuee={this.props.shift}
                            style={{ flex: 1 }}
                            onValueChange={value => this.props.employeeUpdate({ prop: "shift", value })}
                        >
                            <Picker.Item label="Monday" value="Monday"
                            ></Picker.Item>
                            <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                            <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
                            <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                            <Picker.Item label="Friday" value="Friday"></Picker.Item>
                            <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                            <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)} >
                            Create
                      </Button>
                    </CardSection>
                </Card>
            </View >
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStatetoProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStatetoProps, { employeeUpdate, employeeCreate })(EmployeeCreate);