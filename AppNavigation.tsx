import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPageScreen from './LoginPage';
import HomePageScreen from './HomePage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{ title: 'Home Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
