import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';
import { usePoints } from '@/components/context/PointsContext';

const profilePic = require('@/assets/images/ProfilePic.png');

const personalInfo = [
    { title: 'First Name', value: 'Spencer' },
    { title: 'Last Name', value: 'Sherr' },
    { title: 'Email', value: 'sjsherr1379@gmail.com' },
];

const ShowProfile = () => {
    const router = useRouter();
    const { points, displayPoints } = usePoints();

    return (
        <ScrollView style={styles.container}>
            <ScreenWrapper>
                <View style={styles.headerBox}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()} // Go to previous route
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.majorHeaderText}>Profile</Text>
                    <Text style={styles.headerText}>Edit</Text>
                </View>

                <View style={styles.outerProfileBox}>
                    <Image source={profilePic} style={styles.profileImage} />
                    <Text style={styles.customerName}>Spencer Sherr</Text>
                    <Text style={styles.customer}>Bombas Customer</Text>
                </View>

                <View style={styles.pointsContainer}>
                    <Text style={styles.totalPointsText}>Total Points: {displayPoints()}</Text>
                </View>

                <View style={styles.infoContainer}>
                    {personalInfo.map((item, index) => (
                        <View key={index} style={styles.infoBox}>
                            <View style={styles.textContainer}>
                                <Text style={styles.infoTitle}>{item.title}</Text>
                                <Text style={styles.infoValue}>{item.value}</Text>
                            </View>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editButtonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScreenWrapper>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: '#29398e',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 22,
        width: '100%',
        marginBottom: 42,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#303030',
        position: 'absolute',
        right: 0,
    },
    outerProfileBox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    profileImage: { width: 100, height: 100, borderRadius: 100 },
    customerName: {
        marginTop: 26,
        fontSize: 32,
        fontWeight: 'bold'
    },
    customer: {
        marginTop: 18,
        fontSize: 16,
        color: '#7d7d7d'
    },
    pointsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 24,
        borderWidth: 3.5,
        borderColor: '#29398e',
        borderRadius: 14,
        marginTop: 44,
        backgroundColor: '#f7f9ff',
        marginBottom: 26,
    },
    totalPointsText: {
        fontSize: 22,
        fontWeight: '600'
    },
    majorHeaderText: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold'
    },
    infoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textContainer: {
        flexDirection: 'column',
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom:8,
    },
    infoValue: {
        fontSize: 16,
        color: '#303030',
    },
    editButton: {
        backgroundColor: '#29398e',
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 7,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ShowProfile;