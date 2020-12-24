import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Actividad1 from '../../../../screens/Actividad1';
import Actividad2 from '../../../../screens/Actividad2';
import Inicio from '../../../../screens/Inicio';

const Stack = createStackNavigator();
//const RootStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Actividad1" component={Actividad1} />
      <Stack.Screen name="Actividad2" component={Actividad2} />
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Contact" component={Contact} /> */}
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
