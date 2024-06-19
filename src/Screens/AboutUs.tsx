import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About Our Hospital</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Hospital Name:</Text>
        <Text style={styles.text}>Nagpur Star Hospital</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Location:</Text>
        <Text style={styles.text}>123 new Street, Nagpur, MAHA, IN</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>About Us:</Text>
        <Text style={styles.text}>
          Our Hospital is committed to providing compassionate
          care to our community. With state-of-the-art facilities and a
          dedicated team of healthcare professionals, we strive to deliver the
          highest quality medical services.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Mission Statement:</Text>
        <Text style={styles.text}>
          To improve the health and well-being of the communities we serve with
          a commitment to excellence in all that we do.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Vision:</Text>
        <Text style={styles.text}>
          To be the leading provider of healthcare services in our region,
          recognized for exceptional patient care, medical education, and
          research.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default AboutPage;
