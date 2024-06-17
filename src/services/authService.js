import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId: '713118837944-5pge6s25s2tj9f9ejcgf9rfdkrh8v8fa.apps.googleusercontent.com',
  offlineAccess: true,
  scopes: ['profile', 'email']
});

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const user = auth().currentUser;
    console.log(user);
    if (user) {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Failed to authenticate');
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Google sign in cancelled');
    } else {
      console.error('Error with Google sign in', error);
    }
    throw error;
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('user');
    await auth().signOut();
  } catch (error) {
    console.error('Error signing out', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error getting current user', error);
    throw error;
  }
};
