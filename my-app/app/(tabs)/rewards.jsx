import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, LayoutAnimation, Modal } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import { usePoints } from '@/components/context/PointsContext';
import { SockListing } from '@/components/SockListings';
import Collapsible from "react-native-collapsible";
import { useState } from 'react';

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

const faqData = [
  {
    question: "Student Bonus!",
    answer: "Students are eligible for a special welcome bonus when they verify their student ID through the Bombas mobile app. This 'Buzz Bonus' instantly rewards students with 1,000 points to kickstart their loyalty journey, making it easier to access exclusive rewards and benefits.",
    icon: require("@expo/vector-icons").FontAwesome,
    iconName: "graduation-cap", // Represents students
  },
  {
    question: "Referral Program",
    answer: "Share the love for Bombas by referring your friends to join the hive! For every friend who creates an account and makes a purchase, you will earn 25 points. Not only does this help you accumulate points quickly, but it also spreads Bombas mission of comfort and community.",
    icon: require("@expo/vector-icons").FontAwesome,
    iconName: "users", // Represents referrals and connections
  },
  {
    question: "Social Media Engagement",
    answer: "Stay active on social media and earn points! Here’s how: \n\u2022 Follow on Instagram or TikTok: 15 points \n\u2022 Like 4 posts: 10 points \n\u2022 Share 3 posts: 10 points",
    icon: require("@expo/vector-icons").FontAwesome,
    iconName: "thumbs-up", // Represents social engagement
  },
  {
    question: "AllTrails Partnership",
    answer: "Bombas has partnered with AllTrails to make every step count. By tracking your outdoor adventures, you can earn 30 points for every mile you log through the AllTrails app. This initiative encourages fitness and outdoor activity while rewarding you for exploring the great outdoors.",
    icon: require("@expo/vector-icons").MaterialCommunityIcons,
    iconName: "map-marker-distance", // Represents mileage tracking
  },
  {
    question: "Running Event Participation",
    answer: "Join Bombas-sponsored events and earn rewards for your participation! Every time you take part in an event, you will receive 80 points. You can participate in either the NYC Marathon on November 2nd or any of the local Turkey Trots on Thanksgiving listed below: \n\u2022 Chicago \n\u2022 Sacramento \n\u2022 Dallas \n\u2022 Detroit \n\u2022 Washington",
    icon: require("@expo/vector-icons").MaterialIcons,
    iconName: "event", // Represents events
  },
];


const EarnPointsMethods = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    // Toggle the index in the array of open indices
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index) // Remove index if it was open
        : [...prevIndices, index] // Add index if it wasn't open
    );
  };

  const renderItem = ({ item, index }) => {
    const isOpen = openIndices.includes(index);

    return (
      <View style={[styles.card, isOpen && styles.cardOpen]}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => handleToggle(index)}
          activeOpacity={0.8}
        >
          <Text style={styles.question}>{item.question}</Text>
          {/* Use the icon from faqData and change its color dynamically */}
          <item.icon
            name={item.iconName}
            size={24}
            color={isOpen ? "#000" : "#464647"} // Grey when closed, blue when open
          />
        </TouchableOpacity>
        <Collapsible collapsed={!isOpen} duration={300}>
          <Text style={styles.answer}>{item.answer}</Text>
        </Collapsible>
      </View>
    );
  };

  return (
    <View style={styles.earnPointsContainer}>
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.earnPointsListContainer}
      />
    </View>
  );
};

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

