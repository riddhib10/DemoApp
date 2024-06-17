import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
  user: firebase.User | null;
}

const HomePage: React.FC<Props> = ({ navigation, route }) => {
  const { user , logout } = route.params;


  const handleLogout = async () => {
    Alert.alert('Log Out','Are you sure you want to log out?',
      [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: async () => {
            try {
              await GoogleSignin.signOut();
              await AsyncStorage.removeItem('user');
              await logout();
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
      <Text>Welcome</Text>
      <Text style={styles.email}>{user}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomePage;
