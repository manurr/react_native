import React,{Component} from 'react';
import {Alert} from "react-native";
import Buttonclass from '../common/Button';
import { postcustomer} from './services/ApiServices';
import {
View,
Text,
TextInput,
TouchableOpacity
} from 'react-native';

type Props = {};


export default class RegistrationForm extends Component<Props> {
	
  	constructor(){
  		super();
  		this.state={
  		username:'',
  		usernameValidate:true,
  		password:'',
      passwordValidate:true,
  		customer_name:'',
      customer_nameValidate:true,
  		email:'',
      emailValidate:true,
      usertextMessage:'',
      passwordtextMessage:'',
      custnametextMessage:'',
      emailtextMessage:'',
  		}

  	}
  	
   updateValue(text,field){

   	alph=/^[a-zA-Z]+$/
   	if(field=='username'){
   		if(alph.test(text)){
   		this.setState({
   			usernameValidate:true,
   			username:text,
        usertextMessage:''
   		})
    }
   	else{
      
   		this.setState({
   			usernameValidate:false,
        usertextMessage:'username should contain only alphabets',

   			
   		})
      

   	}
   }
   	else if(field=='password'){
      if(text.length>8){
   		this.setState({
        passwordValidate:true,
   			password:text,
        passwordtextMessage:''
   		})
    }
    else{
      this.setState({
      passwordValidate:false,
      passwordtextMessage:'password is less than 8'
      })

    }
   }
   	else if(field=='customer_name'){
      if(text!=''){
   		this.setState({
        customer_nameValidate:true,
   			customer_name:text,
        custnametextMessage:''
   		})
      }
      else{
        this.setState({
        customer_nameValidate:false,
        custnametextMessage:'customer name is empty'
        
      })
      }
   	}
   	else if(field=='email'){
      pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      if(pattern.test(text)){
   		this.setState({
        emailValidate:true,
   			email:text,
        emailtextMessage:''
   		})	
   	}
    else{
      this.setState({
        emailValidate:false,
        emailtextMessage:'please provide a valid email'
        
      })

    }
   }
 }
   register(){
    
   	var customer_data={}
   	customer_data.username=this.state.username
   	customer_data.password=this.state.password
   	customer_data.customer_name=this.state.customer_name
   	customer_data.email=this.state.email
   	console.warn(customer_data);
    
   	postcustomer('customer_signup',customer_data)
   	 .then((response) => {
                Alert.alert("Success:" + response.msgkey);
            })
            .catch((error) => {
                console.error(error);
            });
   
    console.warn('getting')
   
 }
   static navigationOptions = {
    	header: null,
  	};




	render(){
	        return(
	            <View style={styles.mainContainer}>

	             <Text style={styles.header}>Sign Up</Text>
                
                
                
                



	                <TextInput
		                placeholder="Enter your Username"
		                returnKeyType="next"
		                style={[styles.input,!this.state.usernameValidate? styles.error:null]}
		                underlineColorAndroid='transparent'
		                 onChangeText={(text) => this.updateValue(text,'username')}
	               	/>
                  <Text style={styles.errorMsg}>{this.state.usertextMessage}</Text>

	               

	                <TextInput
		                placeholder="Enter your Password"
		                returnKeyType="go"
		                secureTextEntry
		                style={[styles.input,!this.state.passwordValidate? styles.error:null]}
		                underlineColorAndroid='transparent'	
		                 onChangeText={(text) => this.updateValue(text,'password')} 
                     
	                />
                  <Text style={styles.errorMsg}>{this.state.passwordtextMessage}</Text>              
	                <TextInput
		                placeholder="Customer Name"                
		                returnKeyType="go"
		                
		                style={[styles.input,!this.state.customer_nameValidate? styles.error:null]}
		                underlineColorAndroid='transparent'
		                onChangeText={(text) =>this.updateValue(text,'customer_name')}
	                />
                  <Text style={styles.errorMsg}>{this.state.custnametextMessage}</Text>

	                <TextInput
		                placeholder="Enter your Email"    
		                returnKeyType="go"
		                style={[styles.input,!this.state.emailValidate? styles.error:null]}
		                underlineColorAndroid='transparent'
		                onChangeText={(text) => this.updateValue(text,'email')}
		                 
	                />
                  <Text style={styles.errorMsg}>{this.state.emailtextMessage}</Text>


	                <Buttonclass
                  text="Register"
                  onPress={() => this.register()}
                  />
                   
	                <Text style={styles.account} 
          				onPress={() => this.props.navigation.navigate('Login')}>Already have an account?
        			</Text>

	                
       				
       				

	            </View>
	        );
	    }
	}

const styles={
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
	    marginBottom: 20
  	},
  		
	input:{
		height: 43,
    	fontSize: 16,
	    backgroundColor:'rgba(255,255,255,0.9)',
	    marginBottom:5,
	    color:'#030000',
	    paddingHorizontal:10
	        
	},

	account: {
	    textAlign:'left',
	    fontSize: 15,
	    color: 'black',
	    marginTop:10,
	    marginBottom:20
  	},
  	error: {
  		borderWidth:3,
  		borderColor:'red'
  	},
    errorMsg:{
      fontSize: 15,
      color:'red',
      textAlign:'left',
      

      

    }

};
