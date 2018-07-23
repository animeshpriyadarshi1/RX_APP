import {Navigation} from 'react-native-navigation';

import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterationScreen from '../screens/registerationScreen';
import DetailsSreen from '../screens/details';
import store from '../redux/store/store'
import { Provider } from 'react-redux';

// register all screens of the app (including internal ones)
const registerScreens=() =>{
  Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('RegisterationScreen', () => RegisterationScreen, store, Provider);
  Navigation.registerComponent('DetailsSreen', () => DetailsSreen, store, Provider);
};

export default registerScreens;

