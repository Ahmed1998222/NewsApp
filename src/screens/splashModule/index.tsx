import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SplashScreen, OnBoardingScreen } from './screens';
import { splashModuleRoutes, EsplashModuleRoutes, } from './navigation';

export const SplashStack = createStackNavigator<splashModuleRoutes>();
export const SplashStackScreens = () => (
  <SplashStack.Navigator initialRouteName={EsplashModuleRoutes.Splash}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SplashStack.Screen name={EsplashModuleRoutes.Splash} component={SplashScreen} />

    <SplashStack.Screen
      name={EsplashModuleRoutes.OnBoarding}
      component={OnBoardingScreen}
    />

  </SplashStack.Navigator>
);




