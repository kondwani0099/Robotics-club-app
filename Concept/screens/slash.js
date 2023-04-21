import React from 'react';
import logo from "../../assets/robotics.png"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Image, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function SignUpScreen<StackScreenProps>({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <View >
        {/* <Image soure={{uri :'http://freepng/green-and-environmentally-friendly-electric-vehicles_5938853.html'}}
        style={{height:500,width:200}}/> */}
        <Image soure={require=('../../assets/electricCar.png')}
        style={{height:500,width:200}}/>
        <Text style={{alignSelf: "center",fontWeight:'bold',fontSize:17 }}>
          Sign Up
        </Text>

        <View className="space-y-6" >
          <View className="mt-1 space-y-4">
            <View style={styles.input}>
              <Icon style={styles.icon} name="email" size={18} color="gray" />
              <TextInput
                placeholder='Email'
                value={value.email}
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, email: text })}
              />
            </View>

            <View style={styles.input}>
              <Icon style={styles.icon} name="lock" size={18} color="gray" />
              <TextInput
                placeholder="Password"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Pressable style={{backgroundColor:'#8ecae6',width:100,margin:20,height:35 ,alignSelf: "center" ,borderRadius:10}}>
            <Text style={{alignSelf: "center",padding:7,color:'white' }} onPress={signUp}>Sign Up</Text></Pressable>
        </View>
        <Text style={{alignSelf: "center" ,fontWeight:'bold'}} >Have an account? <Text className="text-blue" onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Text>
      </View>
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
    paddingTop: 100,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'white',
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
