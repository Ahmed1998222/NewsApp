import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardStackScreens } from '../screens/dashboardModule';
import TabNavigator from './TabNavigator'
// Root Stack
export const MainStack = createStackNavigator<TMainRoutes>();
export const MainStackScreens = ({ }: IMainStack) => (
  <MainStack.Navigator>
    <MainStack.Screen
      name={EMainRoutes.TabNavigator}
      component={TabNavigator}
    />
    <MainStack.Screen
      name={EMainRoutes.Dashboard}
      component={DashboardStackScreens}
    />
  </MainStack.Navigator>
);

export enum EMainRoutes {
  Dashboard = 'Dashboard',
  TabNavigator = 'TabNavigator'
}

type TMainRoutes = {
  [EMainRoutes.Dashboard]: undefined;
  [EMainRoutes.TabNavigator]: undefined;

};

interface IMainStack {
  [key: string]: any;

}
