import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import ScreenWrapper from '@/components/ScreenWrapper';
import BombasLogo from '../assets/images/BombasLogo.png';

const images = [
  require('../assets/images/carousel1.webp'),
  require('../assets/images/carousel2.webp'),
  require('../assets/images/carousel3.webp'),
  require('../assets/images/carousel4.webp'),
];

const width = Dimensions.get('window').width;

export default function OnboardingScreen() {
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  const navigate = useNavigation();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.next(); // Move to the next item
      }
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleLogin = () => {
    navigate.navigate('login');
  };

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={ref}
          width={width}
          loop={true}
          pagingEnabled={true}
          height={760}  // Set a fixed height
          data={images}
          onProgressChange={(progressValue) => {
            progress.value = progressValue;  // Update progress state
          }}
          renderItem={({ index }) => (
            <View>
              <Image source={images[index]} style={styles.image} />
            </View>
          )}
        />
        <View style={styles.logoContainer}>
          <Image source={BombasLogo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Step Forward and Give Back with Bombas Loyalty</Text>
        <TouchableOpacity style={styles.button1} >
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleLogin} >
          <Text style={styles.buttonText2}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 686,
    fontFamily: 'Inter', 
  },
  button1: {
    marginTop: 52,
    backgroundColor: '#29398e',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    height: 50,
  },
  button2: {
    marginTop: 26,
    backgroundColor: '#c7d5ef',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    height: 50,
  },
  buttonText1: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '600',
  },
  buttonText2: {
    color: '#29398e',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '600',
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 550,
    height: 100,
    borderRadius: 100,
    marginTop: 30,
  },
  logo: {
    position:'relative',
    right:8
  }
});