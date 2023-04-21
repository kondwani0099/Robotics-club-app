import React from "react";
import logo from '../../assets/robotics.png';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// import { Icon } from "react-native-elements";
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from "../../node_modules/@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function SignInScreen<StackScreenProps>({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
        <Image
          source={logo}
          style={{width: 250, height: 200, alignSelf: "center" }}
        />
        <Text style={{ alignSelf: "center",fontSize:20,fontWeight:'bold',margin:9 }}>
          Sign In
        </Text>

        <View className="space-y-6">
          <View className="mt-1 space-y-4">
            <View style={styles.input}>
              <Icon style={styles.icon} name="email" size={18} color="gray" />
              <TextInput
                placeholder="Email"
                value={value.email}
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, email: text })}
              />
            </View>

            <View  style={styles.input}>
              <Icon style={styles.icon} name="lock" size={18} color="gray" />
              <TextInput
                placeholder="Password"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity>
          <Pressable style={{backgroundColor:'#00b4d8',width:100,margin:10,height:50 ,alignSelf: "center" ,borderRadius:10,}}>
            <Text
              style={{alignSelf: "center",padding:15,color:'white',fontWeight:'bold' }}
              onPress={signIn}
            >
              Sign In
            </Text>
          </Pressable>
          </TouchableOpacity>

        
        </View>
          {/* social media icons  */}
          <View style={styles.loginWithBar}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
              name='facebook'
              size={30}
              color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
              name='apple'
              size={30}
              color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
              name='google'
              size={30}
              color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
              name='github'
              size={30}
              color='white'/>
            </TouchableOpacity>
          </View>
        <Text style={{ alignSelf: "center",fontWeight:'bold' }}>
          Don't Have an account?{" "}
          <Text
            
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  icon: {
    padding: 20,
  },
  container: {
    flex: 1,
    paddingTop: 70,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "white",
    color: "#424242",
  },
  loginWithBar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10

  },
  iconButton:{
    backgroundColor:'#8ecae6',
    padding:14,
    marginHorizontal:10,
    borderRadius:100,

  },
  input: {
    // flex: 1,
    flexDirection:'row',
    borderColor:'black',
    borderStyle:'solid',
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginTop:5,
    backgroundColor: "white",
    color: "#424242",
    shadowColor:'black',
    shadowOpacity:0.1
  },
  btn1:{
    backgroundColor:'white',
    width:100,
    maxHeight:30,
borderRadius:5,
padding:5,
alignContent:"center",
justifyContent:'center',
    color: '#424242',
    margin: 9,
    marginLeft:150,
    textAlign:'center'
},
btn2:{
    backgroundColor:'white',
    width:90,
    maxHeight:30,
borderRadius:5,
alignContent:"center",
justifyContent:'center',
  textAlign:'center'
    
},
});
