import React,{Component} from 'react';
import {
Text,
View,
Image,
TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Sidebar = () => {
    return(
         <View style={{flex: 1, backgroundColor: '#fff',marginTop:50}}>
        <View style={{
            backgroundColor:'#27A69D',
            justifyContent:'space-between',
            flexDirection:'row',
            height:110,
            paddingRight:100,
            paddingLeft:20
            }}>
            <View style={{justifyContent:'center'}}>
            </View>
            <View style={{justifyContent:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>User</Text>
            <Text style={{color:'#000'}}>user@gmail.com</Text>
            </View>
            
        </View>
        <View style={{margin:20,flex:1,flexDirection:'row'}}>
            <View>
              <Text> 
                <Icon name="home" size={25} color='#5F5E5D'/>
             </Text>
              <Text style={styles.iconStyle}>
                <Icon name="search" size={25} color='#5F5E5D'/>
              </Text>
              <Text style={styles.iconStyle}>
                <Icon name="camera" size={25} color='#F97D2D'/>
              </Text>
              <Text style={styles.iconStyle}>
                 <Icon name="dollar" size={25} color='#5F5E5D'/>
              </Text>
              <Text style={styles.iconStyle}>
                   <Icon name="car" size={25} color='#5F5E5D'/>
              </Text>
              <Text style={styles.iconStyle}>
                  <Icon name="upload" size={25} color='#5F5E5D'/>
              </Text>
              <Text style={styles.iconStyle}>
                  <Icon name="book" size={25} color='#5F5E5D'/>
              </Text>
          </View>
            <View style={{marginLeft:40}}>
                <Text style={{fontWeight:'500', color:'#000'}}>Home</Text>
                <Text style={styles.textStyle}>Browse Offers</Text>
                <Text style={{paddingTop:40,color:'#F97D2D'}}>Submit Invoice</Text>
                <Text style={styles.textStyle}>My Coins</Text>
                <Text style={styles.textStyle}>My Favourite</Text>
                <Text style={styles.textStyle}>Setting</Text>
                <Text style={styles.textStyle}>Help</Text>
            </View>
        </View>
        

    </View>     
    );
}



const styles = {
    iconStyle:{
        paddingTop:30
    },
    textStyle:{
       paddingTop:37,
       fontWeight:'400',
       color:'#000'

    }
}
   
export default Sidebar;