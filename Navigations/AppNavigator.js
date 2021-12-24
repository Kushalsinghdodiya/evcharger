import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../Screens/Homescreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {


   


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;