import React from 'react';
// import logo from "../../assets/electricCar.png";
import logo from "../../assets/charging.png";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '../../node_modules/@react-navigation/stack';


function SignUpScreen<StackScreenProps>({ navigation }) {
 
  function signUp() {
   
   
      navigation.navigate('Welcome');
      return;
  
  }

  return (
    <View style={styles.container}>
      <View >
        {/* <Image source={{uri :'	https://png.pngtree.com/png-vector/20201223/ourlarped-electric-car-motorcycle-png-image_2609421.jpg'}}
        style={{height:500,width:200}}/> */}
        <Image source={logo}
        style={{height:500,width:420,alignItems:'center',}}/>
        {/* <Text style={{alignSelf: "center",fontWeight:'bold',fontSize:20 ,padding:20,color:'white',}}>
          ELECTRICAL  CAR ARE THE FUTURE 
        </Text>
        <Text style={{alignSelf: "center",fontWeight:'bold',fontSize:20 ,padding:5,color:'white',}}>
       OF 
        </Text>
        <Text style={{alignSelf: "center",fontWeight:'bold',fontSize:20 ,padding:20,color:'white'}}>
          A SUSTAINABLE FUTURE
        </Text> */}

        
          </View>
          <Pressable style={{backgroundColor:'white',width:400,margin:10,height:60 ,alignSelf: "center" ,marginTop:160,borderRadius:10}}>
                <Text style={{alignSelf: "center",padding:15,color:'black' ,fontWeight:'bold',fontSize:22,}} onPress={signUp} >Get Started</Text></Pressable>
       
       
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  icon: {
    padding: 20,
  },
  container: {
    flex: 1,
  
   
    paddingBottom: 10,
   
    // backgroundColor: '#05668d',
    backgroundColor: '#8ecae6',
    color: '#424242',
  },
  input: {
    // flex: 1,
    flexDirection:'row',
  
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
   
  },
});
