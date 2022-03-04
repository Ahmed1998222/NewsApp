import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {   SettingsScreen  } from './screens';
import { ConfigModuleRoutes, EConfigModuleRoutes, } from './navigation';
 
export const ConfigStack = createStackNavigator<ConfigModuleRoutes>();
export const ConfigStackScreens = () => (
  <ConfigStack.Navigator initialRouteName={EConfigModuleRoutes.Settings}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <ConfigStack.Screen name={EConfigModuleRoutes.Settings} component={SettingsScreen} />

  </ConfigStack.Navigator>
);




