import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const ShowQRScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>ShowQR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default ShowQRScreen;