const RedeemPointsSection = () => {
  const [modalVisible, setModalVisible] = useState({ credit: false, donate: false });
  const [completed, setCompleted] = useState({ credit: false, donate: false });

  const { points, subtractPoints, displayPoints } = usePoints();

  const openModal = (type) => {
    setModalVisible((prev) => ({ ...prev, [type]: true }));
    setCompleted((prev) => ({ ...prev, [type]: false }));
  };

  const closeModal = (type) => {
    setModalVisible((prev) => ({ ...prev, [type]: false }));
  };

  const handleComplete = (type) => {
    if (type === "credit") {
      subtractPoints(1000);
    } else if (type === "donate") {
      subtractPoints(500);
    }
  
    setCompleted((prev) => ({ ...prev, [type]: true }));
  };

  return (
    <View style={styles.redeemPointsBox}>
      <Text style={styles.redeemPointsHeader}>Redeem Points</Text>
      <View style={styles.redeemPointsLine}></View>
      <View style={styles.redeemPointsMethods}>
        {/* Bombas Credit Option */}
        <TouchableOpacity
          style={styles.redeemPointsMethodContainer}
          onPress={() => openModal("credit")}
          activeOpacity={0.8}
        >
          <Image source={RedeemPoints1} style={styles.redeemPointsImage} />
          <View style={styles.redeemPointsWay}>
            <Text style={styles.creditText}>Bombas Credit: 1000 Points = $10</Text>
          </View>
        </TouchableOpacity>

        {/* Donation Option */}
        <TouchableOpacity
          style={styles.redeemPointsMethodContainer}
          onPress={() => openModal("donate")}
          activeOpacity={0.8}
        >
          <Image source={RedeemPoints2} style={styles.redeemPointsImage} />
          <View style={styles.redeemPointsWay}>
            <Text style={styles.creditText}>Donate: 500 Points = Extra Donation</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bombas Credit Modal */}
      <Modal
        visible={modalVisible.credit}
        transparent={true}
        animationType="fade"
        onRequestClose={() => closeModal("credit")}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {completed.credit ? (
              <>
                <Text style={styles.modalTitle}>Success!</Text>
                <Text style={styles.modalDescription}>
                  Your Bombas Credit has been successfully redeemed. Enjoy your $10 credit on your next purchase!
                </Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => closeModal("credit")}
                >
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Redeem Bombas Credit</Text>
                <Text style={styles.modalDescription}>
                  Use 1000 points to redeem $10 in Bombas Credit. This credit will be automatically applied to your next purchase.
                </Text>
                <View style={styles.closeButtonGroup}>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => closeModal("credit")}
                  >
                    <Text style={styles.modalCloseText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCompleteButton}
                    onPress={() => handleComplete("credit")}
                  >
                    <Text style={styles.modalCompleteText}>Complete</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Donation Modal */}
      <Modal
        visible={modalVisible.donate}
        transparent={true}
        animationType="fade"
        onRequestClose={() => closeModal("donate")}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {completed.donate ? (
              <>
                <Text style={styles.modalTitle}>Thank You!</Text>
                <Text style={styles.modalDescription}>
                  Your donation has been successfully made. Your contribution helps make a difference!
                </Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => closeModal("donate")}
                >
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Make a Donation</Text>
                <Text style={styles.modalDescription}>
                  Use 500 points to make an extra donation. Your contribution helps us give back even more!
                </Text>
                <View style={styles.closeButtonGroup}>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => closeModal("donate")}
                  >
                    <Text style={styles.modalCloseText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCompleteButton}
                    onPress={() => handleComplete("donate")}
                  >
                    <Text style={styles.modalCompleteText}>Complete</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function Rewards() {

  const { points, subtractPoints, displayPoints } = usePoints();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} >
        <View style={styles.pointsBox}>
          <View style={styles.pointsBoxDetails}>
            <Image source={IconLogo} style={styles.IconLogoImage}></Image>
            <Text style={styles.totalPointsText}>Total Points: {displayPoints()}</Text>
          </View>
        </View>
        <RedeemPointsSection></RedeemPointsSection>
        <View style={styles.exclusiveDealsBox}>
          <Text style={styles.redeemPointsHeader}>Exclusive Deals</Text>
          <View style={styles.redeemPointsLine}></View>
          <HorizontalSockList></HorizontalSockList>
        </View>
        <View style={styles.exclusiveDealsBox}>
          <Text style={styles.redeemPointsHeader}>Earn Points</Text>
          <View style={styles.redeemPointsLine}></View>
          <EarnPointsMethods></EarnPointsMethods>
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
    width:46,
    height:46,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.44)",  // Dark semi-transparent overlay
  },
  modalContent: {
    width: "62%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    lineHeight:24,
  },
  modalCloseButton: {
    backgroundColor: "#29398e",  // Use the same theme color as the border
    paddingVertical: 12,
    borderRadius: 10,
    width:'49%',
    alignItems:'center',
    justifyContent:'center'
  },
  modalCloseText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
  },
  earnPointsContainer: {
    flex: 1,
  },
  card: {
    borderWidth: 3,
    borderColor: "#e0e0e0",
    borderRadius: 14,
    marginBottom: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  cardOpen: {
    borderColor: "#29398e",
    backgroundColor: "#f0f4ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  question: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    flex: 1,
  },
  answer: {
    fontSize: 16,
    color: "#242424",
    marginTop: 8,
    lineHeight:28
  },
  closeButtonGroup:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  modalCompleteButton: {
    backgroundColor: "#28a745", // Green for "Complete"
    paddingVertical: 12,
    borderRadius: 10,
    width: "49%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalCompleteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
