// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginPageScreen from '../Screens/LoginPage';
// import HomePageScreen from '../Screens/HomePage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//
// const Stack = createStackNavigator();
//
// function App(){
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginPage">
//         <Stack.Screen
//           name="LoginPage"
//           component={LoginPageScreen}
//           options={{ headerShown: false }}/>
//         <Stack.Screen
//           name="HomePage"
//           component={HomePageScreen}
//           options={{ title: 'Home Page'}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;


import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPageScreen from '../Screens/LoginPage';
import HomePageScreen from '../Screens/HomePage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from '../Navigation/TabNavigation';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "HomePage" : "LoginPage"}>
        <Stack.Screen
          name="LoginPage"
          component={LoginPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
