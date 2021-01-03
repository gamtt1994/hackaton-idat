import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dashboard from './components/stack/StackHome';

const App = () => {
  return <Dashboard />;
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
