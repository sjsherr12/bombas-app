import ScreenWrapper from '@/components/ScreenWrapper';
import { Text, StyleSheet, TouchableOpacity, View, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import GoogleLogo from '../assets/images/GoogleLogo.png';
import AppleLogo from '../assets/images/AppleLogo.png';
import FacebookLogo from '../assets/images/FacebookLogo.png';

const AlternativeLogin = ({ image, name }) => {
    return (
        <View style={styles.altLoginContainer}>
            <Image source={image} style={styles.altLoginImage} />
            <Text style={styles.altLoginText}>Continue with {name}</Text>
        </View>
    );
};

export default function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('sjsherr1379@gmail.com');
    const [password, setPassword] = useState('Apollo123!$!');

    const handleClose = () => {
        navigation.goBack();
    };  

    const handleLogin = () => {
      navigation.navigate('(tabs)', { screen: 'shop' });
    };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
                <ScreenWrapper withHeader={false}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Join the Hive!</Text>
                        <Text style={styles.subtitle}>Log in to the Bombas Loyalty Program and start earning rewards.</Text>
                    
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
                        </View>

                        <Text style={styles.forgotPassword}>Forgot Password?</Text>

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                          <Text style={styles.loginButtonText}>Log In</Text>
                        </TouchableOpacity>

                        <View style={styles.orContainer}>
                          <View style={styles.orLine} />
                          <Text style={styles.orText}>or</Text>
                          <View style={styles.orLine} />
                        </View>

                        <AlternativeLogin image={GoogleLogo} name='Google' />
                        <AlternativeLogin image={FacebookLogo} name='Facebook' />
                        <AlternativeLogin image={AppleLogo} name='Apple' />
                    </View>
                </ScreenWrapper>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingTop: 16,
  },
  title: {
    fontSize: 56,
    fontWeight: '800',
    marginTop: 38,
    fontFamily:'Inter'
  },
  subtitle: {
    fontSize: 21,
    fontWeight: '480',
    marginTop:22,
    fontFamily:'Inter',
    marginBottom: 18,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#29398e',
    width: 36,
    height: 36,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#fff',
  },
  inputContainer: {
    marginTop: 36,
  },    
  inputLabel: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Inter',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 7,
    padding: 14,
    fontFamily: 'Inter',
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter',
    marginTop: 26,
    color: '#757575',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#29398e',
    borderRadius: 10,
    padding: 17,
    marginTop: 38,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Inter',
    color: '#fff',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#bfbfbf',
  },
  orText: {
    marginHorizontal: 18,
    fontSize: 16,
    color: '#555',
    position: 'relative',
    bottom: 1,
  },
  altLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 10,
    position: 'relative',
    marginBottom: 20,
},
altLoginImage: {
    width: 30,
    height: 30,
},
altLoginText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '600',
    position: 'absolute',
    left: 0,
    right: 0,
    color: '#525252',
},
});