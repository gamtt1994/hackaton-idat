import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import moment from 'moment';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width / 5,
    height: height / 12,
    backgroundColor: 'white',
    color: 'black',
    margin: 10,
    borderRadius: 10,
  },
  textView: {},
  itemTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
});

const DiaActual = moment().format('DD');
console.log('dia actual', DiaActual);

const MesesItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.dia}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MesesItem;
