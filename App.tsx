// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LoginPageScreen from './LoginPage';
// import HomePageScreen from './HomePage';
//
// GoogleSignin.configure({
//   webClientId: '713118837944-5pge6s25s2tj9f9ejcgf9rfdkrh8v8fa.apps.googleusercontent.com',
//   offlineAccess: true,
//   scopes: ['profile', 'email']
// });
//
// const Stack = createStackNavigator();
//
// function App(){
//
// const [user, setUser] = useState<firebase.User | null>(null);
//
// useEffect(() => {
//     loadAdmins();
// }, []);
//
// const logout = async () => {
//     await GoogleSignin.signOut();
//     await AsyncStorage.removeItem('user');
//     setUser(null);
// };
//
//
// const loadAdmins = async () => {
//     const storedUser = await AsyncStorage.getItem('user');
//     if (user) {
//        setUser(JSON.parse(storedUser));
//     }
//     console.log("User Data ",user)
//   };
//
//   const onAuthStateChanged = async (user: firebase.User | null) => {
//  console.log("fatched Data : ",user);
//     if (user) {
//       await AsyncStorage.setItem('user', JSON.stringify(user));
//       setUser(user);
//     }
//   };
//
//   const onGoogleButtonPress = async () => {
//     try {
//       await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       await auth().signInWithCredential(googleCredential);
//       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//           return subscriber;
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('Google sign in cancelled');
//       } else {
//         console.error('Error with Google sign in', error);
//       }
//     }
//   };
//
//   return (
//     <NavigationContainer >
//       <Stack.Navigator >
//         {user ? (
//           <Stack.Screen
//             name="Home"
//             component={HomePageScreen}
//             initialParams={{ user: user ,logout: logout }}
//             options={{ headerShown: false }} />
//         ) : (
//           <Stack.Screen
//             name="Login"
//             options={{ title: 'Login' }}>
//             {() => (
//               <View style={styles.container}>
//                  <GoogleSigninButton
//                     style={styles.button}
//                     size={GoogleSigninButton.Size.Wide}
//                     color={GoogleSigninButton.Color.Dark}
//                     onPress={onGoogleButtonPress} />
//               </View>
//             )}
//           </Stack.Screen>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     width: 250,
//     height: 50,
//   }
// });
// export default App;
import 'react-native-gesture-handler';

import React from 'react';
import AppNavigator from './src/Navigation/AppNavigation';

export default function App() {
  return <AppNavigator />;
  //hello
}