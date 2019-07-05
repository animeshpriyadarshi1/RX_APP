/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Picker,
  Button
} from 'react-native';
import {
  FormLabel,
  FormInput
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
       userObjectData: {
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
    let userObjectData = Object.assign({}, this.state.userObjectData); //create copy of object
    userObjectData[type] = e; //updating value
    this.setState({
      userObjectData
    });
  }


  onNavigatorEvent(event) {
    if (event.id === 'tabSelected') {
      this.props.navigator.setTitle({
        title: 'Register Screen'// the new title of the screen as appears in the nav bar
      });
    }
   }

   showAlert(p){
     alert
   }


  render() {
    return (
      <ScrollView style={styles.container}>
        <FormLabel> First Name </FormLabel>
        < FormInput style = {{width: 250,height: 50}}
        onChangeText = {(e) => this.updateInputValue("FName",e)}
        />
        <FormLabel> Last Name </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("LName", e)}
        />

        <FormLabel> Contact Number </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Contact", e)}
        />

        <FormLabel> Address </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Address", e)}
        />

        <FormLabel> City </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("City", e)}
        />

        <FormLabel> Postal Code </FormLabel>
        < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Zip", e)}
        />

        <FormLabel> Country </FormLabel>
         < FormInput style={{width: 250, height: 50}} 
          onChangeText={(e) => this.updateInputValue("Country", e)}
        />
        {/* <Picker selectedValue={this.state.userObjectData.Country} 
        onValueChange={(e) => this.updateInputValue("Country", e)}>
          <Picker.Item label="India" value="India" />
          <Picker.Item label="US" value="US" />
          <Picker.Item label="Germany" value="Germany" />
        </Picker> */}

        < Button title = 'BUTTON'
        onPress = {()=>this.props.submittUserDetails(this.state.userObjectData)}
        />
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
  details: state.User.userDetails
 
})

const mapDispatchToProps = {
      submittUserDetails

}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterationScreen)