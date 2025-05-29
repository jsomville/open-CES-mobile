import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

const TransactionsScreen = () => {
  const [ transactions, setTransactions ] = useState([
    {id: '1', text : "Transaction 1" },
    {id: '2', text : "Transaction 2" },
    {id: '3', text : "Transaction 3" },
  ]);
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text>Transactions Page</Text>
        <TouchableOpacity
            style={styles.button}
            //onPress={() => router.push('/transactions')}
          >
            <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>

        <FlatList
          data ={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionText}>{ item.text }</Text>
            </View>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  transactionText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default TransactionsScreen;