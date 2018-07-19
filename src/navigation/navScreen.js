import {Navigation} from 'react-native-navigation';

import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterationScreen from '../screens/registerationScreen';
import DetailsSreen from '../screens/details';

// register all screens of the app (including internal ones)
const registerScreens=() =>{
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('RegisterationScreen', () => RegisterationScreen);
  Navigation.registerComponent('DetailsSreen', () => DetailsSreen);
};

export default registerScreens;

