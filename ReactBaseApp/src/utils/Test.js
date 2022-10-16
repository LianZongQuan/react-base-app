import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
// import RNEChartsPro from "react-native-echarts-pro";
import RNEChartsPro from "react-native-echarts-pro";
import WebView from "react-native-webview";


const Test = ({navigation}) => {
  const pieOption = {
    series: [
      {
        width:100,
        height:100,
        name: 'Access From',
        type: 'pie',
        radius: ['55%', '70%'],
        // avoidLabelOverlap: false,
        label: {
          show: true,
          fontSize: '30',
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: false,
        //     fontSize: '40',
        //     fontWeight: 'bold'
        //   }
        // },
        // labelLine: {
        //   show: true
        // },
        data: [
          
          { value: 1048, name: '98',
            itemStyle:{
              color :'#000000' 
            }
          },
          { value: 735, name: '' },
        ]
      }
    ]
  };
  return (
    <View>
      <TouchableOpacity >
      <RNEChartsPro  height={500} option={pieOption} />

      </TouchableOpacity>
      <Text>
        lian
      </Text>
    </View>
);

}
export default Test;

