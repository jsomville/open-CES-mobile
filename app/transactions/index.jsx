import { useState } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import globalStyles from '../globalStyle';

import TransactionList from '../../components/TransactionList';

const smallButtonSize = 30;

const TransactionsScreen = () => {
  const [ transactions, setTransactions ] = useState([
    {id: '1', createdAt:"2025-01-01T10:01:01Z", type:"BUY", amount:"11.25", description : "description" },
    {id: '2', createdAt:"2025-01-01T11:01:01Z", type:"BUY", amount:"11.25", description : "description" },
    {id: '3', createdAt:"2025-01-01T11:30:01Z", type:"BUY", amount:"25.50", description : "description" },
    {id: '4', createdAt:"2025-02-01T10:01:01Z", type:"BUY", amount:"123.00", description : "description" },
    {id: '5', createdAt:"2025-03-01T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '6', createdAt:"2025-03-05T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '7', createdAt:"2025-03-06T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '8', createdAt:"2025-04-02T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '9', createdAt:"2025-04-04T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    /*{id: '10', createdAt:"2025-04-08T10:01:01Z", type:"BUY", amount:"6.25", description : "description" },
    {id: '11', createdAt:"2025-04-12T10:01:01Z", type:"BUY", amount:"12.25", description : "description" },
    {id: '12', createdAt:"2025-04-17T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '13', createdAt:"2025-04-22T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },
    {id: '14', createdAt:"2025-05-01T10:01:01Z", type:"BUY", amount:"25.25", description : "description" },
    {id: '15', createdAt:"2025-05-05T10:01:01Z", type:"BUY", amount:"85.25", description : "description" },
    {id: '16', createdAt:"2025-05-10T10:01:01Z", type:"BUY", amount:"102.25", description : "description" },
    {id: '17', createdAt:"2025-06-24T10:01:01Z", type:"BUY", amount:"5.25", description : "description" },*/
  ]);
  const router = useRouter();

  return (
    <View style={globalStyles.mainContainer}>
        <View style={styles.transactionHeader}>
          <Text style={globalStyles.headerText} >Transactions</Text>
          <TouchableOpacity
              style={globalStyles.button}
              //onPress={() => router.push('/transactions')}
            >
              <MaterialIcons name="refresh" size={smallButtonSize} color="blue" />
          </TouchableOpacity>
        </View>
        
        <TransactionList transactions={ transactions }/>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: 2,
    borderRadius: 5,
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default TransactionsScreen;