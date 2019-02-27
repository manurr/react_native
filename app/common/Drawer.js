import React,{Component} from 'react';
import {
Text,
View,
Image,
DrawerLayoutAndroid,
TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const  Drawer = () => {
  return(
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => <Sidebar/> }
      >
    </DrawerLayoutAndroid>
    );
 }
 



  


export default Drawer;