import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet , ScrollView} from 'react-native';

const dummyData = require('./dummyData.json');

const organizeData = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {});
};

const ApprovedConsents = () => {
  const [activeTab, setActiveTab] = useState('Granted');
  const [data, setData] = useState(organizeData(dummyData));


  const handleTabPress = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {['Granted', 'Expired', 'Revoked'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabPress(tab)} >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dataContainer}>
        <DataComponent data={data[activeTab]} />
      </View>
    </View>
  );
};

const DataComponent = ({ data }) => {
  return (
  <ScrollView style={styles.scrollView}>
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.dataItem}>
          <Text>{item.hospitalName}</Text>
          <Text>{item.requestType}</Text>
          <Text>{item.dateOfRequest}</Text>
          <Text>{item.status}</Text>
        </View>
      ))}
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  tabText: {
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#f0f0f0',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  dataContainer: {
    padding: 20,
  },
  scrollView: {
    marginVertical: 10,
  },
  dataItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
  },
  text: {
    marginBottom: 5,
    color: '#000',
  },
});

export default ApprovedConsents;

