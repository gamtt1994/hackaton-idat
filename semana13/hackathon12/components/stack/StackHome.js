import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Principal from '../../screen/Home';
import Detalle from '../../screen/Detalle';

const Stack = createStackNavigator();
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const StackHome = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{cardStyleInterpolator: forFade}}>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Detalle"
          component={Detalle}
          options={({route}) => ({
            title: route.params.title,
            headerBackTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackHome;
