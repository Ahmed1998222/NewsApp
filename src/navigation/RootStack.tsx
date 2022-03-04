import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SplashNavigator from './SplashStack';

export const RootStack = createStackNavigator<RootRoutes>();


export const RootStackScreen = ({ userToken }: IRootStack) => {

  return <>{true ? <TabNavigator /> : <SplashNavigator />}</>;
};

export enum ERootRoutes {
  splash = 'Splash',
  tab = 'Tab',
}

type RootRoutes = {
  [ERootRoutes.splash]: undefined;
  [ERootRoutes.tab]: undefined;
};

interface IRootStack {
  userToken: string;
  [key: string]: any;
}
