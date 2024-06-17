import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert ,Image} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from '../services/authService';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface Props {
  navigation: any;
  route: RouteProp<{ params: { user: User } }, 'params'>;

}

const HomePage: React.FC<Props> = ({ navigation, route }) => {
  const { uid, email, displayName, photoURL } = route.params;

useEffect(() => {
console.log("Home Page : ",displayName);
},[]);


  const handleLogout = async () => {
    Alert.alert('Log Out','Are you sure you want to log out?',
      [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: async () => {
            try {
//               await GoogleSignin.signOut();
//               await AsyncStorage.removeItem('user');
//               await logout();
              await signOut();
//               navigation.navigate('LoginPage');
                navigation.goBack();
              Alert.alert('Logged Out', 'You have been logged out successfully.');
            } catch (error) {
              Alert.alert('Error', 'An error occurred while logging out.');
            }
          }
        }
      ],
      { cancelable: false }
    );
};

 return (
     <View style={styles.container}>
       <Text style={styles.userInfoText}>Welcome to Home Page!</Text>
       <View style={[styles.imageContainer, { alignItems: 'center' }]}>
         <Image source={{ uri: photoURL }} style={styles.image} />
       </View>
       <Text style={[styles.userInfoText, { textAlign: 'center' }]}>Hello {displayName}!</Text>

       <View style={styles.infoContainer}>
         <Text style={styles.text}>Email Id :</Text>
         <Text style={styles.text}>{email}</Text>
       </View>

       <View style={styles.infoContainer}>
         <Text style={styles.text}>User UID :</Text>
         <Text style={styles.text}>{uid}</Text>
       </View>
     </View>

   );
 };

 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#ffffff',
     padding: 16,
     borderRadius: 8,
     shadowColor: '#000000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.3,
     shadowRadius: 4,
     elevation: 5,
     margin: 16,
   },
   infoContainer: {
     marginVertical: 8,
   },
   text: {
     fontSize: 16,
     color: '#000000',
     textAlign: 'left',
   },
   image: {
     width: 100,
     height: 100,
     borderRadius: 30,
   },
   imageContainer: {
     marginVertical: 20,
   },
   userInfoText: {
     fontSize: 18,
     fontWeight: 'bold',
     textAlign: 'center',
     marginBottom: 10,
   },
 });

export default HomePage;
