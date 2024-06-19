// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
// import { getCurrentUser as fetchCurrentUser } from '../services/authService';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SearchBar } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
//
// const HomePage = ({ navigation, route }) => {
//   const [userData, setUserData] = useState('');
//   const [search, setSearch] = useState('');
//
//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const storedUserData = await AsyncStorage.getItem('user');
//       setUserData(JSON.parse(storedUserData));
//     };
//     checkLoginStatus();
//   }, []);
//
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         { text: 'YES', onPress: () => BackHandler.exitApp() },
//       ]);
//       return true;
//     };
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction
//     );
//     return () => backHandler.remove();
//   }, []);
//
//   return (
//     <View>
//       <View style={styles.container}>
//         <Text style={styles.userInfoText}>Welcome to Home Page!</Text>
//         <View style={[styles.imageContainer, { alignItems: 'center' }]}>
//           <Image
//             source={userData.photoURL ? { uri: userData.photoURL } : ""}
//             style={styles.image}/>
//         </View>
//         <Text style={[styles.userInfoText, { textAlign: 'center' }]}>
//           Hello {userData.displayName}!
//         </Text>
//
//         <View style={styles.infoContainer}>
//           <Text style={styles.text}>Email Id :</Text>
//           <Text style={styles.text}>{userData.email}</Text>
//         </View>
//
//         <View style={styles.infoContainer}>
//           <Text style={styles.text}>User UID :</Text>
//           <Text style={styles.text}>{userData.uid}</Text>
//         </View>
//       </View>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <SearchBar
//           placeholder="Type Here..."
//           onChangeText={setSearch}
//           value={search}
//           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, width: '100%' }}
//           inputContainerStyle={{ backgroundColor: '#e1e1e1', borderRadius: 25 }}
//           inputStyle={{ color: '#000' }}
//           placeholderTextColor="#888"
//           searchIcon={{ size: 24 }}
//           clearIcon={<Icon name="close" size={24} onPress={() => setSearch('')} />}
//         />
//         <Text style={{ marginTop: 20 }}>Search Query: {search}</Text>
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//     margin: 16,
//   },
//   infoContainer: {
//     marginVertical: 8,
//   },
//   text: {
//     fontSize: 16,
//     color: '#000000',
//     textAlign: 'left',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 30,
//   },
//   imageContainer: {
//     marginVertical: 20,
//   },
//   userInfoText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
// });
//
// export default HomePage;



import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, BackHandler } from 'react-native';
import { getCurrentUser as fetchCurrentUser } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({ navigation, route }) => {
  const [userData, setUserData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('user');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          Alert.alert('Action cancelled by user.', 'Please sign in again.');
          navigation.navigate('LoginPage');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load user data.');
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction
    );
    return () => backHandler.remove();
  }, []);

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.userInfoText}>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userInfoText}>Welcome to Home Page!</Text>
        <View style={[styles.imageContainer, { alignItems: 'center' }]}>
          <Image
            source={userData.photoURL ? { uri: userData.photoURL } : null}
            style={styles.image}
          />
        </View>
        <Text style={[styles.userInfoText, { textAlign: 'center' }]}>
          Hello {userData.displayName}!
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.text}>Email Id :</Text>
          <Text style={styles.text}>{userData.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.text}>User UID :</Text>
          <Text style={styles.text}>{userData.uid}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, width: '100%' }}
          inputContainerStyle={{ backgroundColor: '#e1e1e1', borderRadius: 25 }}
          inputStyle={{ color: '#000' }}
          placeholderTextColor="#888"
          searchIcon={{ size: 24 }}
          clearIcon={<Icon name="close" size={24} onPress={() => setSearch('')} />}
        />
        <Text style={{ marginTop: 20 }}>Search Query: {search}</Text>
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
