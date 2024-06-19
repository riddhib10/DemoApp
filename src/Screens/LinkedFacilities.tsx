import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import axios from 'axios';

const baseUrl = 'https://dummy.restapiexample.com/api/v1/employees';

const LinkedFacilities = ({ navigation, route }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setEmployees(response.data.data);
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
        setEmployees(response.data.data);
        setLoading(false);
        return;
      } catch (error) {
        retries++;
        await new Promise(resolve => setTimeout(resolve, 1000 * retries)); // Exponential backoff
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
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity style={styles.logOutButton}>
        <Text style={styles.googleButtonText}>Link new facility</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#262b2f',
    flex: 1,
  },
  topContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 54,
    color: 'white',
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButton: {
    backgroundColor: 'orange',
    borderRadius: 50,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
  userInfoText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageContainer: {
    marginVertical: 20,
  },
  header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  item: {
      backgroundColor: '#f0f8ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
  },
});

export default LinkedFacilities;
