// import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
// import * as React from 'react';
// // import { View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// const Tabscreen = () => {
//     const FirstRoute = () => (
//         <View style={styles.tabView} />
//       );
    
//       const SecondRoute = () => (
//         <View style={styles.tabView} />
//       );
    
//       const renderScene = SceneMap({
//         first: FirstRoute,
//         second: SecondRoute,
//       });
    
//       const layout = useWindowDimensions();
    
//       const [index, setIndex] = React.useState(0);
//       const [routes] = React.useState([
//         { key: 'first', title: 'Performance' },
//         { key: 'second', title: 'Withdraw' },
//       ]);

//   return (
//     <TabView
//     navigationState={{ index, routes }}
//     renderScene={renderScene}
//     onIndexChange={setIndex}
//     initialLayout={{ width: layout.width }}
//     tabBarStyle={styles.tabBarStyle}
//     tabStyle={styles.tabStyle}
//     indicatorContainerStyle={{ backgroundColor: 'white' }}
//     />
//   )
// }

// export default Tabscreen

// const styles = StyleSheet.create({
//     tabBarStyle: {
//         backgroundColor: 'black',
//         paddingTop: 10,
//         paddingBottom: 10,
//       },
//       tabStyle: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       tabView: {
//         flex: 1,
//         backgroundColor: '#fff',
//       },
// })


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Performance from './service/Performance';
import Details from './service/Details';
function Tabscreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Performance" component={Performance} />
      <Tab.Screen name="Withdraw" component={Details } />
    </Tab.Navigator>
  );
}
export default Tabscreen