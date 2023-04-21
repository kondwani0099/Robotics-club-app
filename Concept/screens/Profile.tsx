import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

function App(navigation) {
  return (
    <View style={styles.container}>
      
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    backgroundColor:'blue',
    height:200,
    width:700,

  }
});

export default App