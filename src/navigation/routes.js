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
      label: 'Registeration Screen',
      screen: 'RegisterationScreen', // this is a registered name for a screen
       icon: require('../assets/icons/icons8-registration-24.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Registeration Screen'
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
    screen: 'HomeScreen',
    title: 'Home Screen',
    navigatorStyle: {
        navBarBackgroundColor: 'red',
        navBarHidden: false,
        navBarTextColor: 'white',
        navBarTextFontSize: 20,
        largeTitle: true, 
        navBarHeight: 40,
        topTabsHeight: 50,
        topBarBorderWidth: 5.5,
        // topTabTextColor: 'black',
         selectedTopTabTextColor:'white',
         selectedTopTabIconColor:'white',
         selectedTopTabIndicatorColor: '#F5FCFF',
         topTabTextColor: 'grey',
         topTabIconColor: 'grey'
    },
    topTabs: [{
        screenId: 'HomeScreen',
        title: 'Home',
        navBarTextColor: 'white',
        icon: require('../assets/icons/icons8-home-24.png'),
      },
      {
        screenId: 'RegisterationScreen', 
        title: 'Register',
        icon: require('../assets/icons/icons8-registration-24.png'),

      },
      {
        screenId: 'DetailsSreen',
        title: 'Details',
        icon: require('../assets/icons/icons8-details-24.png'),
      },
    ]
  },
});
