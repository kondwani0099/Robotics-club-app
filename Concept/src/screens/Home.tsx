import React from 'react';
import { Text, View, StyleSheet,Image,ScrollView,Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
// import Mainpic from '../../assets/mainCar.jpg';
import Mainpic from '../../assets/bluecar.jpg';
import Battery from '../../assets/battery.jpg';
import{VictoryBar,VictoryChart,VictoryTheme,VictoryAxis,} from'victory-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export default function HomeScreen() {
  // const VictoryChart: React.NamedExoticComponent<VictoryChartProps>

  return (
    <View style={styles.container}>

      <View >
        < Image source={ Mainpic}
         style={{height:350,width:500,alignSelf:'center',margin:10,padding:50,}}/>
      </View>

      <ScrollView>
     <View style={{flexDirection:'row',flex:2}}>
      <View style={{backgroundColor:'white',width:195,height:160,margin:5,borderRadius:10,shadowColor: 'black',
         shadowOpacity: 0.5,}}>
        <Image source={Battery} 
        style={{height:120,width:190,margin:2}}/>
        <Text style={{alignItems:'center',textAlign:'center',padding:10}}>Battery Management</Text>

      </View>
      <View style={{backgroundColor:'white',width:195,height:160,margin:5,borderRadius:10,alignItems:'center',
      alignContent:"center",padding:40,shadowColor:'black',shadowOpacity: 0.5}}>
      <MaterialCommunityIcons size={48} name="cloud" color={'#8ecae6'} />
      <Text style={[{fontSize:30}]}>20 ˚C</Text>

      </View>
     </View>

     <Text style={{padding:10,fontWeight:'bold',fontSize:20,alignSelf:'center'}}>Power Usage Graphs</Text>
    
      {/* graph */}
      <View style={{margin:5,}}>
 
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#3a86ff",
      backgroundGradientTo: "#3a86ff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>


  {/* graph */}
  <View style={{margin:5,}}>
 
 <ProgressChart
   data={{
    //  labels: ["January", "February", "March", "April", "May", "June"],
    //  datasets: [
    //    {
    //      data: [
    //        Math.random() * 100,
    //        Math.random() * 100,
    //        Math.random() * 100,
    //        Math.random() * 100,
    //        Math.random() * 100,
    //        Math.random() * 100
    //      ]
    //    }
    //  ]
    data:[0.4, 0.6, 0.8]
   }}
   width={Dimensions.get("window").width} // from react-native
   height={220}
   yAxisLabel="$"
   yAxisSuffix="k"
   yAxisInterval={1} // optional, defaults to 1
   chartConfig={{
     backgroundColor: "#e26a00",
     backgroundGradientFrom: "#3a86ff",
     backgroundGradientTo: "#3a86ff",
     decimalPlaces: 2, // optional, defaults to 2dp
     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
     style: {
       borderRadius: 16
     },
     propsForDots: {
       r: "6",
       strokeWidth: "2",
       stroke: "#ffa726"
     }
   }}
   bezier
   style={{
     marginVertical: 8,
     borderRadius: 16
   }}
 />
</View>

{/* <View>
      <VictoryChart
      width={360}
      theme={VictoryTheme.material}
      domainPaddng={20}/>
      <VictoryAxis
      tickValues={[2011,2012,2013,2014,2015]}
      tickFormat={['2011','2012','2013']}/>
      <VictoryAxis
      dependentAxis
      tickFormat={(x)=>`K{x/100}k`}/>
      <VictoryBar
      data={[
        {year:2011,earnings:13000},
        {year:2012,earnings:13000},
        {year:2013,earnings:13000},
        {year:2014,earnings:13000},
        {year:2015,earnings:13000}
      ]}
      x='year'
      y='earning'
      />

      </VictoryChart>
      </View> */}
      
     </ScrollView>
    </View>
 
  );
}
const styles = StyleSheet.create({
  icon: {
    padding: 100,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '8ecae6',
    color: 'fefae0',
  },
});
