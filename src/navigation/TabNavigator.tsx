import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen,SettingsScreen  } from '../screens/dashboardModule/screens';

const Tab = createBottomTabNavigator();
const ICON_SIZE = 25;

const TabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
     
       }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "News",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title:"settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
