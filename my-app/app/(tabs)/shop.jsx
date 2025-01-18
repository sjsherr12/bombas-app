import { Image, StyleSheet, Platform, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import SockListings from "@/components/SockListings";

const tabOptions = ["Men", "Women", "Kids"];

export default function Shop() {
  return (
    <ScreenWrapper withHeader={true}>
      <View style={styles.tabBar}>
        {tabOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.tab}>
            <Text style={styles.tabText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SockListings></SockListings>
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
  tabText: {
    color: "#000", // Black text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
