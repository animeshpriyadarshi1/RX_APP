/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
    import {
      submittUserDetails
    } from '../redux/action/userAction'
  import {
    connect
  } from 'react-redux';




  class RegisterationScreen extends Component {
  constructor(props) {
    super(props);
     this.state = {
       userFromobj: {
         FName: "",
         LName: "",
         Contact: "",
         Address:"",
         City: "",
         Zip: "",
         Country:""
         
       }
     };
     this.updateInputValue = this.updateInputValue.bind(this);
     this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  updateInputValue(type,e) {
    let userFromobj = Object.assign({}, this.state.userFromobj); //create copy of object
    userFromobj[type] = e; //updating value
    this.setState({
      userFromobj
    });
  }


  onNavigatorEvent(event) {
    if (event.id === 'tabSelected') {
      this.props.navigator.setTitle({
        title: 'Register Screen'// the new title of the screen as appears in the nav bar
      });
    }
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <FormLabel> First Name </FormLabel>
        < FormInput style = {{width: 250,height: 50}}
        onChangeText = {(e) => this.updateInputValue("FName",e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> Last Name </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("LName", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> Contact Number </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Contact", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> Address </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Address", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> City </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("City", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> Postal Code </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Zip", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>

        <FormLabel> Country </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Country", e)}
        />
        <FormValidationMessage > {'This field is required'} </FormValidationMessage>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const mapStateToProps = state => ({
  isError: state.User.registerationError,
 
})

const mapDispatchToProps = {
      submittUserDetails

}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterationScreen)