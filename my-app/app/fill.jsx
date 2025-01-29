import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';

const Fill = () => {

    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <ScreenWrapper>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()} // Go to previous route
                >
                    <Ionicons name="arrow-back" size={26} color="white" />
                </TouchableOpacity>

                <Text style={styles.fillerText}>Filler Component</Text>
            </ScreenWrapper>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    fillerText:{
        fontSize:30,
        fontWeight:'600',
        marginTop:20,
        textAlign:'center'
    },
    backButton: { 
        marginTop: 20,
        height:46,
        width:46,
        borderRadius:100,
        backgroundColor:'#29398e',
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Fill;