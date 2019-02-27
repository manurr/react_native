import React, { Component } from "react";
import { Button, Text,StyleSheet,ScrollView, View, Image, TouchableOpacity,FlatList,AsyncStorage } from "react-native";


import {getAllServices} from './services/ApiServices'



export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    
      categoryTypes: [],
      jwt_token:''

    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }
  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@jwt_token:key');
      this.setState({jwt_token:value})
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }
  componentDidMount() 
  {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    //this.getKey.bind(this)
      AsyncStorage.getItem('@jwt_token:key').then(async(res)=>{
        const val=await res;
        console.warn("get async",val);
        this.setState({jwt_token:val});
         getAllServices('list_category',this.state.jwt_token)
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          categoryTypes: responseJson.data,
        });
      }).catch((error) => {
        console.error(error);
      });
      });
   

  }
  render() {
    //this.state.results.movies is the array you have to iterate
    contents = this.state.categoryTypes.map((cat, i) => {
      //We need to return the corresponding mapping for each item too.
      return (
        //  <Card Style={{ borderRadius: 20, margin:20}}>
        <TouchableOpacity key={i} onPress={() => this.onButtonPress(cat.category_id, item.category_name)}>
          
            <Text style={styles.title}>
              {cat.category_name}
            </Text>
          
        </TouchableOpacity>
        // </Card>
      );
    });
    return (

      // <View style={{flex:1}}>
      <View style={styles.container}>
        <ScrollView >
          {contents}
          {/* refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          >
        {contents} 
        </RefreshControl>
       } */}
        </ScrollView>
      </View>
      // </View>
    );
  }


 
}

const styles = StyleSheet.create({


  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    padding: 20,
  },
});
