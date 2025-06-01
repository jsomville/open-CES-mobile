import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  mainContainer: {
    padding: 2,
    backgroundColor: '#fff',
    //marginTop: 10,
    justifyContent: "center",
    //alignItems: "center",
  },
  logoImage:{
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  headerText:{
     fontSize: 18,
     color: "black",
     
  },
  button: {
    //backgroundColor: '#007bff',
    backgroundColor: 'pink',
    padding: 6,
    margin: 5,
    borderRadius: 8,
  },
});

export default globalStyles;