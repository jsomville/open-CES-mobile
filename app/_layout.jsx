import { Stack } from "expo-router";


const RootLayout = () => {
  return (<Stack
      screenOptions={{
        headerStyle:{
          backgroundColor:'black'
        },
        headerTintColor: 'white',
        headerTitleStyle : {
          fontSize : 20,
          fontWeight : 'bold'
        },
        contentStyle:{
          paddingHorizontal : 10,
          paddingTop:10,
          backgroundColor : 'white'
        }
      }}
    >
      <Stack.Screen name='index' options={{ title :"Home"}} />
      <Stack.Screen name='auth' options={{ title :"Login"}} />
    </Stack>
  );
};

export default RootLayout;
