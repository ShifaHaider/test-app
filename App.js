import React from 'react';
import { View, Text, StatusBar, I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
import Routeskey from './src/navigation/routeskey';

import Splash from "./src/components/Splash/Splash"


// I18nManager.forceRTL(false)


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="black" barStyle="light-content" /> */}
      <NavigationContainer >
        <Routes initialRouteName={Routeskey.SPLASH} />
      </NavigationContainer>
    </View>
  )
}

export default App;