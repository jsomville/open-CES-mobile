import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

import logoImage from '@/assets/images/logo.png'

import globalStyles from '../globalStyle';

import { useRouter } from 'expo-router';

const AuthScreen = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Handle Login:', data);

    if (!username || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password');
      return;
    }

    try {
      const base_url = "https://open-ces-production.up.railway.app";
      const url = base_url + "/api/idp/login"
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login success:', data);
      Alert.alert('Success', 'Logged in successfully!');
      // Navigate or store token here

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
          secureTextEntry
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
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;