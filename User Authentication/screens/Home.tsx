import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Switch } from 'react-native';
import {useState} from 'react';



export default function App({navigation}) {
    const [switchVal , setSwitchVal]= useState(false)
  return (
   <View>
      <View style={styles.container2}>
      <Text>Profile </Text>
  
      <Switch
    
    trackColor = {{false:'#7657577',true:'#81b0ff'}}
   thumbColor={switchVal? '#fff':'#f4f3f4'} 
   onValueChange={()=> setSwitchVal((prevVal) => !prevVal)}
   value={switchVal}
   />
      
      <StatusBar style="auto" />
    </View>


    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Animated')
      }
    />

    <Switch
    
    trackColor = {{false:'#7657577',true:'#81b0ff'}}
   thumbColor={switchVal? '#fff':'#f4f3f4'} 
   onValueChange={()=> setSwitchVal((prevVal) => !prevVal)}
   value={switchVal}
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
  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue',
    height:200,
    width:700,
    fontColor:'white'

  }
});
