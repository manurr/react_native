import React, {Component} from 'react';
import Buttonclass from '../common/Button';

import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

type Props = {};
export default class OTP extends Component<Props> {

  static navigationOptions = {
      header: null,
    };

  render() {
    return (
      <View style={styles.mainContainer}>

      <Text style={styles.header}>Enter OTP</Text>

      <TextInput style={styles.input} 
        placeholder="Enter your OTP"
        underlineColorAndroid={'transparent'}
      />

      <Buttonclass
        text="Verify OTP"
        onPress={() => this.props.navigation.navigate('Login')}
              
      />

      <Buttonclass
        text="Resend OTP"
        onPress={() => this.props.navigation.navigate('Login')}
              
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9F7F8',
    paddingLeft: 30,
    paddingRight: 30,
    padding:30
  },

  header: {
    textAlign:'center',
    fontSize: 30,
    color:'#030000',
    paddingBottom: 10,
    marginBottom: 40
  },

  input:{
    height: 43,
    fontSize: 16,
    backgroundColor:'rgba(255,255,255,0.9)',
    marginBottom:25,
    color:'#030000',
    paddingHorizontal:10
  },


});