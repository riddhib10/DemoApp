import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signInWithGoogle, getCurrentUser as fetchCurrentUser } from '../services/authService';


// interface User {
//   uid: string;
//   email: string | null;
//   displayName: string | null;
//   photoURL: string | null;
// }
interface Props {
  navigation: any;
}

function LoginPage({ navigation }: Props) {

  const [user, setUser] = useState('');

  useEffect(() => {
    const loadUser = async () => {
        const currentUser = await fetchCurrentUser();
        if (currentUser) {
         await setUser(currentUser);
          navigation.navigate('HomePage');
        } else {
          console.log('No user found!');
        }
    };
    loadUser();
  }, [user]);

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
          } catch (error) {
            console.error('Error signing in:', error);
          }
        }}/>
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
