import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, CardSection, Input, Button } from "./common";

class EmployeeList extends Component {
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
        <Card>
          <CardSection>
            <Input
              label="Name"
              placholder="Jane"
            ></Input>
          </CardSection>
          <CardSection>
            <Input
              label="Phone"
              placholder="555555"
            ></Input>
          </CardSection>
          <Card>
            <Button>
              Create
            </Button>
          </Card>
        </Card>
      </View>
    );
  }
}

export default EmployeeList;
