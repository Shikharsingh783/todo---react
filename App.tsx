import React from 'react';
import { View, Text } from 'react-native';
import TodoScreen from './src/screens/Todo';
import SplashScreen from './src/screens/splash_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Todo' component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
