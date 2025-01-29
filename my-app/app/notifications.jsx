import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';

const notifications = [
    { title: 'Collaboration', subtitle: 'Bombas collaboration with Hoka launching November 18th!', timestamp: '3/13/25 5:00 PM', icon: 'megaphone-outline' },
    { title: 'New Order', subtitle: 'Your order for socks has been confirmed', timestamp: '3/13/25 5:00 PM', icon: 'chatbubble-outline' },
    { title: 'Order Shipped', subtitle: 'Your order #1234 has been shipped', timestamp: '3/13/25 5:00 PM', icon: 'cube-outline' },
    { title: 'Security Alert', subtitle: 'Login detected from a new device', timestamp: '3/13/25 5:00 PM', icon: 'lock-closed-outline' },
];

const NotificationItem = ({ title, subtitle, timestamp, icon }) => (
    <View style={styles.notificationContainer}>
        <View style={styles.iconBox}>
            <Ionicons name={icon} size={24} color="white" />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
);

const Notifications = () => {

    const router = useRouter();

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
                    <Text style={styles.headerText}>Notifications</Text>
                </View>

                {notifications.map((notification, index) => (
                    <NotificationItem key={index} {...notification} />
                ))}
            </ScreenWrapper>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    notificationContainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    iconBox: {
        width: 54,
        height: 54,
        backgroundColor: '#29398e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 18,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:54,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16.4,
        color: 'gray',
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
        position: 'absolute',
        top: 10,
        right: 15,
    },
    backButton: { 
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:'#29398e',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:0,
    },
    headerBox:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:12,
        width:'100%',
        justifyContent:'center',
        marginBottom:28,
    },
    headerText:{
        textAlign:'center',
        fontSize:36,
        fontWeight:'bold'
    },
});

export default Notifications;