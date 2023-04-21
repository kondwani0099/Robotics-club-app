import React ,{useState} from "react";
import { Modal, TouchableOpacity, Text, Pressable, View ,Switch,StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";

const auth = getAuth();

function Settings() {
  const [switchVal , setSwitchVal]= useState(false)
  const [switchVal2 , setSwitchVal2]= useState(false)
  // const [modalVisible, setModalVisible] = React.useState(false);
  const { user } = useAuth();
  return (
    
          <View style={{marginTop:50}}>
            {/* <LinearGradient
              colors={["#141e30", "#243b55"]}
              style={{ flex: 1, borderRadius: 20 }}
            > */}
             <View style={{backgroundColor:'white'
    ,height:100,width:500,flexDirection:'row',
    shadowColor:'black',shadowOpacity:0.2,marginBottom:150}}>
      <View style={{backgroundColor:'#eeeee4',borderRadius:20,padding:20,
      margin:20,shadowColor:'black',shadowOpacity:0.1}}>
       <Feather
                    name="user"
                    color="black"
                    size={"28"}
                  />
                  </View>
                  <View>
                  <Text style={{fontWeight:'bold',textAlign:'center',fontSize:20,padding:10,paddingTop:20}}>Welcome</Text>
                   <Text> {user?.email}!</Text>
                  </View>
      
    </View>
             
            {/* </LinearGradient> */}



  <View style={styles.container2}>
      <Text style={{padding:20,marginRight:100,}}>Bluetooth</Text>
      <View >
  
      <Switch
    
    trackColor = {{false:'#7657577',true:'#81b0ff'}}
   thumbColor={switchVal2? '#fff':'#f4f3f4'} 
   onValueChange={()=> setSwitchVal2((prevVal) => !prevVal)}
   value={switchVal2}
   
   />
     </View> 
     
  </View>

  
  <View style={styles.container2}>
      <Text style={{padding:20,marginRight:100,}}>Location  </Text>
      <View >
  
      <Switch
    
    trackColor = {{false:'#7657577',true:'#81b0ff'}}
   thumbColor={switchVal? '#fff':'#f4f3f4'} 
   onValueChange={()=> setSwitchVal((prevVal) => !prevVal)}
   value={switchVal}
   
   />
     </View> 
     
  </View>
  {/* Dark mode button */}
  <View style={styles.container2}>
      <Text style={{padding:20,marginRight:100,}}>Dark Mode </Text>
      <View >
  
      <Switch
    
    trackColor = {{false:'#7657577',true:'#81b0ff'}}
   thumbColor={switchVal? '#fff':'#f4f3f4'} 
   onValueChange={()=> setSwitchVal((prevVal) => !prevVal)}
   value={switchVal}
   
   />
     </View> 

          </View>

{/* logo out button */}
<View style={styles.container2}>
     
    
     <Text style={{padding:20,marginRight:100,}}>Log Out </Text>
        <Pressable style={{alignItems:'center',margin:5,}} onPress={() => signOut(auth)}>
                   <View>
                     <Feather
                       name="log-out"
                       color="#81b0ff"
                       size={"27"}
                     />
                     {/* <Text style={{alignItems:'center',marginRight:50,}}>Logout</Text> */}
                   </View>
                 </Pressable>
     </View>
</View>// last view componet
 
  );
}

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
   flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    height:70,
    width:380,
    margin:10,
    borderRadius:5,
    fontColor:'white',
    shadowColor:'black',
    shadowOpacity:0.2,
    // padding:10,

  }
});