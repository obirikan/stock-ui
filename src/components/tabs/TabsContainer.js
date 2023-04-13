import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import TextTab from './TextTab';

const TabsContainer = () => {
  return (
    <SafeAreaView  >
      <View style={styles.maincenter}>
          <View style={styles.iconContainer}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        <View style={styles.center}>
            <TextTab/>
        </View>
        <View>{}</View>
      </View>
    </SafeAreaView >
  )
}

export default TabsContainer

const styles = StyleSheet.create({
   center:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    // backgroundColor:'yellow',
    borderWidth:1,
    // height:30,
    // width:230,

    borderRadius:25,
   },
   maincenter:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
   },
   iconContainer:{
    borderWidth:1,
    padding:5,
    borderRadius:25,
   }
})