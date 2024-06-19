import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './TabNavigation';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import LanguageChange from '../Screens/LanguageChange';
import Settings from '../Screens/Settings';
import SignOut from '../components/SignOut';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.displayName);
      }
    };
    fetchUserName();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoSection}>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <DrawerItemList {...props} />
      <SignOut />
    </DrawerContentScrollView>
  );
};

function DrawerNavigation() {
  return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={TabNavigation}
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} />
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: 'About Us',
            drawerIcon: ({ color, size }) => (
              <Icon name="info" color={color} size={size} />
            ),
          }} />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Us',
            drawerIcon: ({ color, size }) => (
              <Icon name="contacts" color={color} size={size} />
            ),
          }} />
        <Drawer.Screen
          name="LanguageChange"
          component={LanguageChange}
          options={{
            title: 'Change Language',
            drawerIcon: ({ color, size }) => (
              <Icon name="language" color={color} size={size} />
            ),
          }} />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  userName: {
    fontSize: 18,
    color : '#000',
    fontWeight: 'bold',
  },
});

export default DrawerNavigation;
