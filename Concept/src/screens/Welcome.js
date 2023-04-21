import React from 'react';
import { Text, Pressable,Image, View ,StyleSheet} from 'react-native';
import'@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
  <LinearGradient colors={['#0d76c3', 'white']} style={{margin:1 ,flex:1, borderRadius: 5}}>
      <View className="mx-4 h-full flex justify-center align-center space-y-6">
      <View>
      <Image source={require('../../assets/robotics.png')} style={{width: 250, height: 250, alignSelf: 'center'}}/>
      </View>
      <Text style={styles.words} >Electric Cars for a sustainable future in Zambia</Text>
      <Text style={styles.words} >Book our Electrical Car Online Today</Text>
      <View >
        <Pressable style={styles.btn1}><Text style={styles.btn2} onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Pressable>
        <Pressable style={styles.btn1}><Text style={styles.btn2} onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
      </View>
    </View>
    </LinearGradient>
    </View>
  );
}


export default WelcomeScreen;
const styles = StyleSheet.create({
    icon: {
      padding: 100,
    },
    welcome: {
      flex: 1,
      paddingTop: 15,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      backgroundColor: '#a4d6fb',
      color: '#424242',
    },
    btn1:{
        backgroundColor:'white',
        width:300,
        maxHeight:90,
        borderRadius:5,
        padding:20,
        alignContent:"center",
        justifyContent:'center',
        color: '#424242',
        margin: 10,
        marginLeft:50,
        textAlign:'center'
    },
    btn2:{
        backgroundColor:'white',
        alignContent:"center",
        justifyContent:'center',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20
    
        
    },
    words:{
        margin:5,
        padding:5,
        alignContent:"center",
        justifyContent:'center',
        color:'white',
        textAlign:'center'
    }
  });
  