import {Navigation} from 'react-native-navigation';
import registerScreens from './navScreen';

registerScreens();
Navigation.startSingleScreenApp({
  screen: {
    screen: 'LoginScreen',
    title: 'Root',
    topTabs: [{
      screenId: 'HomeScreen',
      title: 'Home'
    },
    {
      screenId: 'RegisterationScreen',
      title: 'Register'
    },
    {
      screenId: 'DetailsSreen',
      title: 'Details'
    }
    ]
  }

});
