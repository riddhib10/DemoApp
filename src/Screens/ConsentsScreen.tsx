import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import LogOut from './src/Auth/Logout';
import MyRecords from './src/Components/MyRecords';
import Consents from './src/Components/Consents';
import TabNavigator from './src/Navigation/TabNavigator';
import SignInScreen from './src/Auth/SignIn';
import LinkedFacilities from './src/Components/LinkedFacilities'; // Importing LinkedFacilities
import RequestedConsents from '../Screens/RequestedConsents';
import ApprovedConsents from '../Screens/ApprovedConsents';


const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState("Requests");

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
    if(value == "Requests"){
    console.log("Requests data");

    }
  };



  return (
  <View>
    <View style={styles.containerR}>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedValue === 'Requests' && styles.selectedRadioButton,
        ]}
        onPress={() => handleRadioButtonPress('Requests')}>
        <Text style={styles.radioButtonText}>
          {selectedValue === 'Requests' ? <Text style={styles.selectedText}>Requests</Text> : 'Requests'}
        </Text>
        {selectedValue === 'Requests' && <View style={styles.selectedDot} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedValue === 'Approved' && styles.selectedRadioButton,
        ]}
        onPress={() => handleRadioButtonPress('Approved')}>
        <Text style={styles.radioButtonText}>
          {selectedValue === 'Approved' ? <Text style={styles.selectedText}>Approved</Text> : 'Approved'}
        </Text>
        {selectedValue === 'Approved' && <View style={styles.selectedDot} />}
      </TouchableOpacity>
    </View>


    <View>
        {(selectedValue == "Requests") ?
        (<View>
            <RequestedConsents/>
        </View>) :
        (<View>
            <ApprovedConsents/>
        </View>)}
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

  text: {
    fontSize: 16,
    color: '#000000', //black
    textAlign: 'left',
  },

  containerR: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  radioButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadioButton: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
  selectedDot: {
    width: 0,
    height: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  radioButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RadioButtons;
