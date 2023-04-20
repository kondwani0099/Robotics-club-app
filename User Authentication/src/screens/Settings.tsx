import React from "react";
import { Modal, TouchableOpacity, Text, Pressable, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";

const auth = getAuth();

function Settings() {
  // const [modalVisible, setModalVisible] = React.useState(false);
  return (
    
          <View style={{marginTop:50}}>
            {/* <LinearGradient
              colors={["#141e30", "#243b55"]}
              style={{ flex: 1, borderRadius: 20 }}
            > */}
              <Pressable onPress={() => signOut(auth)}>
                <View>
                  <Feather
                    name="log-out"
                    color="black"
                    size={"24"}
                  />
                  <Text className="text-white text-xl">Logout</Text>
                </View>
              </Pressable>
            {/* </LinearGradient> */}
          </View>
    //     </TouchableOpacity>
    //   </Modal>
    // </View>
  );
}

export default Settings;
