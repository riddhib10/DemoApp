import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {signInWithGoogle} from './src/services/authService'

interface Props {
  onGoogleButtonPress: () => void;
}

const GoogleSignInButton: React.FC<Props> = ({ onGoogleButtonPress }) => {
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
      />
    </View>
  );
};

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

export default GoogleSignInButton;
