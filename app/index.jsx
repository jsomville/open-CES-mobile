import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import logoImage from '@/assets/images/logo.png'

import { useRouter } from 'expo-router'

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open CES-Mobile</Text>
      <Image source={logoImage} style={styles.image} />
      <Text style={styles.subtile}>Please Login</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    backgroundColor: '#f8f9fa',
},
image:{
  width: 100,
  height: 100,
  marginBottom: 20,
  borderRadius: 10,
},
title :{
  fontSize: 28,
  fontweight: 'bold',
  marginBottom: 10,
  color: '#333'
},
subtile :{
  fontSize: 16,
  marginBottom: 20,
  color :'#666',
  textAlign: 'center'
},
button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
})

export default HomeScreen;
