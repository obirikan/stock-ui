import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ViewBase } from 'react-native'

const Performance = () => {
  return (
      <View >
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
  )
}

export default Performance

const styles = StyleSheet.create({
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