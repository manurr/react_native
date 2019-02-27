import React,{Component} from 'react';
import {
View,
Text,
Picker,
Item
} from 'react-native';


const DropDown = () =>{
    return(
        <View>
         <Picker>
            <Item label={"Java"} value={"java"} />
            <Item label={"JavaScript"} value={"js"} />
         </Picker>
        </View>
        

    );
}

export default DropDown;