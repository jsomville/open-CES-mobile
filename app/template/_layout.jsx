import { Stack } from 'expo-router';

const TemplateLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default TemplateLayout;