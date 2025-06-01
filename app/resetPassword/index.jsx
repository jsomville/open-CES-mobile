import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const ResetPassowrdScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>Reset Password</Text>
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

export default ResetPassowrdScreen;