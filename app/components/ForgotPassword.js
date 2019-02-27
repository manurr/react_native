import React, {Component} from 'react';
import Buttonclass from '../common/Button';
import { postcustomer} from './services/ApiServices';

import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  Alert
  
} from 'react-native';

type Props = {};
export default class ForgotPassword extends Component<Props> {
  constructor(){
      super();
      this.state={
      email:'',
      
      }

    }
    
   updateValue(text,field){
    if(field=='email'){
      this.setState({
        email:text
      })
    }
    
    
   }

   forgotpass(){
    var customer_data={}
    customer_data.email=this.state.email
    
    
    console.warn(customer_data);
    
    postcustomer('customer_forgotpassword',customer_data)
     .then((response) => {
                Alert.alert("Status:" + response.msg);
            })
            .catch((error) => {
                console.error(error);
            });
   
    console.warn('getting')
   }
  
  static navigationOptions = {
      header: null,
    };

  render() {
    return (
      <View style={styles.mainContainer}>

      <Text style={styles.header}>Enter your Email</Text>

      <TextInput style={styles.input} 
        placeholder="Email"
        underlineColorAndroid={'transparent'}
        onChangeText={(text) => this.updateValue(text,'email')}
      />

      <Buttonclass
        text="Send"
        onPress={() => this.forgotpass()}
              
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
    textAlign:'left',
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