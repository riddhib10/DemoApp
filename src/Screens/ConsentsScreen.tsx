import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const baseUrl = 'https://reqres.in/api/unknown';

const ConsentsScreen = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Requests'); // Default selected value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        const fetchedEmployees = response.data.data;
        setEmployees(fetchedEmployees);
        setLoading(false);
      } catch (error) {
        handleAxiosError(error);
      }
    };

    fetchData();
  }, []);

  const handleAxiosError = (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 429) {
        retryFetchingData();
      } else {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      }
    } else {
      setError('Error fetching data: ' + error.message);
      setLoading(false);
    }
  };

  const retryFetchingData = async () => {
    const maxRetries = 3;
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const response = await axios.get(baseUrl);
        const fetchedEmployees = response.data.data;
        setEmployees(fetchedEmployees);
        setLoading(false);
        return;
      } catch (error) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 1000 * retries)); // Exponential backoff
        if (retries === maxRetries) {
          handleAxiosError(error);
        }
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Name: {item.employee_name}</Text>
      <Text style={styles.text}>Age: {item.employee_age}</Text>
      <Text style={styles.text}>Salary: ${item.employee_salary}</Text>
      <Text style={styles.text}>Profile Image: {item.profile_image}</Text>
    </View>
  );

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerR}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedValue === 'Requests' && styles.selectedRadioButton,
          ]}
          onPress={() => handleRadioButtonPress('Requests')}
        >
          <Text style={styles.radioButtonText}>
            {selectedValue === 'Requests' ? (
              <Text style={styles.selectedText}>Requests</Text>
            ) : (
              'Requests'
            )}
          </Text>
          {selectedValue === 'Requests' && <View style={styles.selectedDot} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedValue === 'Approved' && styles.selectedRadioButton,
          ]}
          onPress={() => handleRadioButtonPress('Approved')}
        >
          <Text style={styles.radioButtonText}>
            {selectedValue === 'Approved' ? (
              <Text style={styles.selectedText}>Approved</Text>
            ) : (
              'Approved'
            )}
          </Text>
          {selectedValue === 'Approved' && <View style={styles.selectedDot} />}
        </TouchableOpacity>
      </View>
      <StatusNavigator />
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const All = () => {
  return <View><Text>All Screen</Text></View>;
};

const Pending = () => {
  return <View><Text>Pending Screen</Text></View>;
};

const Denied = () => {
  return <View><Text>Denied Screen</Text></View>;
};

const Expired = () => {
  return <View><Text>Expired Screen</Text></View>;
};

const Tab = createBottomTabNavigator();

const StatusNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Denied" component={Denied} />
      <Tab.Screen name="Expired" component={Expired} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  containerR: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
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
    width: 10,
    height: 10,
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
  item: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConsentsScreen;
