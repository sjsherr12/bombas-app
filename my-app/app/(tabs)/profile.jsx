import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';

const profilePic = require('@/assets/images/ProfilePic.png'); // Replace with actual user image

const sections = [
  {
    title: 'Settings',
    items: [
      { icon: 'person-outline', label: 'Personal Information', route: 'fill' },
      { icon: 'card-outline', label: 'Payment Details', route: 'fill' },
      { icon: 'shield-checkmark-outline', label: 'Login & Security', route: 'fill' },
      { icon: 'accessibility-outline', label: 'Accessibility', route: 'fill' },
    ],
  },
  {
    title: 'Points and Referrals',
    items: [
      { icon: 'star-outline', label: 'Points and Credits', route: 'fill' },
      { icon: 'people-outline', label: 'Referral Program', route: 'fill' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: 'thumbs-up-outline', label: 'Happiness Guarantee', route: 'fill' },
      { icon: 'call-outline', label: 'Contact Support', route: 'fill' },
      { icon: 'help-circle-outline', label: 'Visit Help Center', route: 'fill' },
      { icon: 'pencil-sharp', label: 'Give Us Feedback', route: 'fill' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { icon: 'document-text-outline', label: 'Terms of Service', route: 'fill' },
      { icon: 'document-text-outline', label: 'Privacy Policy', route: 'fill' },
    ],
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ScreenWrapper>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.notificationsButton} onPress={() => router.push('/notifications')}>
            <Ionicons name="notifications-outline" size={20} color="white" />
            <Text style={styles.notificationsButtonText}>Notifications</Text>
          </TouchableOpacity>
        </View>
        
        {/* Profile Info */}
        <TouchableOpacity style={styles.outerProfileContainer} onPress={() => router.push('/showProfile')}>
          <View style={styles.profileContainer}>
            <Image source={profilePic} style={styles.profileImage} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Spencer</Text>
              <Text style={styles.profileSubtext}>Show profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <View style={styles.line}></View>
        </TouchableOpacity>
        
        {/* Sections */}
        {sections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.sectionItem}
                onPress={() => router.push(`/${item.route}`)}
              >
                <Ionicons name={item.icon} size={20} color="black" />
                <Text style={styles.sectionLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={20} color="black" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
        
        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:24},
  title: { fontSize: 38, fontWeight: 'bold' },
  profileContainer: { flexDirection: 'row', alignItems: 'center'},
  profileImage: { width: 80, height: 80, borderRadius: 100 },
  profileTextContainer: { flex: 1, marginLeft: 24 },
  profileName: { fontSize: 26, fontWeight: '600', marginBottom:12 },
  profileSubtext: { color: 'gray', fontSize:18 },
  sectionContainer: { marginTop: 38 },
  sectionTitle: { fontSize: 24, fontWeight: '600', marginBottom: 10, color: 'black' },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionLabel: { flex: 1, fontSize: 16, marginLeft: 15 },
  logoutButton: {marginTop: 46, paddingBottom: 30 },
  logoutText: { fontSize: 17, color: '#2e2e2e', textDecorationLine: 'underline' },
  notificationsButton:{
    paddingHorizontal:16,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#29398e',
    borderRadius:10,
    paddingVertical:7,
  },
  notificationsButtonText:{
    color:'white',
    fontSize:16,
    marginLeft:8
  },
  outerProfileContainer:{
    flexDirection:'column'
  },
  line:{
    width:'100%',
    height:1,
    backgroundColor:'#ccc',
    marginTop:18,
  },
});

export default ProfileScreen;