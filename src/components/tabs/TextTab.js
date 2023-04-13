import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const TextTab = () => {
    const textTabData=[
        {
            name:'Details',
            navigator:'details'
        },
        {
            name:'Transaction',
            navigator:'details'
        }
        ,
        {
            name:'Performance',
            navigator:'details'
        }
    ]
  return (
    <View style={styles.Container}>
    <TouchableOpacity style={styles.textContainer}>
      <Text>Details</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.textContainer}>
      <Text>Transaction</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.textContainer}>
      <Text>Performance</Text>
    </TouchableOpacity>
    </View>
  )
}

export default TextTab

const styles = StyleSheet.create({
  Container:{
    display:'flex',
    flexDirection:'row',
    width:250,

    justifyContent:'space-around'
  },
})