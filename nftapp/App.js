import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home'
import Details from './screens/Details'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts }from 'expo-font';

const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const Stack = createStackNavigator();
const App = () =>  {
  const [loaded] = useFonts({
      InterBold: require('./assets/fonts/Inter-Bold.ttf'),
      InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
      InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
      InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator  screen={{ headerShown: false}} initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        <Stack.Screen options={{headerShown:false}} name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;