import { useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  BackHandler,
} from 'react-native';
import { useRouter, useNavigation } from 'expo-router';

import logoImage from '@/assets/images/logo.png'

import globalStyles from '../globalStyle';

import { login } from '@/services/auth'
import { useFocusEffect } from '@react-navigation/native';

const AuthScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [username, setUsername] = useState('a@b.com');
  const [password, setPassword] = useState('Test12345!');

  useLayoutEffect(() => {
    console.log("Auth useLayoutEffect")
    navigation.setOptions({
      headerLeft: () => null,
      gestureEnabled: false,
    });
  }, [navigation]);

  useEffect(() => {
    console.log("Auth useEffect")
    const backAction = () => true; // Prevent default behavior
    const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => handler.remove();
  }, []);

  useFocusEffect(() => {
    console.log("Auth useFocus Effect")
  })

  const handleLogin = async () => {
    console.log('Handle Login');

    if (!username || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await login(username, password);
      if (response.status === 200){
          //Lasy but should work
          const token = response.data.accessToken;
          global.token = token
          global.email = username;

          //console.log(token);

          //Go to previous screen
          router.back();
      } else {
        // Edge case: axios doesn't throw on 204, 201, etc.
        console.warn('Unexpected status code:', response.status);

        Alert.alert('Login Error', response.status);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={globalStyles.mainContainer}>
      <Image source={logoImage} style={globalStyles.logoImage} />
      <View >
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  image:{
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 5,
  },
   buttonContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
});

export default AuthScreen;