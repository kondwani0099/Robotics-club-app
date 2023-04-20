import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { useAuth } from '../hooks/useAuth';


export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
      <Text style={{alignSelf:'center'}}>Welcome {user?.email}!</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    padding: 100,
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '8ecae6',
    color: 'fefae0',
  },
});
