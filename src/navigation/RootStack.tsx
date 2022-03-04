import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackScreens as MainNavigator } from '.';
import SplashNavigator from './SplashStack';

export const RootStack = createStackNavigator<RootRoutes>();


export const RootStackScreen = ({ userToken }: IRootStack) => {

  return <>{true ? <MainNavigator /> : <SplashNavigator />}</>;
};

export enum ERootRoutes {
  splash = 'Splash',
  main = 'Main',
}

type RootRoutes = {
  [ERootRoutes.splash]: undefined;
  [ERootRoutes.main]: undefined;
};

interface IRootStack {
  userToken: string;
  [key: string]: any;
}
