import { Stack, Slot, useRouter } from "expo-router";
import { useState, useEffect} from 'react';

import { checkIsAuth } from '@/services/auth.js'
import { useFocusEffect } from "@react-navigation/native";


const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      //checkIsAuth()

      // Simulate async loading (e.g., auth check, fetching user data)
      await new Promise(resolve => setTimeout(resolve, 1000)); //  delay
      if (isLoading){
        router.push('/');
        console.log("push to home from main layout")
      }
      setIsLoading(false);
    }
    load();
    console.log("Layout Effect");
  });

  useFocusEffect(() => {
    console.log("Layout Focus Effect");
  });

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
      <Stack.Screen name='splash' options={{ title :"Splash"}} />
      
    </Stack>
  );

};
//<Stack.Screen name='auth' options={{ title :"Login", headerLeft :() => null}} />
//<Stack.Screen name='index' options={{ title :"Home"}} />

export default RootLayout;
