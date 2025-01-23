import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import { usePoints } from '@/components/context/PointsContext';
import { SockListing } from '@/components/SockListings';

const IconLogo = require('@/assets/images/IconLogo.png');
const RedeemPoints1 = require('@/assets/images/RedeemPoints1.png');
const RedeemPoints2 = require('@/assets/images/RedeemPoints2.png');

const exampleListings = [
  {
    id: "1",
    image: require("@/assets/images/Listing1.png"), 
    title: "Men's Merino Wool Blend Half Calf Socks",
    price: 20.0,
    colors: ["#64737c", "#ae8666", "#3c8c66", "#161518"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "25% Off",
    exclusiveDealColor: "#FF5733",
  },
  {
    id: "2",
    image: require("@/assets/images/Listing2.webp"),
    title: "Men's Solids Calf Sock 4-Pack",
    price: 56.0,
    colors: ["#432d43", "#eae5e3", "#474a66", "#64737c"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "15% Off",
    exclusiveDealColor: "#158b5a",
  },
  {
    id: "3",
    image: require("@/assets/images/Listing3.png"),
    title: "Men's Reflec-Tec All Purpose Calf Socks",
    price: 20.0,
    colors: ["#1d1d1f", "#303b74", "#4a4a4e", "#e7888d"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "20% Off",
    exclusiveDealColor: "#29398e",
  },
  {
    id: "4",
    image: require("@/assets/images/Listing4.png"), 
    title: "Men's Running Half Calf Sock 6-Pack",
    price: 108.0,
    colors: ["#f3f7fa", "#898989", "#202020", "#1f161b"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "20% Off",
    exclusiveDealColor: "#29398e",
  },
  {
    id: "5",
    image: require("@/assets/images/Listing5.jpg"),
    title: "Men's Originals Half Calf Sock 4-Pack",
    price: 56.0,
    colors: ["#efeef1", "#696a6f", "#1f1f21", "#cdcdcd"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "25% Off",
    exclusiveDealColor: "#FF5733",
  },
  {
    id: "6",
    image: require("@/assets/images/Listing6.png"),
    title: "Men's Dress Calf Sock",
    price: 18.0,
    colors: ["#462d3e", "#483634", "#161518", "#4a494b"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "20% Off",
    exclusiveDealColor: "#29398e",
  },
  {
    id: "7",
    image: require("@/assets/images/Listing7.webp"), 
    title: "Men's Golf Quarter Sock 3-Pack",
    price: 54.0,
    colors: ["#384139", "#bcc5db", "#000", "#363839"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "15% Off",
    exclusiveDealColor: "#158b5a",
  },
  {
    id: "8",
    image: require("@/assets/images/Listing8.png"),
    title: "Men's Merino Wool Blend Athletic Quarter Socks",
    price: 24.0,
    colors: ["#4c5655", "#a1b2c3", "#d5d858", "#353338"],
    category: "Men",
    exclusiveDeal: true,
    exclusiveDealTitle: "20% Off",
    exclusiveDealColor: "#29398e",
  },
];

export const HorizontalSockList = () => {
  return (
      <FlatList
        data={exampleListings}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SockListing
            image={item.image}
            title={item.title}
            price={item.price}
            colors={item.colors}
            exclusiveDeal={item.exclusiveDeal}
            exclusiveDealTitle={item.exclusiveDealTitle}
            exclusiveDealColor={item.exclusiveDealColor}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
  );
};

export default function Rewards() {

  const { points, subtractPoints, displayPoints } = usePoints();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.pointsBox}>
          <View style={styles.pointsBoxDetails}>
            <Image source={IconLogo} style={styles.IconLogoImage}></Image>
            <Text style={styles.totalPointsText}>Total Points: {displayPoints()}</Text>
          </View>
        </View>
        <View style={styles.redeemPointsBox}>
          <Text style={styles.redeemPointsHeader}>Redeem Points</Text>
          <View style={styles.redeemPointsLine}></View>
          <View style={styles.redeemPointsMethods}>
            <View style={styles.redeemPointsMethodContainer}>
              <Image source={RedeemPoints1} style={styles.redeemPointsImage}></Image>
              <View style={styles.redeemPointsWay}>
                <Text style={styles.creditText}>Bombas Credit: 1000 Points = $10</Text>
              </View>
            </View>
            <View style={styles.redeemPointsMethodContainer}>
              <Image source={RedeemPoints2} style={styles.redeemPointsImage}></Image>
              <View style={styles.redeemPointsWay}>
                <Text style={styles.creditText}>Donate: 500 Points = Extra Donation</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.exclusiveDealsBox}>
          <Text style={styles.redeemPointsHeader}>Exclusive Deals</Text>
          <View style={styles.redeemPointsLine}></View>
          <HorizontalSockList></HorizontalSockList>
        </View>
        <View style={styles.exclusiveDealsBox}>
          <Text style={styles.redeemPointsHeader}>Earn Points</Text>
          <View style={styles.redeemPointsLine}></View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  pointsBox:{
    width:'100%',
    paddingVertical:15,
    borderWidth:4,
    borderColor:'#29398e',
    borderRadius:16,
    alignItems:'center',
    justifyContent:'center'
  },
  IconLogoImage:{
    width:48,
    height:48,
    marginRight:18
  },
  pointsBoxDetails:{
    flexDirection:'row',
    alignItems:'center'
  },
  totalPointsText:{
    fontSize:28,
    fontWeight:'bold',
  },
  redeemPointsBox:{
    flexDirection:'column',
    marginTop:20,
  },
  redeemPointsHeader:{
    fontSize:24,
    fontWeight:'bold',
  },
  redeemPointsLine:{
    height: 1, 
    backgroundColor: '#ccc', 
    marginVertical: 14,
    width:'100%'
  },
  redeemPointsMethods:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  redeemPointsWay:{
    paddingHorizontal:18,
    paddingBottom:18,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  redeemPointsMethodContainer:{
    width:'48.7%',
    borderWidth:5,
    borderColor:'#29398e',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden'
  },
  redeemPointsImage: {
    width: '100%',
    height: 200,
  },
  creditText:{
    fontSize:18,
    marginTop:20,
  },
  exclusiveDealsBox:{
    flexDirection:'column',
    marginTop:26,
  },
  container: {
    flex: 1, // Ensures the container takes up the available space
    width: '100%',
  },
  listContent:{
    gap:17
  }
});
