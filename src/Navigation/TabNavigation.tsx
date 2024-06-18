// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePageScreen from '../Screens/HomePage';
// import LinkedFacilities from '../Screens/LinkedFacilities';
// import ConsentsScreen from '../Screens/ConsentsScreen';
//
// const Tab = createBottomTabNavigator();
//
// function TabNavigation() {
//
//
//
//   return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'SignIn') {
//               return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>🏠</Text>;
//             } else if (route.name === 'Home') {
//               return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>⚙️</Text>;
//             }else if (route.name === 'LinkedFacilities') {
//               return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>⚙️</Text>;
//             }else if (route.name === 'ConsentsScreen') {
//               return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>⚙️</Text>;
//             }
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: [
//             {
//               display: 'flex'
//             },
//             null
//           ]
//         })}>
//         <Tab.Screen name="Home" component={HomePageScreen} />
//         <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} />
//         <Tab.Screen name="ConsentsScreen" component={ConsentsScreen} />
//
//       </Tab.Navigator>
//   );
// }
//
// export default TabNavigation;


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePageScreen from '../Screens/HomePage';
// import LinkedFacilities from '../Screens/LinkedFacilities';
// import ConsentsScreen from '../Screens/ConsentsScreen';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
//
// const Tab = createBottomTabNavigator();
//
// function TabNavigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = '🏠';
//           } else if (route.name === 'LinkedFacilities') {
//             iconName = '⚙️';
//           } else if (route.name === 'ConsentsScreen') {
//             iconName = '⚙️';
//           }
//           return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>{iconName}</Text>;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomePageScreen} />
//       <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} />
//       <Tab.Screen name="ConsentsScreen" component={ConsentsScreen} />
//     </Tab.Navigator>
//   );
// }
//
// export default TabNavigation;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../Screens/HomePage';
import LinkedFacilities from '../Screens/LinkedFacilities';
import ConsentsScreen from '../Screens/ConsentsScreen';
import ScaneAndShearScreen from '../Screens/ScaneAndShearScreen'
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomePage') {
            return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>🏠</Text>;
          } else if (route.name === 'LinkedFacilities') {
            return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>⚙️</Text>;
          } else if (route.name === 'ScaneAndShearScreen') {
            return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>⚙️</Text>;
          } else if (route.name === 'ConsentsScreen') {
            return <Text style={{ fontSize: size, color: focused ? 'tomato' : 'gray' }}>📄</Text>;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })
      }>

      <Tab.Screen name="HomePage" component={HomePageScreen} />
      <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} />
      <Tab.Screen name="ScaneAndShearScreen" component={ScaneAndShearScreen} />
      <Tab.Screen name="ConsentsScreen" component={ConsentsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;

