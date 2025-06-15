import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { useRouter } from 'expo-router'

import { useEffect, useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import logoImage from '@/assets/images/logo.png'

import globalStyles from './globalStyle';

import {getUserDetail} from "@/services/user";
import { checkIsAuth } from '@/services/auth'

import TransactionList from '../components/TransactionList';
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
  const router = useRouter();
  const smallButtonSize = 30;

  const [ accountBalance, setAccountBalance ] = useState(99.99);
  const [ accountBalanceSymbol, setAccountBalanceSymbol ] = useState("U");
  const [ accountNumber, setAccountNumber ] = useState("23-556-88");

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

  useFocusEffect(() => {
    console.log("Home Use Focus effect");
  });

  useEffect(() => {
    console.log("Home Use effect");
    //Redirect to login page
    if (!checkIsAuth()){
      changeScreen("/auth"); // Bug we push 2 x this screen
    }
    else{
      try {
        const fetchData = async() => {
          console.log(`fetch data ${global.email}`);

          const response = await getUserDetail(global.email);
          console.log("Get User Data Status :", response.status);
          if (response.status === 200){
             const accounts = response.data.accounts;
             
             if (accounts){
              //Hard coded to the first account should comes from the app config or 
              const account = accounts[0];
              
              setAccountBalance(account.balance);
              setAccountBalanceSymbol("Z"); // should come from the api...
              setAccountNumber(account.id);

              /*console.log("hello");
              const transactionsTable = account.latestTransactions.map(trans => ({
                id: trans.id,
                createdAt: trans.createdAt,
                type: trans.transactionType,
                amount: trans.amount,
                description: trans.description, // make sure spelling is correct!
              }));
              //console.log(transactionsTable);
              setTransactions(transactionsTable);*/
            }
          }
          else if (response.status === 403){
            // When Token is expired we need to use the refresh token 

            // If refresh token is expired display login form again


          }
        };
        fetchData();
      }
      catch(error){
        console.error(error)
        Alert.alert('User Detail Error', error);
      }
    }
  })

  return (
    <View style={globalStyles.mainContainer}>
      <View>
        <Image source={logoImage} style={globalStyles.logoImage} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>{accountBalance}</Text>
          <Text style={styles.balanceText}> </Text>
          <Text style={styles.balanceText}>{accountBalanceSymbol}</Text>
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
