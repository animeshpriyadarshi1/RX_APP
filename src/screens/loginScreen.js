/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';



export default class LoginScreen extends Component{
  state={
    initialImage: 'file:///Users/animesh.p/Library/Developer/CoreSimulator/Devices/FDADD8E9-BA0D-473F-8343-402883B4E923/data/Containers/Data/Application/CCA560F6-AB29-4415-ACE5-16719CF7150C/tmp/F3B9E99B-42DF-4AAA-9015-381E3A0B562B.jpg'
  }

  pickImage=()=>{
  ImagePicker.showImagePicker({title:'pick and image'},res=>{
    if(res.didCancel){
      console.log("IMAGE CANCEL")
    } else if(res.error){
      console.log("EROR--",res.error)
    }   else{
  console.log("***", res.uri)
      this.setState({
       
        initialImage:{uri: res.uri}
      })
    }
  })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Login Screen</Text>
        <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{flex:1 }} />
        <Button
          onPress={this.pickImage}
          title="pick image"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
