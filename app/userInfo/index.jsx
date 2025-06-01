import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const UserInformation = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>User Information</Text>
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

export default UserInformation;