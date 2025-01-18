import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const exampleListings = [
    {
      id: "1",
      image: require("@/assets/images/Listing1.png"), 
      title: "Men's Merino Wool Blend Half Calf Socks",
      price: 20.0,
      colors: ["#64737c", "#ae8666", "#3c8c66", "#161518"],
    },
    {
      id: "2",
      image: require("@/assets/images/Listing2.webp"),
      title: "Men's Solids Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#432d43", "#eae5e3", "#474a66", "#64737c"],
    },
    {
      id: "3",
      image: require("@/assets/images/Listing3.png"),
      title: "Men's Reflec-Tec All Purpose Calf Socks",
      price: 20.0,
      colors: ["#1d1d1f", "#303b74", "#4a4a4e", "#e7888d"],
    },
    {
      id: "4",
      image: require("@/assets/images/Listing4.png"), 
      title: "Men's Running Half Calf Sock 6-Pack",
      price: 108.0,
      colors: ["#f3f7fa", "#898989", "#202020", "#1f161b"],
    },
    {
      id: "5",
      image: require("@/assets/images/Listing5.jpg"),
      title: "Men's Originals Half Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#efeef1", "#696a6f", "#1f1f21", "#cdcdcd"],
    },
    {
      id: "6",
      image: require("@/assets/images/Listing6.png"),
      title: "Men's Dress Calf Sock",
      price: 18.0,
      colors: ["#462d3e", "#483634", "#161518", "#4a494b"],
    },
    {
      id: "7",
      image: require("@/assets/images/Listing7.webp"), 
      title: "Men's Golf Quarter Sock 3-Pack",
      price: 54.0,
      colors: ["#384139", "#bcc5db", "#000", "#363839"],
    },
    {
      id: "8",
      image: require("@/assets/images/Listing8.png"),
      title: "Men's Merino Wool Blend Athletic Quarter Socks",
      price: 24.0,
      colors: ["#4c5655", "#a1b2c3", "#d5d858", "#353338"],
    },
    {
      id: "9",
      image: require("@/assets/images/Listing9.png"),
      title: "Men's Golf Ankle Socks",
      price: 17.0,
      colors: ["#272728", "#2f384c", "#edeef5", "#0f6d5c"],
    },
    {
      id: "10",
      image: require("@/assets/images/Listing10.png"), 
      title: "Men's Targeted Compression Performance Calf Socks",
      price: 20.0,
      colors: ["#807e8a", "#fbfbfb", "#0d0d0d", "#b7ae31"],
    },
    {
      id: "11",
      image: require("@/assets/images/Listing11.png"),
      title: "Men's Vintage Stripes Half Calf Sock 8-Pack",
      price: 112.0,
      colors: ["#8e5077", "#c96965", "#067d49", "#22273f"],
    },
    {
      id: "12",
      image: require("@/assets/images/Listing12.png"),
      title: "Men's Winter Calf Socks",
      price: 16.0,
      colors: ["#000", "#2f321f", "#3e6ea5", "#5c2c27"],
    },
    {
      id: "13",
      image: require("@/assets/images/Listing13.jpg"), 
      title: "Men's Modern Rib Calf Sock 4-Pack",
      price: 64.0,
      colors: ["#69676a", "#564d38", "#cc2029", "#1f1e20"],
    },
    {
      id: "14",
      image: require("@/assets/images/Listing14.png"),
      title: "Men's Hiking Quarter Socks",
      price: 20.0,
      colors: ["#d0cbc4", "#3d3f35", "#5b5f5d", "#db8854"],
    },
    {
      id: "15",
      image: require("@/assets/images/Listing15.jpg"),
      title: "Men's Solids Half Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#1c1c1d", "#2c3447", "#b6b6b4", "#ededf2"],
    },
  ];

const SockListing = ({ image, title, price, colors }) => {
  return (
    <View style={styles.outerContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.listingContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.colorsContainer}>
          {colors.map((color, index) => (
            <View
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default function SockListings() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exampleListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SockListing
            image={item.image}
            title={item.title}
            price={item.price}
            colors={item.colors}
          />
        )}
        contentContainerStyle={styles.listingsWrapper}
        numColumns={3} 
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24
  },
  listingsWrapper: {
    paddingVertical: 6,
  },
  row: {
    justifyContent: "space-between", 
    marginBottom: 16, 
  },
  outerContainer:{
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    width: '31.7%'
  },
  listingContainer: {
    padding: 14,
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    borderTopLeftRadius: 11,    // Round top-left corner
    borderTopRightRadius: 11,   // Round top-right corner
    borderBottomLeftRadius: 0, // Keep bottom-left corner sharp
    borderBottomRightRadius: 0,
  },
  title: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    color: "#555",
  },
  colorsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});