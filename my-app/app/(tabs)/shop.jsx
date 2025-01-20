import { Image, StyleSheet, Platform, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import SockListings from "@/components/SockListings";
import { useState } from 'react';

const tabOptions = ["Men", "Women", "Kids"];

export default function Shop() {

  const [activeTab, setActiveTab] = useState(-1);

  const handleTabPress = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  const category = activeTab === -1 ? "" : tabOptions[activeTab];

  return (
    <ScreenWrapper withHeader={true}>
      <View style={styles.tabBar}>
        {tabOptions.map((option, index) => (
          <TouchableOpacity key={index} style={[styles.tab, activeTab === index ? styles.activeTab : null]} onPress={() => handleTabPress(index)}>
            <Text style={[styles.tabText, activeTab === index ? styles.activeTabText : null]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SockListings category={category}></SockListings>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop:-10
  },
  tab: {
    borderWidth: 1,
    borderColor: "#000", // Black border
    borderRadius: 8, // Slight borderRadius
    paddingVertical: 10,
    width:160,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: '#29398e',
  },
  tabText: {
    color: "#000", // Black text color
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText:{
    color:'#fff'
  }
});
