
import React , { useState }from "react";
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount=(count+1);
    }

    const decrement =() =. {
        setCountt=(count-1);    }
    <View style ={styles.container}

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
