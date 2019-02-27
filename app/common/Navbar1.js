import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Picker
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import DropDown from './Picker';
import Drawer from './Drawer';

class Navbar extends Component {
    state = {
        isShow:true
    };

getPicker(){
  if(this.state.isShow){
          return <Drawer />;
  }
    else
          return(
            <DropDown />
          );
   
    
}
       
   
   
    
    render(){
        return (
            <View style={styles.containerNavbar}>
                <TouchableOpacity onPress={this.getPicker.bind(this)}>
                    <Icon name="bars" size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.navbarTitle}>Hani</Text>
                  <TouchableOpacity>
                  <Icon name="ellipsis-v" size={25} color="#fff" />
                </TouchableOpacity>
                <Icon name="search" size={25} color="#fff" />
              
              
                
            </View>
        )
    }

   

}

const styles = StyleSheet.create({
    containerNavbar: {
        backgroundColor: '#C547F1',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between'
        },
    navbarTitle: {
        fontSize: 20,
        color: '#fff'
    }
})

export { Navbar };