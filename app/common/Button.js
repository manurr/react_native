import React, { Component } from "react";

import {
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  Button
} from "react-native";

export default class Buttonclass extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btnContainer}>
            <Text style={styles.btn}>{this.props.text.toUpperCase()}</Text>
        </View>
     
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
 btnContainer:{
	        backgroundColor:'#08B3AB',
	        paddingVertical:15,
	        borderRadius:20,
	        marginBottom: 20

	    },
	    btn:{
	        textAlign:'center',
	        color:'#fff',
	        fontWeight:'900'
	        
	    }
});
