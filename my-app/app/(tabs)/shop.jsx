import { Image, StyleSheet, Platform, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import SockListings from "@/components/SockListings";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

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
        <Icon2 name="filter" size={30} color="#000" style={styles.filterIcon}/>
        <View style={styles.categoryTabs}>
          {tabOptions.map((option, index) => (
            <TouchableOpacity key={index} style={[styles.tab, activeTab === index ? styles.activeTab : null]} onPress={() => handleTabPress(index)}>
              <Text style={[styles.tabText, activeTab === index ? styles.activeTabText : null]}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Icon name="shopping-cart" size={30} color="#000" style={styles.cartIcon}/>
      </View>
      <SockListings category={category}></SockListings>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:-10
  },
  categoryTabs:{
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: "#000", // Black border
    borderRadius: 8, // Slight borderRadius
    paddingVertical: 10,
    width:166,
    alignItems: "center",
    marginHorizontal:19
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
  },
  cartIcon:{
    position: "absolute", 
    right: 0,
  },
  filterIcon:{
    position: "absolute", 
    left: 0,
  },
});
