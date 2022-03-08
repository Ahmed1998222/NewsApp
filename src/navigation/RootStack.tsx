import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SplashNavigator from './SplashStack';

export const RootStack = createStackNavigator<RootRoutes>();


export const RootStackScreen = ({ userToken }: IRootStack) => {

  const [isSplashOn, setIsSplashOn] = useState(true)
  useEffect(() => {


    const time = setTimeout(() => { setIsSplashOn(false) }, 3500)
    return () => clearTimeout(time)
  }, [])
  return <>{isSplashOn ? <SplashNavigator /> : <TabNavigator />}</>;
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
