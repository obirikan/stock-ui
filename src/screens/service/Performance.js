import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { ViewBase } from 'react-native'
import Charts from '../Charts'
const Performance = () => {
  return (
<ScrollView>
  <View style={styles.parentcontainer}>
     <View>
          <View>
             <Text>current value</Text>
             <View style={styles.child1view}>
                <Text>GHS 25,000</Text>
                <View></View>
                <View style={styles.child2view}>
                  <Text>icon</Text>
                  <Text>text</Text>
                </View>
              
             </View>
          </View>

          <View style={styles.parent2}>
              <View>
                 <Text>Total invested</Text>
                 <Text>GHS 1500</Text>
              </View>
              <View>
                 <Text>Total Return</Text>
                 <Text>GHS 1500</Text>
              </View>
              <View>
                  <Text>Total Withdrawn</Text>
                 <Text>GHS 1500</Text>
              </View>
          </View>
       </View>
    </View>
    <Charts/>
  </ScrollView>
  )
}

export default Performance

const styles = StyleSheet.create({
  parentcontainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'lightGray',
    margin:10,
    padding:10,
    height:100
  },
  child1view:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  child2view:{
    display:'flex',
    flexDirection:'row',
  },
  parent2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})