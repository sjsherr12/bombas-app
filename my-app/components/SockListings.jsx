import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import _ from "lodash";

const exampleListings = [
    {
      id: "1",
      image: require("@/assets/images/Listing1.png"), 
      title: "Men's Merino Wool Blend Half Calf Socks",
      price: 20.0,
      colors: ["#64737c", "#ae8666", "#3c8c66", "#161518"],
      category: "Men",
    },
    {
      id: "2",
      image: require("@/assets/images/Listing2.webp"),
      title: "Men's Solids Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#432d43", "#eae5e3", "#474a66", "#64737c"],
      category: "Men",
    },
    {
      id: "3",
      image: require("@/assets/images/Listing3.png"),
      title: "Men's Reflec-Tec All Purpose Calf Socks",
      price: 20.0,
      colors: ["#1d1d1f", "#303b74", "#4a4a4e", "#e7888d"],
      category: "Men",
    },
    {
      id: "4",
      image: require("@/assets/images/Listing4.png"), 
      title: "Men's Running Half Calf Sock 6-Pack",
      price: 108.0,
      colors: ["#f3f7fa", "#898989", "#202020", "#1f161b"],
      category: "Men",
    },
    {
      id: "5",
      image: require("@/assets/images/Listing5.jpg"),
      title: "Men's Originals Half Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#efeef1", "#696a6f", "#1f1f21", "#cdcdcd"],
      category: "Men",
    },
    {
      id: "6",
      image: require("@/assets/images/Listing6.png"),
      title: "Men's Dress Calf Sock",
      price: 18.0,
      colors: ["#462d3e", "#483634", "#161518", "#4a494b"],
      category: "Men",
    },
    {
      id: "7",
      image: require("@/assets/images/Listing7.webp"), 
      title: "Men's Golf Quarter Sock 3-Pack",
      price: 54.0,
      colors: ["#384139", "#bcc5db", "#000", "#363839"],
      category: "Men",
    },
    {
      id: "8",
      image: require("@/assets/images/Listing8.png"),
      title: "Men's Merino Wool Blend Athletic Quarter Socks",
      price: 24.0,
      colors: ["#4c5655", "#a1b2c3", "#d5d858", "#353338"],
      category: "Men",
    },
    {
      id: "9",
      image: require("@/assets/images/Listing9.png"),
      title: "Men's Golf Ankle Socks",
      price: 17.0,
      colors: ["#272728", "#2f384c", "#edeef5", "#0f6d5c"],
      category: "Men",
    },
    {
      id: "10",
      image: require("@/assets/images/Listing10.png"), 
      title: "Men's Targeted Compression Performance Calf Socks",
      price: 20.0,
      colors: ["#807e8a", "#fbfbfb", "#0d0d0d", "#b7ae31"],
      category: "Men",
    },
    {
      id: "11",
      image: require("@/assets/images/Listing11.png"),
      title: "Men's Vintage Stripes Half Calf Sock 8-Pack",
      price: 112.0,
      colors: ["#8e5077", "#c96965", "#067d49", "#22273f"],
      category: "Men",
    },
    {
      id: "12",
      image: require("@/assets/images/Listing12.png"),
      title: "Men's Winter Calf Socks",
      price: 16.0,
      colors: ["#000", "#2f321f", "#3e6ea5", "#5c2c27"],
      category: "Men",
    },
    {
      id: "13",
      image: require("@/assets/images/Listing13.jpg"), 
      title: "Men's Modern Rib Calf Sock 4-Pack",
      price: 64.0,
      colors: ["#69676a", "#564d38", "#cc2029", "#1f1e20"],
      category: "Men",
    },
    {
      id: "14",
      image: require("@/assets/images/Listing14.png"),
      title: "Men's Hiking Quarter Socks",
      price: 20.0,
      colors: ["#d0cbc4", "#3d3f35", "#5b5f5d", "#db8854"],
      category: "Men",
    },
    {
      id: "15",
      image: require("@/assets/images/Listing15.jpg"),
      title: "Men's Solids Half Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#1c1c1d", "#2c3447", "#b6b6b4", "#ededf2"],
      category: "Men",
    },
    {
      id: "16",
      image: require("@/assets/images/Womens1.png"), 
      title: "Women's Winter Calf Sock 4-Pack",
      price: 64.0,
      colors: ["#a1b3c5", "#d5d858", "#414c4c", "#ff976c"],
      category: "Women",
    },
    {
      id: "17",
      image: require("@/assets/images/Womens2.png"),
      title: "Women's Tri-Block Ankle Socks",
      price: 13.0,
      colors: ["#e6d2e9", "#4c74b4", "#6471b8", "#c7c4bf"],
      category: "Women",
    },
    {
      id: "18",
      image: require("@/assets/images/Womens3.png"),
      title: "Women's Quarter Sock 4-Pack",
      price: 56.0,
      colors: ["#eae5e3", "#cc5557", "#9aacaf", "#474a66"],
      category: "Women",
    },
    {
      id: "19",
      image: require("@/assets/images/Womens4.png"), 
      title: "Women's Running Ankle Sock 6-Pack",
      price: 102.0,
      colors: ["#ce5e99", "#e75d53", "#184b48", "#666cc4"],
      category: "Women",
    },
    {
      id: "20",
      image: require("@/assets/images/Womens5.png"),
      title: "Women's Vintage Stripes Half Calf Socks",
      price: 14.0,
      colors: ["#22273f", "#b1bae9", "#b1b2b5", "#571e36"],
      category: "Women",
    },
    {
      id: "21",
      image: require("@/assets/images/Womens6.png"),
      title: "Women's Solids Ankle Socks",
      price: 13.0,
      colors: ["#9aacaf", "#939ec0", "#2a2b4b", "#161518"],
      category: "Women",
    },
    {
      id: "22",
      image: require("@/assets/images/Womens7.webp"), 
      title: "Women's Running Quarter Sock 3-Pack",
      price: 54.0,
      colors: ["#ce5e99", "#3f5378", "#161518", "#e2e1e6"],
      category: "Women",
    },
    {
      id: "23",
      image: require("@/assets/images/Womens8.png"),
      title: "Women's Merino Wool Blend Quarter Socks",
      price: 22.0,
      colors: ["#b6adba", "#412835", "#221e20", "#5f5737"],
      category: "Women",
    },
    {
      id: "24",
      image: require("@/assets/images/Womens9.jpg"),
      title: "Women's Running Half Calf Sock 3-Pack",
      price: 54.0,
      colors: ["#020318", "#2a292d", "#e7e7e7", "#2a2b4b"],
      category: "Women",
    },
    {
      id: "25",
      image: require("@/assets/images/Womens10.png"), 
      title: "Women's Pointelle Calf Sock 3-Pack",
      price: 54.0,
      colors: ["#612c43", "#ebe5e2", "#161518", "#262528"],
      category: "Women",
    },
    {
      id: "26",
      image: require("@/assets/images/Womens11.jpg"),
      title: "Women's Originals Calf Sock 4-Pack",
      price: 56.0,
      colors: ["#c794a3", "#060e33", "#9cc4e7", "#ffe7e0"],
      category: "Women",
    },
    {
      id: "27",
      image: require("@/assets/images/Womens12.png"),
      title: "Women's Merino Wool Blend Half Calf Socks",
      price: 20.0,
      colors: ["#c39bbe", "#64737c", "#bbab92", "#39373e"],
      category: "Women",
    },
    {
      id: "28",
      image: require("@/assets/images/Womens13.png"), 
      title: "Women's Marl Ankle Sock 4-Pack",
      price: 52.0,
      colors: ["#3e3178", "#842e6c", "#50515a", "#274a48"],
      category: "Women",
    },
    {
      id: "29",
      image: require("@/assets/images/Womens14.png"),
      title: "Women's Full-Cushion Merino Wool Blend Ski Socks",
      price: 20.0,
      colors: ["#262f3d", "#505a72", "#dd6044", "#d6d793"],
      category: "Women",
    },
    {
      id: "30",
      image: require("@/assets/images/Womens15.webp"),
      title: "Women's Winter Calf Sock 4-Pack",
      price: 64.0,
      colors: ["#767e98", "#e6eded1", "#2a4c4e", "#92316f"],
      category: "Women",
    },
    {
      id: "31",
      image: require("@/assets/images/Kids1.webp"),
      title: "Junior Originals Calf Sock 4-Pack",
      price: 24.0,
      colors: ["#ececee", "#76777a", "#efcdd3", "#9eb6d4"],
      category: "Kids",
    },
    {
      id: "32",
      image: require("@/assets/images/Kids2.webp"), 
      title: "Youth Week of Bombas Ankle Sock 7-Pack",
      price: 46.0,
      colors: ["#e89a8a", "#432d43", "#9aacaf", "#ccd8a7"],
      category: "Kids",
    },
    {
      id: "33",
      image: require("@/assets/images/Kids3.webp"),
      title: "Youth Solids Calf Sock 4-Pack",
      price: 28.0,
      colors: ["#939ec0", "#9aacaf", "#ccd8a7", "#432d43"],
      category: "Kids",
    },
    {
      id: "34",
      image: require("@/assets/images/Kids4.jpg"),
      title: "Baby Sparkle Rib Sock 4-Pack (6-12 Months)",
      price: 28.0,
      colors: ["#737e5d", "#d02733", "#562142", "#1c1c1d"],
      category: "Kids",
    },
    {
      id: "35",
      image: require("@/assets/images/Kids5.jpg"), 
      title: "Youth Marl Ankle Sock 6-Pack",
      price: 39.0,
      colors: ["#3e3178", "#304f52", "#161518", "#e69668"],
      category: "Kids",
    },
    {
      id: "36",
      image: require("@/assets/images/Kids6.webp"),
      title: "Junior Lightweight Ankle Sock 4-Pack",
      price: 30.0,
      colors: ["#f0f0f0", "#6995bd", "#eec1c9", "#272d3b"],
      category: "Kids",
    },
    {
      id: "37",
      image: require("@/assets/images/Kids7.jpg"),
      title: "Youth Fuzzy Sock 4-Pack",
      price: 40.0,
      colors: ["#641726", "#c9d3e1", "#eae5e3", "#988470"],
      category: "Kids",
    },
    {
      id: "38",
      image: require("@/assets/images/Kids8.jpg"), 
      title: "Junior Solids Ankle Sock 4-Pack",
      price: 26.0,
      colors: ["#939ec0", "#ccd8a7", "#9aacaf", "#432d43"],
      category: "Kids",
    },
    {
      id: "39",
      image: require("@/assets/images/Kids9.jpg"),
      title: "Youth Merino Wool Blend Calf Sock 4-Pack",
      price: 40.0,
      colors: ["#3c8c66", "#64737c", "#7d5367", "#939ec0"],
      category: "Kids",
    },
    {
      id: "40",
      image: require("@/assets/images/Kids10.jpg"),
      title: "Toddler Gripper Calf Sock 8-Pack",
      price: 56.0,
      colors: ["#cecbc2", "#a6c2db", "#bb94b1", "#303346"],
      category: "Kids",
    },
    {
      id: "41",
      image: require("@/assets/images/Kids11.webp"), 
      title: "Toddler Lightweight Ankle Sock 4-Pack",
      price: 26.0,
      colors: ["#e4d4ee", "#292d47", "#eec1c9", "#adc2d5"],
      category: "Kids",
    },
    {
      id: "42",
      image: require("@/assets/images/Kids12.webp"),
      title: "Toddler Gripper Ankle Sock 8-Pack",
      price: 44.0,
      colors: ["#562143", "#e69668", "#274a48", "#d0d37a"],
      category: "Kids",
    }
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

export default function SockListings({category}) {
  
  let filteredListings = exampleListings.filter((listing) => {
    if (category === "Men" || category === "Women" || category === "Kids") {
      return listing.category === category; 
    }
    return true; 
  });

  if (!category || category === "All") {
    filteredListings = _.shuffle(filteredListings); 
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredListings}
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