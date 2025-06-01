import { FlatList, StyleSheet} from 'react-native';

import TransactionItem from './TransactionItem';

const TransactionList =({ transactions }) => {
    return (
       <FlatList style={StyleSheet.transactionList}
            data ={ transactions }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TransactionItem transaction = {item} />
            )}
        />
    );
};

const styles = StyleSheet.create({
  transactionList: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
    width: '100%', // <-- Ensure full width
  },
});

export default TransactionList;