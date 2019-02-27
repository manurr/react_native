import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";

import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";
import OTP from "./components/OTP";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./common/Navbar";
import Category from "./components/Category";

const MainNavigator = createStackNavigator({

  Login: {
    screen: Login
  },

  RegistrationForm: {
    screen: RegistrationForm
  },

  OTP: {
    screen: OTP
  },

  ForgotPassword: {
    screen: ForgotPassword
  },

  Navbar: {
    screen: Navbar
  },

  Category: {
    screen: Category
  }
});

const RootStack = createAppContainer(MainNavigator);

export default RootStack;


