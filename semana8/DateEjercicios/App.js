import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Meses from './src/components/ListaMeses/meses';
import moment from 'moment';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.picker}>Appointment</Text>
      <Meses />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10, marginVertical: 50},
  picker: {fontSize: 35, color: 'black'},
});

export default App;
