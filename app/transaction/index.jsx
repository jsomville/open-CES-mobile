import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const TransactionScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>Make a Transaction</Text>
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

export default TransactionScreen;