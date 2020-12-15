import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import ItemScreen from './screens/ItemScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="ItemScreen" component={ItemScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
     </NavigationContainer>
    

  );
}


