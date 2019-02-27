
import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import RootStack from "./app/router";

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <RootStack />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9F7F8',
    paddingLeft: 30,
    paddingRight: 30,
    padding:30
  },
});
