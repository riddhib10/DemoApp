import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../Screens/HomePage';
import LinkedFacilities from '../Screens/LinkedFacilities';
import ConsentsScreen from '../Screens/ConsentsScreen';
import ScaneAndShearScreen from '../Screens/ScaneAndShearScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = '🏠';
          } else if (route.name === 'LinkedFacilities') {
            iconName = '⚙️';
          } else if (route.name === 'ScaneAndShearScreen') {
            iconName = '⚙️';
          } else if (route.name === 'ConsentsScreen') {
            iconName = '📄';
          }
          return <Text style={{ fontSize: 22, color: focused ? 'tomato' : 'gray' }}>{iconName}</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomePageScreen}  options={{title:"Welcome"}}/>
      <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} />
      <Tab.Screen name="ScaneAndShearScreen" component={ScaneAndShearScreen} />
      <Tab.Screen name="ConsentsScreen" component={ConsentsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
