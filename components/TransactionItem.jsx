import { View, Text, StyleSheet} from 'react-native';

const TransactionItem =({ transaction }) => {
    
    if (!transaction?.createdAt) return null;

    const date = new Date(transaction.createdAt);
    const day = date.getDate();
    const month = date.toLocaleString('default', {month :'short'});


    return (
        <View style={styles.transactionItem}>
            <View style={styles.transactionDate}>
                <Text style={styles.dateText}>{ day }</Text>
                <Text style={styles.dateText}>{ month }</Text>
            </View>
            <View style={styles.transactionTypeAndDescription} >
                <Text style={styles.transactionText}>{ transaction.type }</Text>
                <Text style={styles.transactionText}>{ transaction.description }</Text>
            </View>
            <View style={styles.transactionAmount}>
                <Text style={styles.transactionText}>{ transaction.amount }</Text>
            </View>
        </View>
    );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 2,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionText: {
    fontSize: 16,
  },
  transactionDate:{
    flexDirection: 'column',
    alignItems: 'center',
    //padding:2,
    paddingHorizontal:6,
    paddingVertical:2,
    margin:2,
  },
  transactionTypeAndDescription:{
    flex:1,
    padding:2,
    margin:2,
    flexDirection: 'column',
    alignItems: 'left',
  },
  transactionAmount:{
    flexDirection: 'column',
    alignItems: 'center',
    padding:2,
  },
});