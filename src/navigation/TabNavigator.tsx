import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DashboardStackScreens } from '../screens/dashboardModule';
import { ConfigStackScreens } from '../screens/configModule';
import { EDashboardModuleRoutes } from '../screens/dashboardModule/navigation/';
import { EConfigModuleRoutes } from '../screens/configModule/navigation';
import { useSelector } from 'react-redux';
import theme from '../assets/theme/theme';
import { selectIsDark } from '../store/slices/themSlice';

const Tab = createBottomTabNavigator();
const ICON_SIZE = 25;

const TabNavigator = () => {
  const isDark = useSelector(selectIsDark);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark
            ? theme.colors.bottomBarBackgrounds.dark
            : theme.colors.bottomBarBackgrounds.light,
        },
        tabBarActiveTintColor: isDark
          ? theme.colors.white
          : theme.colors.lightBlue,
      }}>
      <Tab.Screen
        name={EDashboardModuleRoutes.Home}
        component={DashboardStackScreens}
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
        name={EConfigModuleRoutes.Settings}
        component={ConfigStackScreens}
        options={{
          title: "settings",
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
