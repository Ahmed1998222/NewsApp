import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardStackScreens } from '../screens/dashboardModule';
 
// Root Stack
export const MainStack = createStackNavigator<TMainRoutes>();
export const MainStackScreens = ({ }: IMainStack) => (
  <MainStack.Navigator>
    <MainStack.Screen
      name={EMainRoutes.Dashboard}
      component={DashboardStackScreens}
    /> 

  </MainStack.Navigator>
);

export enum EMainRoutes {
  Dashboard = 'Dashboard',
 }

type TMainRoutes = {
  [EMainRoutes.Dashboard]: undefined;
 };

interface IMainStack {
  [key: string]: any;

}
