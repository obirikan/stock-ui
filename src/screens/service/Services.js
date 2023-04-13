import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
// import Tabs from '../components/tabs/TabsContainer'
import TabsContainer from '../../components/tabs/TabsContainer'
import Tabscreen from '../Tabscreen'

const Services = () => {
  return (
    <SafeAreaView style={{flex:3}}>
      <View>
          <TabsContainer/>
      </View>
      <View style={{flex:0.5}}>
         <Tabscreen/>
      </View>
      
      
    </SafeAreaView >
  )
}

export default Services

const styles = StyleSheet.create({})