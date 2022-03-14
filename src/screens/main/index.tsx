/* eslint-disable require-jsdoc */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import {MainBottomTabParamList} from './MainBottomTabParams';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TVScreen from '../tv/TvScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'TV':
              iconName = 'tv-outline';
              break;
            default:
              iconName = 'home';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="Home">
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="TV"
        component={TVScreen}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;
