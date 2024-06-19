import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native'; // Import SafeAreaView
import HomePageScreen from '../Screens/HomePage';
import LinkedFacilities from '../Screens/LinkedFacilities';
import ConsentsScreen from '../Screens/ConsentsScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomePage') {
              iconName = '🏠';
            } else if (route.name === 'LinkedFacilities') {
              iconName = '🔗';
            } else if (route.name === 'ConsentsScreen') {
              iconName = '📄';
            }
            return <Text style={{ fontSize: 22, color: focused ? 'tomato' : 'gray' }}>{iconName}</Text>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} >
        <Tab.Screen name="HomePage" component={HomePageScreen} options={{ title: 'Welcome' }} />
        <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} options={{ title: 'Linked Facilities' }} />
        <Tab.Screen name="ConsentsScreen" component={ConsentsScreen} options={{ title: 'Consents' }} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigation;
