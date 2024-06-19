import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '../services/authService';


const SignOut = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: async () => {
            try {
              await signOut();
              console.log("call");
              navigation.replace('LoginPage');
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
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Text style={styles.buttonText} >Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});


export default SignOut;
