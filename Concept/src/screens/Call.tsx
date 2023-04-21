
import React from 'react';
import { Text, Pressable, View ,StyleSheet} from 'react-native';
import CreateClient from '../components/CreateClient'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
function Call() {
  let location = {
    latitude:23.259933,
    longitude:77.412613,
    latitudeDelta:0.009,
    longitudeDelta:0.009

  }
  return (
    <View style={{height:500}}>
    <View className="m-10">
      <Text className="text-white text-xl">Make a Call</Text>
    <CreateClient />
    </View>
    <View style={{height:500}}>
    <MapView
    style={StyleSheet.absoluteFillObject}
    provider={PROVIDER_GOOGLE}
    mapType='hybrid'
    region={location}>

    </MapView>
    </View>
    <View style={{backgroundColor:'white',width:400,height:400,marginLeft:10,}}>
      <Text style={{fontSize:20,textAlign:'center',padding:5}}>Book our Electric Car Today,at the most afforable price from the Roboics Club</Text>
      <View style={{backgroundColor:'#a4d6fb',height:50,width:300,borderRadius:20,margin:20,marginLeft:50}}>
        <Text style={{fontSize:20,textAlign:'center',padding:10,}}>Book Now</Text>
      </View>

    </View>
    </View>
  );
}


export default Call;
