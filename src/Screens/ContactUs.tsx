import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUs = () => {
    const contactInfo = {
        email: 'contact@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, Country',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Contact Us</Text>
            <Text>Email: {contactInfo.email}</Text>
            <Text>Phone: {contactInfo.phone}</Text>
            <Text>Address: {contactInfo.address}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default ContactUs;
