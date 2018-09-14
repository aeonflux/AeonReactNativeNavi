import React, { Component } from "react";
import { connect } from 'react-redux';
import { employeesFetch } from "../actions";


import { View, Text, Button } from "react-native";

class EmployeeList extends Component {

  // before screen renders
  componentWillMount() {
    this.props.employeesFetch();
  }

  static navigationOptions = ({ navigation, screenProps }) => ({

    title: "Employee List",
    headerRight: (
      <Button
        onPress={() => navigation.navigate("EmployeeCreate")}
        title="Add"
        color="#fff"
      />
    ),
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  });

  render() {
    return (
      <View>
        <Text> Employee List Here </Text>
      </View>
    );
  }
}

export default connect(null, employeesFetch)(EmployeeList);
