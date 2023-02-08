import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as pages from '../pages'
import { Provider } from 'react-redux';
import store from "../store";

const Stack = createNativeStackNavigator();

function Router() {
  return (
      // <Provider >
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen name="Home" component={pages.IntroPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
export default Router;
