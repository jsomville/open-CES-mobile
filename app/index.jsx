import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router'

import { useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import logoImage from '@/assets/images/logo.png'

import globalStyles from './globalStyle';

import TransactionList from '../components/TransactionList';

const HomeScreen = () => {
  const router = useRouter();
  const smallButtonSize = 30;

  const accountValue = 99.99;
  const accountCurrencySymbol = "U";
  const accountNumber = "123-556-887"

  const [ transactions, setTransactions ] = useState([
    {id: '1', createdAt:"2025-01-01T10:01:01Z", type:"BUY", amount:"11.25", description : "description" },
    {id: '2', createdAt:"2025-01-01T11:01:01Z", type:"BUY", amount:"11.25", description : "description" },
    {id: '3', createdAt:"2025-01-01T11:30:01Z", type:"BUY", amount:"25.50", description : "description" },
    {id: '4', createdAt:"2025-02-01T10:01:01Z", type:"BUY", amount:"123.00", description : "description" },
    {id: '5', createdAt:"2025-03-01T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
  ]);

   const changeScreen = async (screenPath) => {
    console.log(`From Menu GO TO - ${screenPath}`);
    router.push(screenPath);
   }

  return (
    <View style={globalStyles.mainContainer}>
      <View>
        <Image source={logoImage} style={globalStyles.logoImage} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>{accountValue}</Text>
          <Text style={styles.balanceText}> </Text>
          <Text style={styles.balanceText}>{accountCurrencySymbol}</Text>
        </View>
        <Text style={styles.accountNumber}>{accountNumber}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => changeScreen('/userInfo')}  
        >
          <MaterialIcons name="badge" size={smallButtonSize} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => changeScreen('/showQR')}
        >
           <MaterialIcons name="qr-code" size={smallButtonSize} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => changeScreen('/transaction')}
        >
          <MaterialIcons name="qr-code-scanner" size={smallButtonSize} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => changeScreen('/auth')}
        >
          <MaterialIcons name="login" size={smallButtonSize} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => changeScreen('/resetPassword')}
        >
          <MaterialIcons name="password" size={smallButtonSize} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={globalStyles.headerText} >Latest Transactions</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => changeScreen('/transactions')}
          >
            <MaterialIcons name="history" size={smallButtonSize} color="black" />
          </TouchableOpacity>
        </View>
        <TransactionList transactions={ transactions }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    alignSelf: 'center'
  },
  balanceText :{
    fontSize: 24,
    marginBottom: 5,
    color: "black"
  },
  accountNumber :{
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 5,
    margin:5,
    alignContent:"center",
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  transactions: {
    padding: 2,
    //backgroundColor: 'gray',
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 2,
    backgroundColor: '#f8f9fa',
  },
})

export default HomeScreen;
