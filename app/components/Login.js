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
  Alert,
  AsyncStorage
  } from 'react-native';

type Props = {};


export default class Login extends Component<Props> {
    constructor(){
      super();
      this.state={
      username:'',
      password:''
      }

    }

    
   updateValue(text,field){
    if(field=='username'){
      this.setState({
        username:text
      })
    }
    else if(field=='password'){
      this.setState({
        password:text
      })
    }
    
   }
     // async token(jwt){
      // console.warn("inside async",jwt);
      // try {
        /*console.log('getin');
       await AsyncStorage.setItem('@jwt_token:key', jwt);
       console.log('inside try');
      } catch (error) {
      console.log("Error saving data" + error);
       }
  }
*/
   setKey=(value)=>{
    AsyncStorage.setItem('@jwt_token:key', value);
       console.warn('inside try');

   }
   login(){
    var customer_data={}
    customer_data.username=this.state.username
    customer_data.password=this.state.password
    
    console.warn(customer_data);
    
    postcustomer('customer_login',customer_data)
     .then((response) => {
                Alert.alert("Status:" + response.msgkey+response.data.jwt_token);
                jwt_token=response.data.jwt_token;
                this.setKey(jwt_token);

               console.warn("jwt"+jwt_token);
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
        
        <Text style={styles.header}>Login</Text>

        <TextInput style={styles.input} 
          placeholder="Username" 
          underlineColorAndroid={'transparent'} 
          onChangeText={(text) => this.updateValue(text,'username')}
        />

        <TextInput style={styles.input} 
          placeholder="password" 
          secureTextEntry={true} 
          underlineColorAndroid={'transparent'} 
          onChangeText={(text) => this.updateValue(text,'password')} 
          />

        <Text style={styles.forgot} 
          onPress={() => this.props.navigation.navigate('Category')}>Forgot Password ?
        </Text>

        <Buttonclass text="Log in"
          onPress={() => this.login()}
        />

        <Text style={styles.account}
          onPress={() => this.props.navigation.navigate('RegistrationForm')}> Don't have an account ?                                                                                                                                                                                                                                                                                                                                                                                                                  
        </Text>

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
    marginBottom:15,
    color:'#030000',
    paddingHorizontal:10
  },

  forgot: {
    textAlign:'left',
    fontSize: 15,
    color: 'black',
    marginBottom: 20
  },
      
  account: {
    textAlign:'center',
    fontSize: 15,
    color: 'black',
    marginTop:40
  }

});



