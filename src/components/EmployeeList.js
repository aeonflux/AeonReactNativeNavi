import React, { Component } from "react";
import { connect } from 'react-redux';
import { employeesFetch } from "../actions";


import { ListView, View, Text, Button } from "react-native";

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


  // before screen renders
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props)
  }

  // component will rerender if a new set of props is to be received
  componentWillReceiveProps(nextProps) {
    //nextProps
    //next set of props thta this component will be rendered with
    //this.props is still the old set of props

    this.createDataSource(nextProps)

  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees);
  }


  render() {
    return (
      <View>
        <Text> Employee List Here </Text>
      </View>
    );
  }
}

export default connect(null, employeesFetch)(EmployeeList);
