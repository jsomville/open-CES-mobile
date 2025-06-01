import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center'
  },
});

export default SplashScreen;