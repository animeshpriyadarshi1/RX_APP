/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class RegisterationScreen extends Component{
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }


    onNavigatorEvent(event) {
      if (event.id === 'tabSelected'){
 this.props.navigator.setTitle({
   title: "Register Screen"// the new title of the screen as appears in the nav bar
 });
      }
    }
  
 
  render() {
   
     console.log("THIS PROPS---", this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Registeration</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
