import { View, Text, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

const TemplateScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>Template</Text>
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

export default TemplateScreen;