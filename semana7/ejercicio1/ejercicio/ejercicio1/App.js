import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DashBoard from './src/screens/home/DashBoard';
const App = () => {
  return (
    <>
      <DashBoard />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;
