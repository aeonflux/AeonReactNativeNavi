import React, { Component } from "react";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";

import LoginForm from "./components/LoginForm";
import reduxThunk from "redux-thunk";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBo1BO83_Damdn4Np6ZHbPSBdo3Aqy5wkk",
      authDomain: "aeonreactnativenavi.firebaseapp.com",
      databaseURL: "https://aeonreactnativenavi.firebaseio.com",
      projectId: "aeonreactnativenavi",
      storageBucket: "aeonre actnativenavi.appspot.com",
      messagingSenderId: "662670734175"
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    //arg2 - initial state
    //arg3 - store enhancer
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
