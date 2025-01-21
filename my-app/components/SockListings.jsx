import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal, Animated, TouchableWithoutFeedback } from "react-native";
import _ from "lodash";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-ratings';

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

const ColorCircles = ({ colors, size, spacing, selectable = true, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    if (selectable) {
      setSelectedColor(color);
      if (onColorSelect) {
        onColorSelect(color); // Notify parent of the selected color
      }
    }
  };

  return (
    <View style={styles.colorsContainer}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleColorSelect(color)}
          disabled={!selectable} // Disable if selectable is false
        >
          <View
            style={[
              styles.colorCircle,
              {
                backgroundColor: color,
                width: size,
                height: size,
                marginRight: spacing,
                borderWidth: selectedColor === color ? 2 : 1, // Highlight selected color with border
                borderColor: selectedColor === color ? '#000' : '#ccc', // Add border color
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SelectableSizes = ({onSizeSelect}) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size); // Notify parent of the selected size
    }
  };

  return (
    <View style={styles.sizesContainer}>
      {sizes.map((size, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sizeBox,
            {
              borderColor: selectedSize === size ? 'black' : 'transparent', // Black border when selected
            },
          ]}
          onPress={() => handleSizeSelect(size)}
        >
          <Text
            style={[
              styles.sizeLabel,
              {
                color: selectedSize === size ? 'black' : '#555', // Change label color when selected
              },
            ]}
          >
            {size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
  

const SockListing = ({ image, title, price, colors, onPress }) => {
  return (
    <TouchableOpacity style={styles.outerContainer} onPress={onPress} activeOpacity={0.8}>
        <Image source={image} style={styles.image} />
        <View style={styles.listingContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <ColorCircles colors={colors} size={16} spacing={8} selectable={false}></ColorCircles>
        </View>
    </TouchableOpacity>
  );
};

export default function SockListings({category}) {
  
  const [shuffledListings, setShuffledListings] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false); // Track if shuffle is already done

  const [cartItems, setCartItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  
  useEffect(() => {
    if (!isShuffled) {
      setShuffledListings(_.shuffle(exampleListings)); // Shuffle only once
      setIsShuffled(true); // Mark shuffle as done
    }
  }, [isShuffled, exampleListings]); // Ensure it doesn't reshuffle unnecessarily
  
  let filteredListings = shuffledListings.filter((listing) => {
    if (category === "Men" || category === "Women" || category === "Kids") {
      return listing.category === category;
    }
    return true;
  });
  
  if (!category || category === "All") {
    filteredListings = shuffledListings; // Use already shuffled listings
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalAnim] = useState(new Animated.Value(0));
  const [selectedSock, setSelectedSock] = useState(null);

  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [cartModalAnim] = useState(new Animated.Value(1));

  const openCartModal = () => {
    setCartModalVisible(true);
    Animated.timing(cartModalAnim, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }

  const closeCartModal = () => {
    Animated.timing(cartModalAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setCartModalVisible(false));
  }

  const openModal = (sock) => {
    setSelectedSock(sock);
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const addToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size before adding to the cart.');
      return;
    }
  
    const newItem = {
      id: selectedSock.id,
      image: selectedSock.image,
      title: selectedSock.title,
      price: selectedSock.price,
      selectedColor,
      selectedSize,
      quantity: 1,  // Initialize quantity as 1
    };
  
    setCartItems((prevItems) => {
      // Check if item already exists with the same color and size
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize
      );
  
      if (existingItemIndex > -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;  // Increment quantity
        return updatedItems;
      } else {
        // If the item doesn't exist, add the new item with quantity 1
        return [...prevItems, newItem];
      }
    });
  
    openCartModal(); // Open the cart modal
  };
  
  const removeFromCart = (id, selectedColor, selectedSize) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(
        (item) =>
          item.id !== id || 
          item.selectedColor !== selectedColor ||
          item.selectedSize !== selectedSize
      )
    );
  };

  const increaseQuantity = (id, selectedColor, selectedSize) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  
  const decreaseQuantity = (id, selectedColor, selectedSize) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const [orderCompleteModalVisible, setOrderCompleteModalVisible] = useState(false);
  const [orderCompleteModalAnim] = useState(new Animated.Value(0));

  const handleCheckout = () => {
    setCartModalVisible(false);
    setCartItems([]);
  
    // Display the confirmation modal
    setOrderCompleteModalVisible(true);
    Animated.timing(orderCompleteModalAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeOrderCompleteModal = () => {
    Animated.timing(orderCompleteModalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setOrderCompleteModalVisible(false));
  };  
  
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
            onPress={() => openModal(item)}
          />
        )}
        contentContainerStyle={styles.listingsWrapper}
        numColumns={3} 
        columnWrapperStyle={styles.row}
      />

      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              opacity: modalAnim,
              transform: [
                {
                  translateY: modalAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {selectedSock && (
            <View style = {styles.outerModal}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
              <Image source={selectedSock.image} style={styles.largeImage} />
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedSock.title}</Text>
                <Text style={styles.modalPrice}>${selectedSock.price.toFixed(2)}</Text>
                <View style={styles.reviewsContainer}>
                  {/* Rating (Stars with Half Star) */}
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={26}
                    startingValue={4.6} 
                    ratingColor='#29398e'
                    readonly
                    style={styles.starsContainer}
                  />
                  
                  {/* Reviews Count */}
                  <Text style={styles.reviewsText}>10,000 Reviews</Text>
                </View>
                <Text style={styles.modalText}>Colors:</Text>
                <ColorCircles colors={selectedSock.colors} size={38} spacing={14} onColorSelect={setSelectedColor}></ColorCircles>
                <Text style={styles.modalText}>Sizes:</Text>
                <SelectableSizes onSizeSelect={setSelectedSize}></SelectableSizes>
                <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
                  <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Animated.View>


          <Modal visible={cartModalVisible} transparent={true} animationType="none" onRequestClose={closeCartModal}>
            <TouchableWithoutFeedback onPress={closeCartModal}>
              <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                  <Animated.View
                    style={[
                      styles.cartModalContainer,
                      {
                        transform: [
                          {
                            translateX: cartModalAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, 500], // Adjust to match animation logic
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <View style={styles.cartModal}>
                      <Icon name="shopping-cart" size={30} color="#000" style={styles.cartIcon}/>
                      <Text style={styles.cartHeader}>Shopping Cart</Text>
                      <Icon name="close" size={30} color="#000" style={styles.cartCloseIcon} onPress={closeCartModal}/>
                      {cartItems.length > 0 ? (
                      <>
                        {cartItems.map((item, index) => (
                          <View key={index}> 
                            <View style={styles.cartItem}>
                              <Image source={item.image} style={styles.cartItemImage} />
                              <View style={styles.cartItemDetails}>
                                <Text style={styles.cartItemTitle}>{item.title}</Text>
                                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                                <View style={styles.cartItemColor}>
                                  <Text style={styles.cartItemAttributes}>Color:</Text>
                                  <View
                                    style={[
                                      {
                                        backgroundColor: item.selectedColor,
                                        width: 14,
                                        height: 14,
                                        marginLeft: 6,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 100,
                                      },
                                    ]}
                                  />
                                </View>
                                <Text style={styles.cartItemAttributes}>Size: {item.selectedSize}</Text>
                                <Icon2 name="trash" size={26} color="#000" style={styles.trashIcon} onPress={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)} />
                                <View style={styles.quantityContainer}>
                                  {/* Minus Button */}
                                  <TouchableOpacity
                                    style={styles.quantityBox}
                                    onPress={() => decreaseQuantity(item.id, item.selectedColor, item.selectedSize)}
                                  >
                                    <Text style={styles.quantitySymbol}>-</Text>
                                  </TouchableOpacity>
                                  {/* Quantity Display */}
                                  <View style={styles.quantityMiddleBox}>
                                    <Text style={styles.quantityNumber}>{item.quantity || 1}</Text>
                                  </View>
                                  {/* Plus Button */}
                                  <TouchableOpacity
                                    style={styles.quantityBox}
                                    onPress={() => increaseQuantity(item.id, item.selectedColor, item.selectedSize)}
                                  >
                                    <Text style={styles.quantitySymbol}>+</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            {index < cartItems.length - 1 && <View style={styles.cartItemSeparator} />}
                          </View>
                        ))}
                        <View style={styles.subtotal}>
                          <Text style={styles.subTotalText}>
                            Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                          </Text>
                          <TouchableOpacity style={styles.checkout}>
                            <Text style={styles.checkoutText}>Checkout</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <Text>Your cart is empty.</Text>
                    )}
                    </View>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            visible={orderCompleteModalVisible}
            transparent={true}
            animationType="none"
            onRequestClose={() => setOrderCompleteModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={() => closeOrderCompleteModal()}>
              <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                  <Animated.View
                    style={[
                      styles.orderCompleteModalContainer,
                      {
                        opacity: orderCompleteModalAnim,
                        transform: [
                          {
                            scale: orderCompleteModalAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.8, 1], // Smooth scale effect
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <View style={styles.orderCompleteModal}>
                      <Text style={styles.orderCompleteHeader}>Your Order is Complete!</Text>
                      <Text style={styles.orderSummary}>
                        You have ordered {cartItems.length} item(s) for a total of $
                        {cartItems
                          .reduce((total, item) => total + item.price * item.quantity, 0)
                          .toFixed(2)}
                      </Text>
                      <TouchableOpacity
                        style={styles.okButton}
                        onPress={() => closeOrderCompleteModal()}
                      >
                        <Text style={styles.okButtonText}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  outerModal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  modalContent: {
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 32,
    flex: 1, 
    flexDirection: 'column'
  },
  largeImage: {
    width: '100%',
    height: 690,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalPrice: {
    fontSize: 24,
    marginTop: 12,
  },
  modalText: {
    fontSize: 18,
    marginTop: 18,
    fontWeight:'bold',
    marginBottom:2,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  starsContainer: {
    marginRight: 12,
  },
  reviewsText: {
    fontSize: 18,
    color: '#333',
  },
  sizesContainer: {
    flexDirection: 'row', // Arrange boxes in a row
    justifyContent: 'space-between', // Equal spacing between boxes
    marginTop: 12, // Adjust the margin to your needs
  },
  sizeBox: {
    width: '22.8%', // Adjust width to ensure equal spacing
    height: 46, // Fixed height for each box
    backgroundColor: '#f0f0f0', // Light grey background
    justifyContent: 'center', // Center the label vertically
    alignItems: 'center', // Center the label horizontally
    borderWidth: 2, // Border width to make the border visible when selected
    borderRadius: 6, // Rounded corners for the boxes
  },
  sizeLabel: {
    fontSize: 16, // Font size for the size label
    fontWeight: 'bold', // Bold text for the size label
  },
  closeButton: {
    position: 'absolute', 
    top: 36, 
    left: 26, 
    padding: 10, 
    backgroundColor: "#29398e", 
    borderRadius: 50,   
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 10, 
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  cartButton:{
    width:'100%',
    height:55,
    backgroundColor:'#29398e',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'auto'
  },
  cartText:{
    fontSize: 19, // Font size for the size label
    fontWeight: 'bold',
    color:'#fff'
  },
  outerContainer:{
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    width: '31.6%'
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
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cartModalContainer:{
    width: '46%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cartHeader:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:24,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  cartModal:{
    paddingHorizontal:20,
    paddingVertical:36,
    flexDirection:'column',
    height:'100%'
  },
  cartIcon:{
    position: 'absolute', 
    top: 36, 
    left: 20, 
  },
  cartCloseIcon:{
    position: 'absolute', 
    top: 36, 
    right: 20, 
  },
  cartItemImage:{
    width:97,
    height:97,
  },
  cartItem:{
    flexDirection:'row'
  },
  cartItemDetails:{
    flexDirection:'column',
    flex:1,
    marginLeft:12,
    justifyContent:'space-between'
  },
  cartItemTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice:{
    fontSize:14
  },
  cartItemAttributes:{
    fontSize:14
  },
  cartItemColor:{
    flexDirection:'row',
    alignItems:'center'
  },
  trashIcon:{
    position: 'absolute', 
    bottom:0,
    right:0
  },
  emptyCartText:{
    fontSize:18,
  },
  cartItemSeparator:{
    height: 1, 
    backgroundColor: '#ccc', 
    marginVertical: 18,
    width:'100%'
  },
  quantityContainer:{
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    right:38,
    backgroundColor:'#ccc',
    alignItems:'center'
  },
  quantityBox:{
    backgroundColor:'#ccc',
    width:22,
    height:22,
    alignItems:'center',
    justifyContent:'center'
  },
  quantityMiddleBox:{
    backgroundColor:'#fff',
    width:22,
    height:18,
    alignItems:'center',
    justifyContent:'center'
  },
  quantitySymbol:{
    color:'#000',
    textAlign:'center'
  },
  quantityNumber:{
    color:'#000',
    fontSize:13,
    fontWeight:'bold'
  },
  subtotal:{
    marginTop:'auto',
    marginLeft:'auto',
    width:'100%',
  },
  subTotalText:{
    color:'#000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20
  },
  checkout:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:60,
    backgroundColor:'#29398e',
    borderRadius:6
  },
  checkoutText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },
  orderCompleteModalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  orderCompleteModal: {
    alignItems: 'center',
  },
  orderCompleteHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderSummary: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  okButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});