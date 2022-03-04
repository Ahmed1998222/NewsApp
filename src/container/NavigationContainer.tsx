import React from 'react';

// main navigation components from react-navigation
import {NavigationContainer} from '@react-navigation/native';

// the navigation stack
import {RootStackScreen} from '../navigation';

export const NavigateContainer = () => (
  <NavigationContainer>
    <RootStackScreen userToken="" />
  </NavigationContainer>
);
