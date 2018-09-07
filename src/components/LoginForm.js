import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Text } from "react-native";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorMessageStyle}>{this.props.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStatetoProps = ({ auth }) => {
  const { email, password, error } = auth;
  return {
    email,
    password,
    error
  };
};

const styles = {
  errorMessageStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default connect(
  mapStatetoProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
