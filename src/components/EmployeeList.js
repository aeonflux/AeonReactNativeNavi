import React, { Component } from "react";
import { View, Text } from "react-native";

class EmployeeList extends Component {
  static navigationOptions = {
    title: "Employee List",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View>
        <Text> Employee 1</Text>
        <Text> Employee 2</Text>
        <Text> Employee 3</Text>
        <Text> Employee 4</Text>
      </View>
    );
  }
}

export default EmployeeList;
