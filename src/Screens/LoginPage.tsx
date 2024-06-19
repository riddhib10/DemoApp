import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signInWithGoogle, getCurrentUser as fetchCurrentUser } from '../services/authService';

interface Props {
  navigation: any;
}

function LoginPage({ navigation }: Props) {
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await fetchCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        navigation.navigate('Home', { screen: 'HomePage' });
      } else {
        console.log('No user found!');
      }
    };
    loadUser();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            const signedInUser = await signInWithGoogle();
            setUser(signedInUser);
            navigation.navigate('Home');
          } catch (error) {
            console.error('Error signing in:', error);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
  },
});

export default LoginPage;
