import {Navigation} from 'react-native-navigation';
import registerScreens from './navScreen';
import {Platform} from 'react-native'

registerScreens();

// start the app
Platform.OS==='ios'? Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'LoginScreen',
      icon: require('../assets/icons/icons8-customer-24.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Login Screen'
    },
    {
      label: 'Home',
      screen: 'HomeScreen', // this is a registered name for a screen
      icon: require('../assets/icons/icons8-home-24.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Home Screen'
    },
    {
      label: 'Details',
      screen: 'DetailsSreen', // this is a registered name for a screen
      icon: require('../assets/icons/icons8-details-24.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Details Screen'
    }
  ]
})
: Navigation.startSingleScreenApp({
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
