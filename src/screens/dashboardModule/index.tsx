import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { DetailsNewsScreen, HomeScreen } from './screens';
import { DashboardModuleRoutes, EDashboardModuleRoutes } from './navigation';
import TabNavigator from '../../navigation/TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const DashboardStack = createStackNavigator<DashboardModuleRoutes>();
export const DashboardStackScreens = () => (
  <DashboardStack.Navigator initialRouteName={EDashboardModuleRoutes.Home}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <DashboardStack.Screen name={EDashboardModuleRoutes.Home} component={HomeScreen} />


    <DashboardStack.Screen name={EDashboardModuleRoutes.DetailsNews} component={DetailsNewsScreen} />



  </DashboardStack.Navigator>
);




