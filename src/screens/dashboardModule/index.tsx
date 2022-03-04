import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { DetailsNewsScreen, SettingsScreen, HomeScreen } from './screens';
import { DashboardModuleRoutes, EdashboardModuleRoutes, } from './navigation';
import TabNavigator from '../../navigation/TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const DashboardStack = createStackNavigator<DashboardModuleRoutes>();
export const DashboardStackScreens = () => (
  <DashboardStack.Navigator initialRouteName={EdashboardModuleRoutes.Home}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <DashboardStack.Screen name={EdashboardModuleRoutes.DetailsNews} component={DetailsNewsScreen} />
    
    

  </DashboardStack.Navigator>
);




