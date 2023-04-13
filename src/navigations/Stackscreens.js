import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// import Transaction from '../screens/service/Transaction';
// import Details from '../screens/Details';
import Details from '../screens/service/Details';
// import Performance from '../screens/Performance';
import Performance from '../screens/service/Performance';
import Transaction from '../screens/service/Transaction';
const Stack = createStackNavigator();
// import Services from '../screens/Services';
import Services from '../screens/service/Services';

const Stackscreen = () => {
    return (
      <NavigationContainer independent={true}>  
        <Stack.Navigator>
             <Stack.Screen name="service" component={Services} options={{ headerShown: false }} />
             <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
             <Stack.Screen name="performance" component={Performance} options={{ headerShown: false }} />
             <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Stackscreen;